import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderSlot, r as renderTemplate, h as createAstro, k as renderComponent } from './astro/server_kJpNU5V_.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { a as $$Icon } from './BaseLayout_B-L9K7ML.mjs';

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h5 data-astro-cid-rcdzuq3a>Interested in working together or requesting references </h5> <!--<icon href="mailto:stefanroetscode@gmail.com">--> <!--	Cell: stefanroetscode@gmail.com--> <!--	<Icon icon="paper-plane-tilt" size="1.2em" />--> <!--</icon>--> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "tel:+[27][0824923824]", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Call Me
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:stefanroetscode@gmail.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Mail Me
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "/Users/stefanroets/WebstormProjects/GitHub/my-portfolio-main/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $ };
