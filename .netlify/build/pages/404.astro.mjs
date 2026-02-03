/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_kJpNU5V_.mjs';
import 'piccolore';
import { $ as $$Hero } from '../chunks/Hero_B0UeB1Eu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B-L9K7ML.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/404.astro", void 0);

const $$file = "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
