import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

export default function ResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);

    try {
      const response = await fetch("/api/download-resume", {
        method: "GET",
        headers: {
          Accept: "application/pdf",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          errorText || `Failed to download resume (${response.status})`,
        );
      }

      // Check if response is actually a PDF
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/pdf")) {
        throw new Error("Invalid file format received");
      }

      // Get the file as a blob
      const blob = await response.blob();

      // Create a download link and trigger download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Stefan_Roets_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Optional: Show success message briefly
      setTimeout(() => {
        setError(null);
      }, 3000);
    } catch (error) {
      console.error("Download error:", error);
      setError(
        error instanceof Error ? error.message : "Failed to download resume",
      );

      // Clear error after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Downloading...
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            Get My Resume
          </>
        )}
      </button>

      {error && (
        <div className="max-w-sm text-center">
          <div className="bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg px-4 py-2">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}
