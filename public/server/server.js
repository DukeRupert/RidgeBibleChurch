'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src\components\AboutUs.svelte generated by Svelte v3.23.2 */

const css = {
	code: "div.svelte-xi19yd{display:block}h1.svelte-xi19yd{font-size:1.5em;font-weight:bold;text-transform:uppercase;text-align:center;margin:1em 1em}img.svelte-xi19yd{width:100%;border-radius:5%}a.svelte-xi19yd{text-decoration:none}h4.svelte-xi19yd{font-size:1.25em}p.svelte-xi19yd{margin-block-start:0}.col.svelte-xi19yd{width:100%;margin:2em 0}@media only screen and (min-width: 400px){div.svelte-xi19yd{display:flex;justify-content:space-around}.col.svelte-xi19yd{width:25%;padding:1em;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start}}",
	map: "{\"version\":3,\"file\":\"AboutUs.svelte\",\"sources\":[\"AboutUs.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    let map = 'https://maps.googleapis.com/maps/api/staticmap?center=10609+234th+St+E,+Graham,+WA+98338&markers=47.044315,-122.289675&zoom=13&scale=false&size=500x500&maptype=roadmap&key=AIzaSyAszovcVRw3UM8gOQNG1gc3D29L3iAakL8&format=png&visual_refresh=true';\\r\\n    let directions = 'http://maps.google.com/?q=10609 234th St E,Graham,WA98338';\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n    /* 1em = 14px */\\r\\n    div {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n        font-size: 1.5em;\\r\\n        font-weight: bold;\\r\\n        text-transform: uppercase;\\r\\n        text-align: center;\\r\\n        margin: 1em 1em;\\r\\n    }\\r\\n\\r\\n    img {\\r\\n        width: 100%;\\r\\n        border-radius: 5%;\\r\\n    }\\r\\n\\r\\n    a {\\r\\n        text-decoration: none;\\r\\n    }\\r\\n\\r\\n    h4 {\\r\\n        font-size: 1.25em;\\r\\n\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        margin-block-start: 0;\\r\\n    }\\r\\n\\r\\n    .col {\\r\\n        width: 100%;\\r\\n        margin: 2em 0;\\r\\n    }\\r\\n\\r\\n    /* Larger screens only */\\r\\n    /* 1em = 16px */\\r\\n    @media only screen and (min-width: 400px) {\\r\\n\\r\\n        div {\\r\\n            display: flex;\\r\\n            justify-content: space-around;\\r\\n        }\\r\\n\\r\\n        .col {\\r\\n            width: 25%;\\r\\n            padding: 1em;\\r\\n            display: flex;\\r\\n            flex-direction: column;\\r\\n            flex-wrap: wrap;\\r\\n            justify-content: flex-start;\\r\\n            align-content: flex-start;\\r\\n        }\\r\\n    }\\r\\n</style>\\r\\n\\r\\n\\r\\n<div>\\r\\n    <div class='col'>\\r\\n        <h1>About Us</h1>\\r\\n        <p>You are always welcome! The dress code is what you are wearing right now. We believe that the Bible is the inspired word of God and that Jesus is his son. This means that we are here to help you find peace and experience love.</p>\\r\\n    </div>\\r\\n    <div class='col'>\\r\\n        <h1>Location</h1>\\r\\n        <a href={directions}>\\r\\n            <p>10609 234th St E, Graham, WA 98338</p>\\r\\n        </a>\\r\\n        <img src={map} alt='A map to the ridge bible church.'/>\\r\\n    </div>\\r\\n    <div class='col'>\\r\\n        <h1>Contact Us</h1>\\r\\n\\r\\n        <h4>Services</h4>\\r\\n        <p style='margin-block-end: 0.25em;'><strong>Sunday</strong> &nbsp;&nbsp; 9:30am</p>\\r\\n        <p><strong>Sunday</strong> &nbsp;&nbsp; 10:30am</p>\\r\\n\\r\\n        <a href='tel:1-253-847-2223'> \\r\\n            <p>253-847-2223</p>\\r\\n        </a>\\r\\n        \\r\\n        <a href='mailto: pastor@theridgebiblechurch.com'>\\r\\n            <p>pastor@theridgebiblechurch.com</p>\\r\\n        </a>\\r\\n    </div>\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AAOI,GAAG,cAAC,CAAC,AACD,OAAO,CAAE,KAAK,AAClB,CAAC,AAED,EAAE,cAAC,CAAC,AACA,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,SAAS,CACzB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,GAAG,AACnB,CAAC,AAED,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,EAAE,AACrB,CAAC,AAED,CAAC,cAAC,CAAC,AACC,eAAe,CAAE,IAAI,AACzB,CAAC,AAED,EAAE,cAAC,CAAC,AACA,SAAS,CAAE,MAAM,AAErB,CAAC,AAED,CAAC,cAAC,CAAC,AACC,kBAAkB,CAAE,CAAC,AACzB,CAAC,AAED,IAAI,cAAC,CAAC,AACF,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,CAAC,AACjB,CAAC,AAID,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAEvC,GAAG,cAAC,CAAC,AACD,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,AACjC,CAAC,AAED,IAAI,cAAC,CAAC,AACF,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,UAAU,CAC3B,aAAa,CAAE,UAAU,AAC7B,CAAC,AACL,CAAC\"}"
};

let map = "https://maps.googleapis.com/maps/api/staticmap?center=10609+234th+St+E,+Graham,+WA+98338&markers=47.044315,-122.289675&zoom=13&scale=false&size=500x500&maptype=roadmap&key=AIzaSyAszovcVRw3UM8gOQNG1gc3D29L3iAakL8&format=png&visual_refresh=true";
let directions = "http://maps.google.com/?q=10609 234th St E,Graham,WA98338";

const AboutUs = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<div class="${"svelte-xi19yd"}"><div class="${"col svelte-xi19yd"}"><h1 class="${"svelte-xi19yd"}">About Us</h1>
        <p class="${"svelte-xi19yd"}">You are always welcome! The dress code is what you are wearing right now. We believe that the Bible is the inspired word of God and that Jesus is his son. This means that we are here to help you find peace and experience love.</p></div>
    <div class="${"col svelte-xi19yd"}"><h1 class="${"svelte-xi19yd"}">Location</h1>
        <a${add_attribute("href", directions, 0)} class="${"svelte-xi19yd"}"><p class="${"svelte-xi19yd"}">10609 234th St E, Graham, WA 98338</p></a>
        <img${add_attribute("src", map, 0)} alt="${"A map to the ridge bible church."}" class="${"svelte-xi19yd"}"></div>
    <div class="${"col svelte-xi19yd"}"><h1 class="${"svelte-xi19yd"}">Contact Us</h1>

        <h4 class="${"svelte-xi19yd"}">Services</h4>
        <p style="${"margin-block-end: 0.25em;"}" class="${"svelte-xi19yd"}"><strong>Sunday</strong>    9:30am</p>
        <p class="${"svelte-xi19yd"}"><strong>Sunday</strong>    10:30am</p>

        <a href="${"tel:1-253-847-2223"}" class="${"svelte-xi19yd"}"><p class="${"svelte-xi19yd"}">253-847-2223</p></a>
        
        <a href="${"mailto: pastor@theridgebiblechurch.com"}" class="${"svelte-xi19yd"}"><p class="${"svelte-xi19yd"}">pastor@theridgebiblechurch.com</p></a></div></div>`;
});

/* node_modules\svelte-fa\src\fa.svelte generated by Svelte v3.23.2 */

const Fa = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { class: clazz = "" } = $$props;
	let { id = "" } = $$props;
	let { style = "" } = $$props;
	let { icon } = $$props;
	let { fw = false } = $$props;
	let { flip = false } = $$props;
	let { pull = false } = $$props;
	let { rotate = false } = $$props;
	let { size = false } = $$props;
	let { color = "" } = $$props;
	let { primaryColor = "" } = $$props;
	let { secondaryColor = "" } = $$props;
	let { primaryOpacity = 1 } = $$props;
	let { secondaryOpacity = 0.4 } = $$props;
	let { swapOpacity = false } = $$props;
	let i;
	let s;
	let transform;
	if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
	if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
	if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0) $$bindings.fw(fw);
	if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
	if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0) $$bindings.pull(pull);
	if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0) $$bindings.rotate(rotate);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0) $$bindings.primaryColor(primaryColor);
	if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0) $$bindings.secondaryColor(secondaryColor);
	if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0) $$bindings.primaryOpacity(primaryOpacity);
	if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0) $$bindings.secondaryOpacity(secondaryOpacity);
	if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0) $$bindings.swapOpacity(swapOpacity);
	i = icon && icon.icon || [0, 0, "", [], ""];

	 {
		{
			let float;
			let width;
			const height = "1em";
			let lineHeight;
			let fontSize;
			let textAlign;
			let verticalAlign = "-.125em";
			const overflow = "visible";

			if (fw) {
				textAlign = "center";
				width = "1.25em";
			}

			if (pull) {
				float = pull;
			}

			if (size) {
				if (size == "lg") {
					fontSize = "1.33333em";
					lineHeight = ".75em";
					verticalAlign = "-.225em";
				} else if (size == "xs") {
					fontSize = ".75em";
				} else if (size == "sm") {
					fontSize = ".875em";
				} else {
					fontSize = size.replace("x", "em");
				}
			}

			const styleObj = {
				float,
				width,
				height,
				"line-height": lineHeight,
				"font-size": fontSize,
				"text-align": textAlign,
				"vertical-align": verticalAlign,
				overflow
			};

			let styleStr = "";

			for (const prop in styleObj) {
				if (styleObj[prop]) {
					styleStr += `${prop}:${styleObj[prop]};`;
				}
			}

			s = styleStr + style;
		}
	}

	 {
		{
			let t = "";

			if (flip) {
				let flipX = 1;
				let flipY = 1;

				if (flip == "horizontal") {
					flipX = -1;
				} else if (flip == "vertical") {
					flipY = -1;
				} else {
					flipX = flipY = -1;
				}

				t += ` scale(${flipX} ${flipY})`;
			}

			if (rotate) {
				t += ` rotate(${rotate} 0 0)`;
			}

			transform = t;
		}
	}

	return `${i[4]
	? `<svg${add_attribute("id", id, 0)}${add_attribute("class", clazz, 0)}${add_attribute("style", s, 0)}${add_attribute("viewBox", `0 0 ${i[0]} ${i[1]}`, 0)} aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(256 256)"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string"
		? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(-256 -256)"}"></path>`
		: `<path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(-256 -256)"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(-256 -256)"}"></path>`}</g></g></svg>`
	: ``}`;
});

/* src\components\Footer.svelte generated by Svelte v3.23.2 */

const css$1 = {
	code: "div.svelte-y8gso4{display:flex;width:100%;height:25vh;padding:1em;background:rgba(0, 0, 0, 0.5)}",
	map: "{\"version\":3,\"file\":\"Footer.svelte\",\"sources\":[\"Footer.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import Fa from 'svelte-fa';\\r\\n    import { faPhone } from '@fortawesome/free-solid-svg-icons';\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n    div {\\r\\n        display: flex;\\r\\n        width: 100%;\\r\\n        height: 25vh;\\r\\n        padding: 1em;\\r\\n        background: rgba(0, 0, 0, 0.5);\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div>\\r\\n    <Fa icon={faPhone} fw primaryColor=\\\"gold\\\" style=\\\"background: black\\\" />\\r\\n</div>\"],\"names\":[],\"mappings\":\"AAMI,GAAG,cAAC,CAAC,AACD,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AAClC,CAAC\"}"
};

const Footer = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);

	return `<div class="${"svelte-y8gso4"}">${validate_component(Fa, "Fa").$$render(
		$$result,
		{
			icon: freeSolidSvgIcons.faPhone,
			fw: true,
			primaryColor: "gold",
			style: "background: black"
		},
		{},
		{}
	)}</div>`;
});

/* src\routes\index.svelte generated by Svelte v3.23.2 */

const css$2 = {
	code: "div.svelte-vnxr76{padding:2em}img.svelte-vnxr76{width:100%;margin:0 0 1em 0}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport AboutUs from '../components/AboutUs.svelte';\\n  import Footer from '../components/Footer.svelte';\\n\\n  // Animations do not play on initial load by default. Condition change used to trigger logo animation.\\n  let condition = false;\\n\\tsetTimeout(() => condition = true)\\n</script>\\n\\n<style>\\n\\n  div {\\n    padding: 2em;\\n  }\\n\\n  img {\\n    width: 100%;\\n    margin: 0 0 1em 0;\\n  }\\n\\n</style>\\n\\n<svelte:head>\\n  <title>The Ridge Bible Church</title>\\n</svelte:head>\\n\\n<div>\\n  <img src=\\\"RidgeLogo.svg\\\" alt='The Ridge Bible Church logo'/>\\n  <AboutUs />\\n</div>\\n<Footer />\\n\"],\"names\":[],\"mappings\":\"AAWE,GAAG,cAAC,CAAC,AACH,OAAO,CAAE,GAAG,AACd,CAAC,AAED,GAAG,cAAC,CAAC,AACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AACnB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let condition = false;
	setTimeout(() => condition = true);
	$$result.css.add(css$2);

	return `${($$result.head += `${($$result.title = `<title>The Ridge Bible Church</title>`, "")}`, "")}

<div class="${"svelte-vnxr76"}"><img src="${"RidgeLogo.svg"}" alt="${"The Ridge Bible Church logo"}" class="${"svelte-vnxr76"}">
  ${validate_component(AboutUs, "AboutUs").$$render($$result, {}, {}, {})}</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

/* src\routes\statement.svelte generated by Svelte v3.23.2 */

const Statement = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Giving</title>`, "")}`, "")}

<h1>This is the statement of faith page</h1>

<p>There&#39;s not much here.</p>`;
});

/* src\routes\sermons.svelte generated by Svelte v3.23.2 */

const Sermons = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Sermons</title>`, "")}`, "")}

<h1>This is the sermons page</h1>

<p>There&#39;s not much here.</p>`;
});

/* src\routes\giving.svelte generated by Svelte v3.23.2 */

const Giving = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Giving</title>`, "")}`, "")}

<h1>This is the giving page</h1>

<p>There&#39;s not much here.</p>`;
});

/* src\routes\about.svelte generated by Svelte v3.23.2 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>Statement of Faith</title>`, "")}`, "")}

<h1>Statement of Faith</h1>

<p>There&#39;s not much here.</p>`;
});

/* src\components\StaffCard.svelte generated by Svelte v3.23.2 */

const css$3 = {
	code: "div.svelte-18f6l1f{display:flex;justify-content:center;max-width:100%;margin:1em 0}img.svelte-18f6l1f{max-height:15vh;border-radius:50%;margin-right:1em}h1.svelte-18f6l1f{font-size:1.5em;font-weight:bold}h4.svelte-18f6l1f{font-size:0.75em;color:grey;padding:0;margin:0}p.svelte-18f6l1f{font-size:0.75em;color:blue;padding:0;margin:0}.content.svelte-18f6l1f{display:flex;flex-direction:column;justify-content:center;padding:0}button.svelte-18f6l1f{margin-top:0.5em;padding:0.5em 1em;border:none;border-radius:50px;background-color:lightgray;width:auto}@media only screen and (min-width: 655px){div.svelte-18f6l1f{margin:1em 1em}}",
	map: "{\"version\":3,\"file\":\"StaffCard.svelte\",\"sources\":[\"StaffCard.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    export let src='/blankPic.png';\\r\\n    export let name='Alec Paul';\\r\\n    export let title='Lead Pastor';\\r\\n    export let email='pastor@theridgebiblechurch.com';\\r\\n    let link = 'mailto:'.concat(email);\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n    div {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        max-width: 100%;\\r\\n        margin: 1em 0;\\r\\n    }\\r\\n\\r\\n    img {\\r\\n        max-height: 15vh;\\r\\n        border-radius: 50%;\\r\\n        margin-right: 1em;\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n        font-size: 1.5em;\\r\\n        font-weight: bold;\\r\\n    }\\r\\n\\r\\n    h4 {\\r\\n        font-size: 0.75em;\\r\\n        color: grey;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 0.75em;\\r\\n        color: blue;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .content {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        justify-content: center;\\r\\n\\r\\n        padding: 0;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n        margin-top: 0.5em;\\r\\n        padding: 0.5em 1em;\\r\\n        border: none;\\r\\n        border-radius: 50px;\\r\\n        background-color: lightgray;\\r\\n        width: auto;\\r\\n    }\\r\\n\\r\\n    /*Larger Screen*/\\r\\n\\t@media only screen and (min-width: 655px) {\\r\\n\\r\\n    div {\\r\\n        margin: 1em 1em;\\r\\n    }\\r\\n}\\r\\n\\r\\n</style>\\r\\n\\r\\n<div>\\r\\n    <img {src} alt={name}/>\\r\\n    <div class='content'>\\r\\n        <h1>{name}</h1>\\r\\n        <h4>{title}</h4>\\r\\n        <a href={link}>\\r\\n            <p>{email}</p>\\r\\n        </a>\\r\\n        <button type=\\\"button\\\">View</button> \\r\\n    </div>\\r\\n</div>\\r\\n\"],\"names\":[],\"mappings\":\"AASI,GAAG,eAAC,CAAC,AACD,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CAAC,CAAC,AACjB,CAAC,AAED,GAAG,eAAC,CAAC,AACD,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,GAAG,AACrB,CAAC,AAED,EAAE,eAAC,CAAC,AACA,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,AACrB,CAAC,AAED,EAAE,eAAC,CAAC,AACA,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,AACb,CAAC,AAED,CAAC,eAAC,CAAC,AACC,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,AACb,CAAC,AAED,QAAQ,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CAEvB,OAAO,CAAE,CAAC,AACd,CAAC,AAED,MAAM,eAAC,CAAC,AACJ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,KAAK,CAAC,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,SAAS,CAC3B,KAAK,CAAE,IAAI,AACf,CAAC,AAGJ,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAExC,GAAG,eAAC,CAAC,AACD,MAAM,CAAE,GAAG,CAAC,GAAG,AACnB,CAAC,AACL,CAAC\"}"
};

const StaffCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { src = "/blankPic.png" } = $$props;
	let { name = "Alec Paul" } = $$props;
	let { title = "Lead Pastor" } = $$props;
	let { email = "pastor@theridgebiblechurch.com" } = $$props;
	let link = ("mailto:").concat(email);
	if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
	$$result.css.add(css$3);

	return `<div class="${"svelte-18f6l1f"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", name, 0)} class="${"svelte-18f6l1f"}">
    <div class="${"content svelte-18f6l1f"}"><h1 class="${"svelte-18f6l1f"}">${escape(name)}</h1>
        <h4 class="${"svelte-18f6l1f"}">${escape(title)}</h4>
        <a${add_attribute("href", link, 0)}><p class="${"svelte-18f6l1f"}">${escape(email)}</p></a>
        <button type="${"button"}" class="${"svelte-18f6l1f"}">View</button></div></div>`;
});

/* src\routes\staff.svelte generated by Svelte v3.23.2 */

const css$4 = {
	code: "div.svelte-146xfl0{padding:0 0.5em;display:flex;flex-direction:column;flex-wrap:wrap}hr.svelte-146xfl0{width:100%;margin-left:0;margin:0}h1.svelte-146xfl0{font-weight:bold}h2.svelte-146xfl0{margin-top:2em;font-size:1.5em;font-weight:bold}p.svelte-146xfl0{font-style:italic}@media only screen and (min-width: 655px){.wrapper.svelte-146xfl0{flex-direction:row;justify-content:flex-start;align-items:flex-start}h1.svelte-146xfl0{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"staff.svelte\",\"sources\":[\"staff.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport StaffCard from '../components/StaffCard.svelte';\\n\\n\\tconst alecPaul = {\\n\\t\\tsrc: '/alec.jpg', \\n\\t\\tname: 'Alec Paul',\\n\\t\\ttitle: 'Pastor - Chairman',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst dennisRiksen = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Dennis Riksen',\\n\\t\\ttitle: 'Vice-Chairman',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst mattArmstrong = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Matt Armstrong',\\n\\t\\ttitle: 'Secretary',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst kenKlubberud = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Ken Klubberud',\\n\\t\\ttitle: 'Financial Officer',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst daleForrester = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Dale Forrester',\\n\\t\\ttitle: 'Elder',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst gregBennet = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Greg Bennett',\\n\\t\\ttitle: 'Elder',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst sueArmstrong = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Sue Armstrong',\\n\\t\\ttitle: 'Childrens\\\\'s Ministry Director',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst reamenWilliams = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Reamen Williams',\\n\\t\\ttitle: 'Youth Ministry Director',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst debbieNewton = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Debbie Newton',\\n\\t\\ttitle: 'Church Secretary',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst edKyllonen = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Ed Kyllonen',\\n\\t\\ttitle: 'Deacon',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst jessKady = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Jess Kady',\\n\\t\\ttitle: 'Deacon',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n\\tconst mattCrowell = {\\n\\t\\t//src: '/alec.jpg', \\n\\t\\tname: 'Matt Crowell',\\n\\t\\ttitle: 'Deacon',\\n\\t\\temail: 'pastor@theridgebiblechurch.com'\\n\\t};\\n\\n</script>\\n\\n<style>\\n\\tdiv {\\n\\t\\tpadding: 0 0.5em;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tflex-wrap: wrap;\\n\\t}\\n\\t\\n\\thr {\\n\\t\\twidth: 100%;\\n\\t\\tmargin-left: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\th2 {\\n\\t\\tmargin-top: 2em;\\n\\t\\tfont-size: 1.5em;\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\tp {\\n\\t\\tfont-style: italic;\\n\\t}\\n\\n\\t/*Larger Screen*/\\n\\t@media only screen and (min-width: 655px) {\\n\\n\\t.wrapper {\\n\\t\\tflex-direction: row;\\n\\t\\tjustify-content: flex-start;\\n\\t\\talign-items: flex-start;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 4em;\\n\\t}\\n}\\n\\n</style>\\n\\n<svelte:head>\\n\\t<title>Staff</title>\\n</svelte:head>\\n\\n<div>\\n\\t<h1>Our Leadership</h1>\\n\\n\\t<p>It shall not be so among you. But whoever would be great among you must be your servant... Matthew 20:26</p>\\n\\t\\n\\t<h2>Board of Elders</h2>\\n\\t<hr>\\n\\t<div class='wrapper'>\\n\\t\\t<StaffCard {...alecPaul}/>\\n\\t\\t<StaffCard {...dennisRiksen}/>\\n\\t\\t<StaffCard {...mattArmstrong}/>\\n\\t\\t<StaffCard {...kenKlubberud}/>\\n\\t\\t<StaffCard {...daleForrester}/>\\n\\t\\t<StaffCard {...gregBennet}/>\\n\\t</div>\\n\\n\\t<h2>Deacons</h2>\\n\\t<hr>\\n\\t<div class='wrapper'>\\n\\t\\t<StaffCard {...edKyllonen}/>\\n\\t\\t<StaffCard {...jessKady}/>\\n\\t\\t<StaffCard {...mattCrowell}/>\\n\\t</div>\\n\\n\\t<h2>Directors</h2>\\n\\t<hr>\\n\\t<div class='wrapper'>\\n\\t\\t<StaffCard {...sueArmstrong}/>\\n\\t\\t<StaffCard {...reamenWilliams}/>\\n\\t</div>\\n\\n\\t<h2>Support</h2>\\n\\t<hr>\\n\\t<div class='wrapper'>\\n\\t\\t<StaffCard {...debbieNewton}/>\\n\\t</div>\\n\\n</div>\"],\"names\":[],\"mappings\":\"AA0FC,GAAG,eAAC,CAAC,AACJ,OAAO,CAAE,CAAC,CAAC,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,EAAE,eAAC,CAAC,AACH,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,CAAC,CACd,MAAM,CAAE,CAAC,AACV,CAAC,AAED,EAAE,eAAC,CAAC,AACH,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,EAAE,eAAC,CAAC,AACH,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,CAAC,eAAC,CAAC,AACF,UAAU,CAAE,MAAM,AACnB,CAAC,AAGD,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAE3C,QAAQ,eAAC,CAAC,AACT,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,UAAU,CAC3B,WAAW,CAAE,UAAU,AACxB,CAAC,AAED,EAAE,eAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Staff = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	const alecPaul = {
		src: "/alec.jpg",
		name: "Alec Paul",
		title: "Pastor - Chairman",
		email: "pastor@theridgebiblechurch.com"
	};

	const dennisRiksen = {
		//src: '/alec.jpg', 
		name: "Dennis Riksen",
		title: "Vice-Chairman",
		email: "pastor@theridgebiblechurch.com"
	};

	const mattArmstrong = {
		//src: '/alec.jpg', 
		name: "Matt Armstrong",
		title: "Secretary",
		email: "pastor@theridgebiblechurch.com"
	};

	const kenKlubberud = {
		//src: '/alec.jpg', 
		name: "Ken Klubberud",
		title: "Financial Officer",
		email: "pastor@theridgebiblechurch.com"
	};

	const daleForrester = {
		//src: '/alec.jpg', 
		name: "Dale Forrester",
		title: "Elder",
		email: "pastor@theridgebiblechurch.com"
	};

	const gregBennet = {
		//src: '/alec.jpg', 
		name: "Greg Bennett",
		title: "Elder",
		email: "pastor@theridgebiblechurch.com"
	};

	const sueArmstrong = {
		//src: '/alec.jpg', 
		name: "Sue Armstrong",
		title: "Childrens's Ministry Director",
		email: "pastor@theridgebiblechurch.com"
	};

	const reamenWilliams = {
		//src: '/alec.jpg', 
		name: "Reamen Williams",
		title: "Youth Ministry Director",
		email: "pastor@theridgebiblechurch.com"
	};

	const debbieNewton = {
		//src: '/alec.jpg', 
		name: "Debbie Newton",
		title: "Church Secretary",
		email: "pastor@theridgebiblechurch.com"
	};

	const edKyllonen = {
		//src: '/alec.jpg', 
		name: "Ed Kyllonen",
		title: "Deacon",
		email: "pastor@theridgebiblechurch.com"
	};

	const jessKady = {
		//src: '/alec.jpg', 
		name: "Jess Kady",
		title: "Deacon",
		email: "pastor@theridgebiblechurch.com"
	};

	const mattCrowell = {
		//src: '/alec.jpg', 
		name: "Matt Crowell",
		title: "Deacon",
		email: "pastor@theridgebiblechurch.com"
	};

	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Staff</title>`, "")}`, "")}

<div class="${"svelte-146xfl0"}"><h1 class="${"svelte-146xfl0"}">Our Leadership</h1>

	<p class="${"svelte-146xfl0"}">It shall not be so among you. But whoever would be great among you must be your servant... Matthew 20:26</p>
	
	<h2 class="${"svelte-146xfl0"}">Board of Elders</h2>
	<hr class="${"svelte-146xfl0"}">
	<div class="${"wrapper svelte-146xfl0"}">${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(alecPaul), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(dennisRiksen), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(mattArmstrong), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(kenKlubberud), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(daleForrester), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(gregBennet), {}, {})}</div>

	<h2 class="${"svelte-146xfl0"}">Deacons</h2>
	<hr class="${"svelte-146xfl0"}">
	<div class="${"wrapper svelte-146xfl0"}">${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(edKyllonen), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(jessKady), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(mattCrowell), {}, {})}</div>

	<h2 class="${"svelte-146xfl0"}">Directors</h2>
	<hr class="${"svelte-146xfl0"}">
	<div class="${"wrapper svelte-146xfl0"}">${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(sueArmstrong), {}, {})}
		${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(reamenWilliams), {}, {})}</div>

	<h2 class="${"svelte-146xfl0"}">Support</h2>
	<hr class="${"svelte-146xfl0"}">
	<div class="${"wrapper svelte-146xfl0"}">${validate_component(StaffCard, "StaffCard").$$render($$result, Object.assign(debbieNewton), {}, {})}</div></div>`;
});

/* src\routes\blog\index.svelte generated by Svelte v3.23.2 */

const css$5 = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$5);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

/* src\routes\blog\[slug].svelte generated by Svelte v3.23.2 */

const css$6 = {
	code: ".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$6);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-gnxal1"}">${post.html}</div>`;
});

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const dropdownOpen = writable(false);

/* src\components\Logo.svelte generated by Svelte v3.23.2 */

const css$7 = {
	code: "li.svelte-1ffhurv{display:flex;align-items:center;margin-right:auto}img.svelte-1ffhurv{height:60px;width:120px}.title.svelte-1ffhurv{margin-left:10px;font-size:22px;font-weight:bold;letter-spacing:1px}@media only screen and (max-width: 655px){.title.svelte-1ffhurv{font-size:19px;letter-spacing:1px}}",
	map: "{\"version\":3,\"file\":\"Logo.svelte\",\"sources\":[\"Logo.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { draw } from 'svelte/transition';\\r\\n  import { quintIn } from 'svelte/easing';\\r\\n\\r\\n\\r\\n  export let title = \\\"\\\";\\r\\n\\r\\n  // Ensure menu is not toggled on when navigating home\\r\\n  import { dropdownOpen } from '../store';\\r\\n\\r\\n  function closeDropdown() {\\r\\n    dropdownOpen.set(false);\\r\\n  }\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  li {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-right: auto;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    height: 60px;\\r\\n    width: 120px;\\r\\n  }\\r\\n\\r\\n  .title {\\r\\n    margin-left: 10px;\\r\\n    font-size: 22px;\\r\\n    font-weight: bold;\\r\\n    letter-spacing: 1px;\\r\\n  }\\r\\n\\r\\n  @media only screen and (max-width: 655px) {\\r\\n\\r\\n    .title {\\r\\n      font-size: 19px;\\r\\n      letter-spacing: 1px;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n<li>\\r\\n  <a href=\\\"/\\\" on:click={closeDropdown}>\\r\\n    <img src='RidgeLogo.svg' />\\r\\n  </a>\\r\\n  <a href=\\\"/\\\" on:click={closeDropdown} class=\\\"title\\\">{title}</a>\\r\\n</li>\\r\\n\"],\"names\":[],\"mappings\":\"AAgBE,EAAE,eAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,YAAY,CAAE,IAAI,AACpB,CAAC,AAED,GAAG,eAAC,CAAC,AACH,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,AACd,CAAC,AAED,MAAM,eAAC,CAAC,AACN,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,GAAG,AACrB,CAAC,AAED,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAEzC,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,AACrB,CAAC,AACH,CAAC\"}"
};

const Logo = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "" } = $$props;

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css$7);

	return `<li class="${"svelte-1ffhurv"}"><a href="${"/"}"><img src="${"RidgeLogo.svg"}" class="${"svelte-1ffhurv"}"></a>
  <a href="${"/"}" class="${"title svelte-1ffhurv"}">${escape(title)}</a></li>`;
});

/* src\components\navItem.svelte generated by Svelte v3.23.2 */

const css$8 = {
	code: "li.svelte-r5nrh7{display:flex;align-items:center;font-weight:bold;font-size:22px;transition:all 300ms}a.svelte-r5nrh7{margin-right:20px;margin-left:20px;display:flex;align-items:center;justify-content:center;transition:all 300ms}@media only screen and (max-width: 900px){li.svelte-r5nrh7{font-size:19px}a.svelte-r5nrh7{margin-left:10px;margin-right:10px}}",
	map: "{\"version\":3,\"file\":\"navItem.svelte\",\"sources\":[\"navItem.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    // your script goes here\\r\\n    export let title = '';\\r\\n    export let icon = '';\\r\\n    export let route;\\r\\n  </script>\\r\\n  \\r\\n  \\r\\n    <li>\\r\\n      <a href={route}>{icon} {title}</a>\\r\\n    </li>\\r\\n  \\r\\n  \\r\\n  <style>\\r\\n  \\r\\n    li {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      font-weight: bold;\\r\\n      font-size: 22px;\\r\\n      transition: all 300ms;\\r\\n    }\\r\\n  \\r\\n    a {\\r\\n      margin-right: 20px;\\r\\n      margin-left: 20px;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center;\\r\\n      transition: all 300ms;\\r\\n    }\\r\\n  \\r\\n    @media only screen and (max-width: 900px) {\\r\\n  \\r\\n      li {\\r\\n        font-size: 19px;\\r\\n      }\\r\\n  \\r\\n      a {\\r\\n        margin-left: 10px;\\r\\n        margin-right: 10px;\\r\\n      }\\r\\n    }\\r\\n        \\r\\n  </style>\"],\"names\":[],\"mappings\":\"AAeI,EAAE,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CAAC,KAAK,AACvB,CAAC,AAED,CAAC,cAAC,CAAC,AACD,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,GAAG,CAAC,KAAK,AACvB,CAAC,AAED,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAEzC,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,CAAC,cAAC,CAAC,AACD,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,AACpB,CAAC,AACH,CAAC\"}"
};

const NavItem = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "" } = $$props;
	let { icon = "" } = $$props;
	let { route } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.route === void 0 && $$bindings.route && route !== void 0) $$bindings.route(route);
	$$result.css.add(css$8);

	return `<li class="${"svelte-r5nrh7"}"><a${add_attribute("href", route, 0)} class="${"svelte-r5nrh7"}">${escape(icon)} ${escape(title)}</a>
    </li>`;
});

/* src\components\dropdownItem.svelte generated by Svelte v3.23.2 */

const css$9 = {
	code: "a.svelte-1vyq8k1{height:50px;display:flex;align-items:center;transition:background var(--speed);padding:0.5rem;color:var(--text-color)}button.svelte-1vyq8k1{font-size:17px;font-weight:bold;border:none;background-color:white}",
	map: "{\"version\":3,\"file\":\"dropdownItem.svelte\",\"sources\":[\"dropdownItem.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { dropdownOpen } from '../store'\\r\\n  export let title = '';\\r\\n  export let route;\\r\\n\\r\\n  function toggle() {\\r\\n      dropdownOpen.update(value => !value);\\r\\n  }\\r\\n</script>\\r\\n\\r\\n\\r\\n<a href={route}>\\r\\n  <button on:click={toggle}>{title}</button>\\r\\n</a>\\r\\n\\r\\n\\r\\n<style>\\r\\n\\r\\n  a {\\r\\n    height: 50px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    transition: background var(--speed);\\r\\n    padding: 0.5rem;\\r\\n    color: var(--text-color);\\r\\n  }\\r\\n\\r\\n  button {\\r\\n    font-size: 17px;\\r\\n    font-weight: bold;\\r\\n    border: none;\\r\\n    background-color: white;\\r\\n  }\\r\\n      \\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAkBE,CAAC,eAAC,CAAC,AACD,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,UAAU,CAAC,IAAI,OAAO,CAAC,CACnC,OAAO,CAAE,MAAM,CACf,KAAK,CAAE,IAAI,YAAY,CAAC,AAC1B,CAAC,AAED,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,AACzB,CAAC\"}"
};

const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title = "" } = $$props;
	let { route } = $$props;

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.route === void 0 && $$bindings.route && route !== void 0) $$bindings.route(route);
	$$result.css.add(css$9);

	return `<a${add_attribute("href", route, 0)} class="${"svelte-1vyq8k1"}"><button class="${"svelte-1vyq8k1"}">${escape(title)}</button>
</a>`;
});

/* src\components\dropdown.svelte generated by Svelte v3.23.2 */

const css$a = {
	code: "li.svelte-1b90z3{display:flex;align-items:center;margin-left:20px;margin-right:20px;font-size:17px}button.svelte-1b90z3{display:flex;align-items:center;justify-content:center;border:none;padding:0;margin:0;background-color:rgba(1, 1, 1, 0);transition:filter 300ms}div.svelte-1b90z3{position:fixed;overflow:hidden;z-index:99;top:80px;left:0;width:100%;height:calc(100% - 80px);box-sizing:border-box;border-top:2px black solid;background-color:white}",
	map: "{\"version\":3,\"file\":\"dropdown.svelte\",\"sources\":[\"dropdown.svelte\"],\"sourcesContent\":[\"<script>\\r\\n    import Fa from 'svelte-fa';\\r\\n    import { faBars } from '@fortawesome/free-solid-svg-icons';\\r\\n    import DropdownItem from './dropdownItem.svelte';\\r\\n    import { dropdownOpen } from '../store';\\r\\n    import { slide } from 'svelte/transition';\\r\\n\\timport { sineIn } from 'svelte/easing';\\r\\n\\r\\n    let dropdownOpen_value = false;\\r\\n\\r\\n    const unsubscribe = dropdownOpen.subscribe(value => {\\r\\n\\t\\tdropdownOpen_value = value;\\r\\n    });\\r\\n    \\r\\n    function toggle() {\\r\\n        dropdownOpen.update(value => !value);\\r\\n    }\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n\\r\\n    li {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        margin-left: 20px;\\r\\n        margin-right: 20px;\\r\\n        font-size: 17px;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        border: none;\\r\\n        padding: 0;\\r\\n        margin: 0;\\r\\n        background-color: rgba(1, 1, 1, 0);\\r\\n        transition: filter 300ms;\\r\\n    }\\r\\n    div {\\r\\n        position: fixed;\\r\\n        overflow: hidden;\\r\\n        z-index: 99;\\r\\n        top: 80px;\\r\\n        left: 0;\\r\\n        width:100%;\\r\\n        height: calc(100% - 80px);\\r\\n        box-sizing: border-box;\\r\\n        border-top: 2px black solid;\\r\\n        background-color: white;\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n\\r\\n{#if dropdownOpen_value}\\r\\n    <li>\\r\\n        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>\\r\\n        <div in:slide=\\\"{{duration: 500, easing: sineIn }}\\\">\\r\\n            <DropdownItem title='Staff' route='/staff' onClick={toggle}/>\\r\\n            <DropdownItem title='Giving' route='/giving' onClick={toggle}/>\\r\\n            <DropdownItem title='Sermons' route='/sermons' onClick={toggle}/>\\r\\n            <DropdownItem title='Blog' route='/blog' onClick={toggle}/>\\r\\n            <DropdownItem title='Statement of Faith' route='/statement' onClick={toggle}/>\\r\\n\\r\\n        </div>\\r\\n    </li>\\r\\n{:else}\\r\\n    <li>\\r\\n        <button on:click={toggle}><Fa icon={faBars} size='2x'/></button>\\r\\n    </li>\\r\\n{/if}\"],\"names\":[],\"mappings\":\"AAqBI,EAAE,cAAC,CAAC,AACA,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAClB,SAAS,CAAE,IAAI,AACnB,CAAC,AAED,MAAM,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClC,UAAU,CAAE,MAAM,CAAC,KAAK,AAC5B,CAAC,AACD,GAAG,cAAC,CAAC,AACD,QAAQ,CAAE,KAAK,CACf,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,EAAE,CACX,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,CAAC,CACP,MAAM,IAAI,CACV,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAC3B,gBAAgB,CAAE,KAAK,AAC3B,CAAC\"}"
};

const Dropdown = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let dropdownOpen_value = false;

	const unsubscribe = dropdownOpen.subscribe(value => {
		dropdownOpen_value = value;
	});

	function toggle() {
		dropdownOpen.update(value => !value);
	}

	$$result.css.add(css$a);

	return `${dropdownOpen_value
	? `<li class="${"svelte-1b90z3"}"><button class="${"svelte-1b90z3"}">${validate_component(Fa, "Fa").$$render($$result, { icon: freeSolidSvgIcons.faBars, size: "2x" }, {}, {})}</button>
        <div class="${"svelte-1b90z3"}">${validate_component(DropdownItem, "DropdownItem").$$render(
			$$result,
			{
				title: "Staff",
				route: "/staff",
				onClick: toggle
			},
			{},
			{}
		)}
            ${validate_component(DropdownItem, "DropdownItem").$$render(
			$$result,
			{
				title: "Giving",
				route: "/giving",
				onClick: toggle
			},
			{},
			{}
		)}
            ${validate_component(DropdownItem, "DropdownItem").$$render(
			$$result,
			{
				title: "Sermons",
				route: "/sermons",
				onClick: toggle
			},
			{},
			{}
		)}
            ${validate_component(DropdownItem, "DropdownItem").$$render(
			$$result,
			{
				title: "Blog",
				route: "/blog",
				onClick: toggle
			},
			{},
			{}
		)}
            ${validate_component(DropdownItem, "DropdownItem").$$render(
			$$result,
			{
				title: "Statement of Faith",
				route: "/statement",
				onClick: toggle
			},
			{},
			{}
		)}</div></li>`
	: `<li class="${"svelte-1b90z3"}"><button class="${"svelte-1b90z3"}">${validate_component(Fa, "Fa").$$render($$result, { icon: freeSolidSvgIcons.faBars, size: "2x" }, {}, {})}</button></li>`}`;
});

/* src\components\Navbar.svelte generated by Svelte v3.23.2 */

const css$b = {
	code: "nav.svelte-14wk0sy{height:60px;background-color:white;color:black;display:flex;width:100%;padding:1em;box-sizing:border-box;justify-content:flex-end;z-index:101}@media only screen and (max-width: 655px){nav.svelte-14wk0sy{position:relative;top:0px}}",
	map: "{\"version\":3,\"file\":\"Navbar.svelte\",\"sources\":[\"Navbar.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Logo from './Logo.svelte';\\r\\n  import NavItem from \\\"./navItem.svelte\\\";\\r\\n  import Dropdown from './dropdown.svelte';\\r\\n  let width;\\r\\n  let mobile = false;\\r\\n  $: if (width < 450) {\\r\\n    mobile = true;\\r\\n    }\\r\\n    else {\\r\\n      mobile = false;\\r\\n    }\\r\\n</script>\\r\\n\\r\\n<style>\\r\\n  nav {\\r\\n    height: 60px;\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    padding: 1em;\\r\\n    box-sizing: border-box;\\r\\n    justify-content: flex-end;\\r\\n    z-index: 101;\\r\\n  }\\r\\n\\r\\n@media only screen and (max-width: 655px) {\\r\\n\\r\\n  nav {\\r\\n    position: relative;\\r\\n    top: 0px;\\r\\n  }\\r\\n}\\r\\n</style>\\r\\n\\r\\n<svelte:window bind:innerWidth={width}/>\\r\\n\\r\\n{#if mobile}\\r\\n<nav>\\r\\n  <Logo />\\r\\n  <Dropdown />\\r\\n</nav>\\r\\n{:else}\\r\\n<nav>\\r\\n  <NavItem title=\\\"Staff\\\" route='/staff'/>\\r\\n  <NavItem title=\\\"Giving\\\" route='/giving'/>\\r\\n  <NavItem title=\\\"Sermons\\\" route='/sermons'/>\\r\\n  <NavItem title=\\\"Blog\\\" route='/blog'/>\\r\\n  <NavItem title=\\\"Statement of Faith\\\" route='/statement'/>\\r\\n</nav>\\r\\n{/if}\\r\\n\"],\"names\":[],\"mappings\":\"AAeE,GAAG,eAAC,CAAC,AACH,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,UAAU,CACtB,eAAe,CAAE,QAAQ,CACzB,OAAO,CAAE,GAAG,AACd,CAAC,AAEH,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAEzC,GAAG,eAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,AACV,CAAC,AACH,CAAC\"}"
};

const Navbar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let mobile = false;
	$$result.css.add(css$b);

	 {
		{
			mobile = false;
		}
	}

	return `

${mobile
	? `<nav class="${"svelte-14wk0sy"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
  ${validate_component(Dropdown, "Dropdown").$$render($$result, {}, {}, {})}</nav>`
	: `<nav class="${"svelte-14wk0sy"}">${validate_component(NavItem, "NavItem").$$render($$result, { title: "Staff", route: "/staff" }, {}, {})}
  ${validate_component(NavItem, "NavItem").$$render($$result, { title: "Giving", route: "/giving" }, {}, {})}
  ${validate_component(NavItem, "NavItem").$$render($$result, { title: "Sermons", route: "/sermons" }, {}, {})}
  ${validate_component(NavItem, "NavItem").$$render($$result, { title: "Blog", route: "/blog" }, {}, {})}
  ${validate_component(NavItem, "NavItem").$$render(
			$$result,
			{
				title: "Statement of Faith",
				route: "/statement"
			},
			{},
			{}
		)}</nav>`}`;
});

/* src\routes\_layout.svelte generated by Svelte v3.23.2 */

const css$c = {
	code: "main.svelte-14wfx85{position:relative;background-color:white;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tbackground-color: white;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Navbar />\\n\\n<main>\\n\\t<slot></slot>\\n</main>\"],\"names\":[],\"mappings\":\"AAMC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$c);

	return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

<main class="${"svelte-14wfx85"}">${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src\routes\_error.svelte generated by Svelte v3.23.2 */

const css$d = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$d);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// statement.svelte
			pattern: /^\/statement\/?$/,
			parts: [
				{ name: "statement", file: "statement.svelte", component: Statement }
			]
		},

		{
			// sermons.svelte
			pattern: /^\/sermons\/?$/,
			parts: [
				{ name: "sermons", file: "sermons.svelte", component: Sermons }
			]
		},

		{
			// giving.svelte
			pattern: /^\/giving\/?$/,
			parts: [
				{ name: "giving", file: "giving.svelte", component: Giving }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// staff.svelte
			pattern: /^\/staff\/?$/,
			parts: [
				{ name: "staff", file: "staff.svelte", component: Staff }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

const CONTEXT_KEY = {};

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.23.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = await session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
