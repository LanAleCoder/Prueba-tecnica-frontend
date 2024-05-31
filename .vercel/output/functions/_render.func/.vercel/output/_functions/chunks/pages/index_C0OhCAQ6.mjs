import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderSlot, h as createAstro, j as renderComponent, k as renderHead } from '../astro_BAL5LwrG.mjs';
/* empty css                          */
import { $ as $$Image } from './generic_Dp_WesyC.mjs';

const $$SwitchTheme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header__theme-switch" data-astro-cid-iup4p6cu> <input type="checkbox" name="theme-toggle" id="theme-toggle" aria-label="Cambiar tema" data-astro-cid-iup4p6cu> <label class="theme-toggle-label" for="theme-toggle" data-astro-cid-iup4p6cu> <span class="sunicon" data-astro-cid-iup4p6cu>☀️</span> <span class="moonicon" data-astro-cid-iup4p6cu>🌙</span> </label> </div>  `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/header/switchTheme/switchTheme.astro", void 0);

const $$Astro$4 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { ariaLabel, title, url, className, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}${addAttribute(url, "href")}${addAttribute(className, "class")}${addAttribute(target, "target")} data-astro-cid-jcltcii7> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/ui/links/link.astro", void 0);

const $$LOGO = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="50" height="50" viewBox="0 0 682 681" xmlns="http://www.w3.org/2000/svg"> <title id="logo-svg">Logo de la página</title> <desc id="logo-svg-desc">Logo que contiene 4 circulos</desc> <path d="M407.115 199.432C370.405 236.141 310.888 236.141 274.178 199.432C237.469 162.723 237.469 103.205 274.178 66.4961C310.888 29.7869 370.405 29.7869 407.115 66.4961C443.824 103.205 443.824 162.723 407.115 199.432Z"></path> <circle cx="548.536" cy="340.854" r="94" transform="rotate(45 548.536 340.854)"></circle> <circle cx="133.464" cy="340.146" r="94" transform="rotate(45 133.464 340.146)"></circle> <circle cx="341.354" cy="548.036" r="94" transform="rotate(45 341.354 548.036)"></circle> </svg>`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/header/logo/LOGO.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-sxts74to> <nav class="header__nav" aria-label="Navegación principal" data-astro-cid-sxts74to> ${renderComponent($$result, "Link", $$Link, { "url": "/", "ariaLabel": "bot\xF3n que redirige a la p\xE1gina de inicio", "title": "P\xE1gina principal de la prueba t\xE9cnica", "className": "header__link-home", "data-astro-cid-sxts74to": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "LOGO", $$LOGO, { "data-astro-cid-sxts74to": true })} ` })} <ul class="header__nav-ul" data-astro-cid-sxts74to> <li class="header__nav-li" data-astro-cid-sxts74to> ${renderComponent($$result, "Link", $$Link, { "className": "header__nav-link", "url": "/", "data-astro-cid-sxts74to": true }, { "default": ($$result2) => renderTemplate`Inicio` })} </li> <li class="header__nav-li" data-astro-cid-sxts74to> ${renderComponent($$result, "Link", $$Link, { "className": "header__nav-link", "url": "#contacto", "data-astro-cid-sxts74to": true }, { "default": ($$result2) => renderTemplate`Contacto` })} </li> </ul> ${renderComponent($$result, "SwitchTheme", $$SwitchTheme, { "data-astro-cid-sxts74to": true })} </nav> </header> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/header/header.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialNetwork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialNetwork;
  const { href, ariaLabel, className, target } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Link", $$Link, { "url": href, "ariaLabel": ariaLabel, "className": className, "target": target }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/footer/socialNetworks/SocialNetwork.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"> <title id="linkeding-svg">Icono de linkedin</title> <desc id="linkedin-svg-desc">Icono de linkendin, plataforma digital para buscar empleo o ofrecer empleo</desc> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path> </svg>`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/icons/Linkedin.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64"> <title id="linkeding-svg">Icono de github</title> <desc id="linkedin-svg-desc">Icono de Github, plataforma de control de versiones para proyectos relacionados con el desarrollo de software</desc> <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path> </svg>`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/icons/Github.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-gl47qgrf> <div class="section-black-footer" data-astro-cid-gl47qgrf> <div class="social-networks" data-astro-cid-gl47qgrf> ${renderComponent($$result, "SocialNetwork", $$SocialNetwork, { "href": "https://www.linkedin.com/in/peter-alexander-61b6081b1", "ariaLabel": "S\xEDgueme en Linkedin", "className": "button-social-network", "target": "_blank", "data-astro-cid-gl47qgrf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Linkedin", $$Linkedin, { "data-astro-cid-gl47qgrf": true })} ` })} ${renderComponent($$result, "SocialNetwork", $$SocialNetwork, { "href": "https://github.com/LanAleCoder", "ariaLabel": "S\xEDgueme en Github", "className": "button-social-network", "target": "_blank", "data-astro-cid-gl47qgrf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Github", $$Github, { "data-astro-cid-gl47qgrf": true })} ` })} </div> <div class="footer__links" data-astro-cid-gl47qgrf> <nav class="footer__nav" data-astro-cid-gl47qgrf> <ul class="footer__links-list" data-astro-cid-gl47qgrf> <li class="footer__link-item" data-astro-cid-gl47qgrf> ${renderComponent($$result, "Link", $$Link, { "url": "/", "data-astro-cid-gl47qgrf": true }, { "default": ($$result2) => renderTemplate` Inicio ` })} </li> <li class="footer__link-item" data-astro-cid-gl47qgrf> ${renderComponent($$result, "Link", $$Link, { "url": "#contacto", "data-astro-cid-gl47qgrf": true }, { "default": ($$result2) => renderTemplate` Contacto ` })} </li> </ul> </nav> </div> </div> <div class="copyright" data-astro-cid-gl47qgrf> <p data-astro-cid-gl47qgrf>© 2024 Diseñado por Peter Alexander. Todos los derechos reservados.</p> </div> </footer> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/footer/footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Head;
  const url = Astro2.url;
  const {
    ogTitle,
    ogDescription,
    title,
    pageDescription,
    imagePage
  } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title || "Prueba T\xE9cnica"}</title><meta name="description"${addAttribute(pageDescription || "Esta es una p\xE1gina para prueba una prueba t\xE9cnica", "content")}><meta name="robots" content="index, follow"><meta property="og:title"${addAttribute(ogTitle || "Prueba t\xE9cnica", "content")}><meta property="og:description"${addAttribute(ogDescription || "Comparte esta prueba t\xE9cnica", "content")}><meta property="og:image"${addAttribute(imagePage || "../../../../public/meta/default.jpg", "content")}><meta property="og:url"${addAttribute(url.toString(), "content")}>${renderHead()}</head>`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/common/head/head.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { ogTitle, ogDescription, title, pageDescription, imagePage } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderComponent($$result, "Head", $$Head, { "ogTitlte": ogTitle, "ogDescription": ogDescription, "title": title, "pageDescription": pageDescription, "imagePage": imagePage })}${maybeRenderHead()}<body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}   </body> </html>`;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/layouts/public/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`section ${className}`, "class")} data-astro-cid-ifypgjli> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/ui/containers/sections/section.astro", void 0);

const Profile = new Proxy({"src":"/_astro/profile.BTTh4PId.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/Hero/profile.png";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-a42nmg7r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="inicio__container" data-astro-cid-a42nmg7r> <div class="inicio__descripcion" data-astro-cid-a42nmg7r> <h1 class="inicio__descripcion-titulo" data-astro-cid-a42nmg7r>
Peter Alexander
<br data-astro-cid-a42nmg7r>
Desarrollador
<span class="inicio__descripcion-titulo-resaltado" data-astro-cid-a42nmg7r> frontend </span> </h1> <p class="inicio__descripcion-texto" data-astro-cid-a42nmg7r>
Soy un joven desarrollador frontend con experiencia en el desarrollo de
        sitios web y aplicaciones web, apasionado por la tecnología y la
        programación. Me encanta aprender cosas nuevas y enfrentar nuevos
        desafíos. Siempre me gusta estar en constante aprendizaje y crecimiento,
        tratando de buscar el minimo detalle para mejorar la calidad de mis
        proyectos.
</p> <a class="inicio__descripcion-boton inicio__contacto-titulo-boton" href="#contacto" data-astro-cid-a42nmg7r>Contactame</a> </div> <div class="inicio__banner" data-astro-cid-a42nmg7r> ${renderComponent($$result2, "Image", $$Image, { "src": Profile, "class": "inicio__baner-img", "alt": "Foto de perfil de Peter Alexander", "loading": "eager", "data-astro-cid-a42nmg7r": true })} </div> </div> ` })} `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/Hero/Hero.astro", void 0);

const Trading = new Proxy({"src":"/_astro/trading.Cg4aiRbY.webp","width":500,"height":333,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/hobbies/trading.webp";
							}
							
							return target[name];
						}
					});

const Senderismo = new Proxy({"src":"/_astro/senderismo.D7IbdqVj.webp","width":500,"height":338,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/hobbies/senderismo.webp";
							}
							
							return target[name];
						}
					});

const Fotografia = new Proxy({"src":"/_astro/fotografia.Dq49MzKH.webp","width":750,"height":450,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/hobbies/fotografia.webp";
							}
							
							return target[name];
						}
					});

const Arquitectura = new Proxy({"src":"/_astro/arquitecturaSoftware.Bok9i7gF.webp","width":500,"height":250,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/hobbies/arquitecturaSoftware.webp";
							}
							
							return target[name];
						}
					});

const $$Hobbies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="inicio__categorias" data-astro-cid-dm5mjtnj> <h2 class="inicio__categorias-titulo" data-astro-cid-dm5mjtnj>Mis hobbies</h2> <p class="inicio__categorias-descripcion" data-astro-cid-dm5mjtnj>
Como alguien apasionado por la tecnología, me gusta explorar diferentes
    áreas de la misma. Tambien me gusta el tema de inversiones y finanzas, por
    lo que me gusta estar al tanto de las últimas noticias y tendencias en el
    mercado. La naturaleza es algo que me apasiona, por lo que me gusta salir a
    caminar y explorar nuevos lugares.
</p> <ul class="inicio__categorias-lista row gy-5 gx-4" data-astro-cid-dm5mjtnj> <li class="inicio__categoria" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-url" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-gradient" data-astro-cid-dm5mjtnj></div> ${renderComponent($$result, "Image", $$Image, { "src": Trading, "width": "500", "height": "315", "loading": "eager", "class": "inicio__categoria-img", "alt": "Imagen de persona visualizando gr\xE1fica de un activo financiero", "data-astro-cid-dm5mjtnj": true })} <h3 class="inicio__categoria-nombre" data-astro-cid-dm5mjtnj>Finanzas</h3> </div> </li> <li class="inicio__categoria" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-url" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-gradient" data-astro-cid-dm5mjtnj></div> ${renderComponent($$result, "Image", $$Image, { "src": Senderismo, "loading": "eager", "width": "500", "height": "315", "class": "inicio__categoria-img", "alt": "Imagen de persona haciendo senderismo", "data-astro-cid-dm5mjtnj": true })} <h3 class="inicio__categoria-nombre" data-astro-cid-dm5mjtnj>Senderismo</h3> </div> </li> <li class="inicio__categoria" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-url" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-gradient" data-astro-cid-dm5mjtnj></div> ${renderComponent($$result, "Image", $$Image, { "src": Fotografia, "width": "500", "height": "315", "loading": "eager", "class": "inicio__categoria-img", "alt": "Imagen de una camar\xE1 mostrando el lente", "data-astro-cid-dm5mjtnj": true })} <h3 class="inicio__categoria-nombre" data-astro-cid-dm5mjtnj>Fotografía</h3> </div> </li> <li class="inicio__categoria" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-url" data-astro-cid-dm5mjtnj> <div class="inicio__categoria-gradient" data-astro-cid-dm5mjtnj></div> ${renderComponent($$result, "Image", $$Image, { "src": Arquitectura, "width": "500", "height": "315", "loading": "eager", "class": "inicio__categoria-img", "alt": "Imagen de la arquitectura de software de un sistema", "data-astro-cid-dm5mjtnj": true })} <h3 class="inicio__categoria-nombre" data-astro-cid-dm5mjtnj>Arquitectura de software</h3> </div> </li> </ul> </div> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/hobbies/hobbies.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="2500" viewBox="175.7 78 490.6 436.9" width="2194" xmlns="http://www.w3.org/2000/svg" data-astro-cid-umdf3bww> <title id="react-svg">Logo de React</title> <desc id="react-svg-desc" data-astro-cid-umdf3bww>Logo de React, tecnología para desarrollar páginas web reactivas</desc> <g fill="#61dafb" data-astro-cid-umdf3bww><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" data-astro-cid-umdf3bww></path><circle cx="420.9" cy="296.5" r="45.7" data-astro-cid-umdf3bww></circle></g></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/react.astro", void 0);

const $$Wordpress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="8.399 8.4 51.2 51.2" data-astro-cid-pdmtnmnr> <title id="wordpress-svg">Logo de Wordpress</title> <desc id="react-svg-desc" data-astro-cid-pdmtnmnr>Logo de Wordpress, tecnología para desarrollar páginas web administrables</desc> <path fill="#21759B" d="M34 59.6C19.813 59.6 8.293 48.293 8.4 34 8.507 19.707 19.28 8.4 34 8.4c14.721 0 25.6 11.52 25.6 25.6S48.187 59.6 34 59.6zm7.573-3.947l-7.253-19.52-6.827 19.947c5.014 1.174 8.427 1.493 14.08-.427zm-17.706-1.066l-10.88-29.76c-1.494 3.2-1.813 5.867-2.027 9.173.107 8.746 5.013 16.746 12.907 20.587zM56.934 34c.106-5.653-2.453-10.133-2.667-10.773.214 4.374-.427 6.613-1.173 9.067l-7.467 21.44C55.014 48.08 56.826 39.653 57.04 34h-.106zm-23.68-.96l-3.627-9.92-2.667-.213c-1.066-.747-.427-1.92.32-1.92 4.8.32 7.466.32 12.267 0 1.174 0 1.493 1.707.106 1.92l-2.56.213 8.319 24.533 3.946-13.44c.214-5.866-1.387-6.506-3.52-10.773-1.707-3.307.107-6.507 3.414-6.613-2.668-2.56-8.107-5.76-15.254-5.867s-14.72 3.52-19.2 10.347l7.894-.213c.96.427.533 1.813 0 1.92l-2.773.213 8.32 24.96 5.015-15.147z" data-astro-cid-pdmtnmnr></path></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/wordpress.astro", void 0);

const $$Php = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="2500" height="100" viewBox="0 0 256 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" data-astro-cid-arve3brd> <title id="php-svg">Logo de PHP</title> <desc id="php-svg-desc" data-astro-cid-arve3brd>Logo de PHP, tecnología para desarrollar páginas web y backend</desc> <g fill-rule="evenodd" data-astro-cid-arve3brd><ellipse fill="#8993BE" cx="128" cy="66.63" rx="128" ry="66.63" data-astro-cid-arve3brd></ellipse><path d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" fill="#232531" data-astro-cid-arve3brd></path></g></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/php.astro", void 0);

const $$Laravel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="2500" viewBox="0 -.11376601 49.74245785 51.31690859" width="2418" xmlns="http://www.w3.org/2000/svg" data-astro-cid-oqmkv53w> <title id="laravel-svg">Logo de Laravel</title> <desc id="laravel-svg-desc" data-astro-cid-oqmkv53w>Logo de javascript, tecnología para desarrollar páginas web y backend</desc> <path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20" data-astro-cid-oqmkv53w></path></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/laravel.astro", void 0);

const $$Angular = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="2353" height="2500" viewBox="0 0 256 272" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-un6vn2iy> <title id="angular-svg">Logo de angular</title> <desc id="angular-svg-desc" data-astro-cid-un6vn2iy>Logo de angular, tecnología para desarrollar páginas web</desc> <path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z" fill="#E23237" data-astro-cid-un6vn2iy></path><path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" fill="#B52E31" data-astro-cid-un6vn2iy></path><path d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z" fill="#FFF" data-astro-cid-un6vn2iy></path></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/angular.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53" data-astro-cid-b5pcxpgm> <title id="css-svg">Logo de css</title> <desc id="css-svg-desc" data-astro-cid-b5pcxpgm>Logo de angular, tecnología para desarrollar la parte visual de las páginas web</desc> <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" data-astro-cid-b5pcxpgm></path><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" data-astro-cid-b5pcxpgm></path><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff" data-astro-cid-b5pcxpgm></path></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/css.astro", void 0);

const $$Node = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="2270" height="2500" viewBox="4 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" data-astro-cid-sh3f3bhn> <title id="php-svg">Logo de Node</title> <desc id="php-svg-desc" data-astro-cid-sh3f3bhn>Logo de Node, tecnología para el desarrollo web</desc> <g fill="#8CC84B" data-astro-cid-sh3f3bhn><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" data-astro-cid-sh3f3bhn></path><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" data-astro-cid-sh3f3bhn></path></g></svg> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/assets/tecnologias/node.astro", void 0);

const $$Tecnologias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="carousel" data-astro-cid-xozse7lb> <div class="carousel__title" data-astro-cid-xozse7lb> <h2 data-astro-cid-xozse7lb>Tecnologías abarcadas</h2> </div> <div class="carousel__logos-container" data-astro-cid-xozse7lb> <div class="carousel__logos-slide" data-astro-cid-xozse7lb> ${renderComponent($$result, "React", $$React, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Wordpress", $$Wordpress, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Php", $$Php, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Laravel", $$Laravel, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Angular", $$Angular, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Css", $$Css, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Node", $$Node, { "data-astro-cid-xozse7lb": true })} </div> <div class="carousel__logos-slide" data-astro-cid-xozse7lb> ${renderComponent($$result, "React", $$React, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Wordpress", $$Wordpress, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Php", $$Php, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Laravel", $$Laravel, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Angular", $$Angular, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Css", $$Css, { "data-astro-cid-xozse7lb": true })} ${renderComponent($$result, "Node", $$Node, { "data-astro-cid-xozse7lb": true })} </div> </div> </div> `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/tecnologias/tecnologias.astro", void 0);

const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": "form-contact-container", "data-astro-cid-6cpa3zso": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-6cpa3zso>Contacto</h2> <form action="" id="form-contact" data-astro-cid-6cpa3zso> <div class="form-group-input" data-astro-cid-6cpa3zso> <label for="name" data-astro-cid-6cpa3zso>Nombre:</label> <input placeholder="Nombre" type="text" id="name" name="name" data-astro-cid-6cpa3zso> </div> <div class="form-group-input" data-astro-cid-6cpa3zso> <label for="email" data-astro-cid-6cpa3zso>Email:</label> <input type="text" id="email" name="email" placeholder="email@email.com" data-astro-cid-6cpa3zso> </div> <div class="form-group-input" data-astro-cid-6cpa3zso> <label for="message" data-astro-cid-6cpa3zso>Mensaje:</label> <textarea id="message" placeholder="Escribe tu mensaje aquí..." name="message" data-astro-cid-6cpa3zso></textarea> </div> <button class="inicio__descripcion-boton inicio__contacto-titulo-boton" type="submit" data-astro-cid-6cpa3zso>Contactar</button> </form> ` })}  `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/components/formContact/form-contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "ogDescription": "!Mira esta prueba t\xE9cnica\xA1", "ogTitle": "Prueba t\xE9cnica de Peter", "title": "Prueba T\xE9cnica", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main-content" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="row-content" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Tecnologias", $$Tecnologias, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hobbies", $$Hobbies, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FormContact", $$FormContact, { "data-astro-cid-j7pv25f6": true })} </div> </div> </main> ` })} `;
}, "C:/Users/peter/Documents/prueba-tecnica-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/peter/Documents/prueba-tecnica-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
