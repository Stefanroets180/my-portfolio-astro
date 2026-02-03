/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_kJpNU5V_.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B-L9K7ML.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_DjhuZmuO.mjs';
import { $ as $$Hero } from '../chunks/Hero_B0UeB1Eu.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Loader2, Download } from 'lucide-react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function ResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);
  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);
    try {
      const response = await fetch("/api/download-resume", {
        method: "GET",
        headers: {
          Accept: "application/pdf"
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          errorText || `Failed to download resume (${response.status})`
        );
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/pdf")) {
        throw new Error("Invalid file format received");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Stefan_Roets_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setTimeout(() => {
        setError(null);
      }, 3e3);
    } catch (error2) {
      console.error("Download error:", error2);
      setError(
        error2 instanceof Error ? error2.message : "Failed to download resume"
      );
      setTimeout(() => {
        setError(null);
      }, 5e3);
    } finally {
      setIsDownloading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleDownload,
        disabled: isDownloading,
        className: "inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        children: isDownloading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 animate-spin" }),
          "Downloading..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
          "Get My Resume"
        ] })
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "max-w-sm text-center", children: /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg px-4 py-2", children: error }) })
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Stefan Roets", "description": "About Jeanine White Lorem Ipsum", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/at-work.jpg" alt="work space" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Background</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I am an aspiring Junior Software developer with an
                        background in Photography and Designing. and an interest
                        in IT that fueled my desire to become a Full-stack Java
                        Software Developer. By immersing myself into this
                        unknown territory, I strived and completed an intense
                        Java Development bootcamp, specific to programming.
</p> <p data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>A new found passion about technology and
                        innovation emerged and. I have made it my duty to get
                        involved in the software development lifecycle from the
                        system arhitecture, through to specing, design and the
                        development about features.
</p> <p data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>I have worked with multiple technologies limited
                        to Android development, JavaScript, React, Python,
                        SpringBoot for API design, Firebase and Firebase
                        functions.
</p> <p data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>I am team player and a great leader when it comes
                        to working on different applications within a team.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Code College Certification: Javascript (React, React
                        Native, Next.js, Astro, angular) - Java SE1 and SE2 -
                        SQL Database Administration - Spring Framework - Python
</p><br data-astro-cid-kh7btl4r>PCD College Certificate in Basic Plumbing<br data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>Planet Pixel Bloemfontein (Graphic Design)</p> <p data-astro-cid-kh7btl4r><br data-astro-cid-kh7btl4r>National Photography Bedfordview</p><br data-astro-cid-kh7btl4r> </div> </section> <section class="resume-section" data-astro-cid-kh7btl4r> <div class="resume-container" data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>
Interested in Working Together?
</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Download my resume to learn more about my experience
                            and skills.
</p> <div class="resume-button-container" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "ResumeButton", ResumeButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/components/ResumeButton.tsx", "client:component-export": "default", "data-astro-cid-kh7btl4r": true })} </div> </div> </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/about.astro", void 0);

const $$file = "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
