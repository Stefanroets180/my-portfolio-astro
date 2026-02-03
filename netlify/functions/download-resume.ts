import { Handler } from '@netlify/functions';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// Initialize S3 client
const initializeS3Client = () => {
  const region = process.env.AWS_REGION || 'us-east-1';
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!accessKeyId || !secretAccessKey) {
    throw new Error('AWS credentials not configured');
  }

  return new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
};

// Helper function to convert S3 stream to buffer
const streamToBuffer = async (stream: ReadableStream<Uint8Array>): Promise<Buffer> => {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  if (chunks.length === 0) {
    throw new Error('No data received from S3 stream');
  }

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);

  if (totalLength === 0) {
    throw new Error('Empty file received from S3');
  }

  const buffer = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }

  return Buffer.from(buffer);
};

export const handler: Handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Method Not Allowed',
    };
  }

  try {
    // Get environment variables
    const bucketName = process.env.S3_BUCKET_NAME;
    const resumeKey = process.env.S3_RESUME_KEY || 'resume.pdf';

    // Validate required environment variables
    if (!bucketName) {
      console.error('Missing S3_BUCKET_NAME environment variable');
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Server configuration error: Missing S3_BUCKET_NAME',
      };
    }

    // Initialize S3 client
    const s3Client = initializeS3Client();

    console.log('Resume download request received');
    console.log(`Bucket: ${bucketName}, Key: ${resumeKey}`);

    // Get resume from S3
    let s3Response;
    try {
      const getObjectCommand = new GetObjectCommand({
        Bucket: bucketName,
        Key: resumeKey,
      });

      s3Response = await s3Client.send(getObjectCommand);
    } catch (error) {
      console.error('S3 Error:', error);

      if (error instanceof Error) {
        if (error.name === 'NoSuchKey') {
          return {
            statusCode: 404,
            headers: { 'Content-Type': 'text/plain' },
            body: `Resume file not found. Looking for: ${resumeKey}`,
          };
        }
        if (error.name === 'NoSuchBucket') {
          return {
            statusCode: 404,
            headers: { 'Content-Type': 'text/plain' },
            body: `S3 bucket not found: ${bucketName}`,
          };
        }
        if (error.name === 'AccessDenied') {
          return {
            statusCode: 403,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Access denied to S3 bucket. Please check AWS credentials and permissions.',
          };
        }
      }

      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: `Failed to retrieve resume: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }

    if (!s3Response.Body) {
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Resume file is empty or could not be read',
      };
    }

    // Convert S3 stream to buffer
    let resumeBuffer: Buffer;
    try {
      const stream = s3Response.Body.transformToWebStream();
      resumeBuffer = await streamToBuffer(stream);
    } catch (error) {
      console.error('Stream conversion error:', error);
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: `Failed to process resume file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }

    // Additional safety checks
    if (resumeBuffer.length === 0) {
      console.error('Resume buffer is empty');
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Resume file is empty',
      };
    }

    // Check if file is a valid PDF (starts with PDF header)
    const pdfHeader = resumeBuffer.subarray(0, 4).toString();
    if (pdfHeader !== '%PDF') {
      console.error('File does not appear to be a valid PDF');
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Invalid file format - expected PDF',
      };
    }

    console.log(`Resume successfully downloaded from S3. Size: ${resumeBuffer.length} bytes`);

    // Return the PDF file for download
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Stefan_Roets_Resume.pdf"',
        'Content-Length': resumeBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
        'Accept-Ranges': 'bytes',
      },
      body: resumeBuffer.toString('base64'),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error('Error in download-resume function:', error);

    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/plain' },
      body: `Failed to download resume: ${errorMessage}`,
    };
  }
};
