var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../chunks/Seo-0b47aeec.js");
var businessImg = "/_app/assets/home-business-22d177de.jpg";
var diariesImg = "/_app/assets/home-diaries-7c01d42f.jpg";
var servicesImg = "/_app/assets/home-services-ef855388.jpg";
var aboutImg = "/_app/assets/home-about-05d9623a.jpg";
var Timeline_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-nlg7nr.svelte-nlg7nr{margin:80px 0 50px 0;text-align:center}.grid.svelte-nlg7nr.svelte-nlg7nr{position:relative;padding-left:20px;margin:0 auto;max-width:700px}.grid.svelte-nlg7nr.svelte-nlg7nr:before{content:'';position:absolute;top:0;left:0;bottom:0;width:2px;background:black}.event.svelte-nlg7nr.svelte-nlg7nr{max-width:40rem;border-radius:16px;margin:0;background:var(--nav-text-color);position:relative}.event.svelte-nlg7nr.svelte-nlg7nr:before{content:'';position:absolute;top:50%;left:-20px;width:20px;height:2px;background:black}.event.svelte-nlg7nr+.event.svelte-nlg7nr{margin-top:60px}.event.svelte-nlg7nr .date.svelte-nlg7nr{background:var(--primary-color);color:white;margin:0;padding:20px 10px;border-radius:16px 16px 0 0}.content.svelte-nlg7nr.svelte-nlg7nr{margin:0;padding:20px 10px}.title.svelte-nlg7nr.svelte-nlg7nr{margin:0;font-size:1.2rem}",
  map: null
};
const Timeline = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  const events = [
    {
      date: "March 31, 2022",
      title: "Dyzee Threadz reaches $100k USD in sales (500 website orders)",
      image: "src/lib/images/uploads/2022/04/20220330_132307-1200x1014.jpg",
      youtube: ""
    },
    {
      date: "March 3, 2021",
      title: "Dyzee launches Sneaker Storefront in Taiwan",
      image: "src/lib/images/uploads/2021/06/dyzee-storefront.png",
      youtube: ""
    },
    {
      date: "October 19, 2020",
      title: "OUR City Bboys proves conclusive 1 on 1 Showdown format!",
      image: "",
      youtube: "https://youtu.be/YESoTekv9Kk"
    },
    {
      date: "July 4, 2020",
      title: "Dyzee releases \u201CThe 2Stepz\u201D the second shoe for Breakin",
      subtitle: "New webstore is dropped to pre-release the 2stepz",
      image: "src/lib/images/uploads/2020/07/1589518888026.jpg",
      youtube: ""
    },
    {
      date: "October 1, 2019",
      title: "Dyzee Successfully Accomplishes First Crowd Funder Through Bboy Community"
    },
    {
      date: "April 18, 2019",
      title: "Dyzee reveals the first official Prototype Bboy Sneakers"
    },
    {
      date: "January 5, 2019",
      title: "Dyzee proves \u201CConclusive exhibition battle\u201D format with NEW YORK CITY vs CHIAYI DREAM RUNNERZ"
    },
    {
      date: "November 26, 2018",
      title: "Dyzee reveals plan to create 1st ever sneakers designed for Breakin"
    },
    {
      date: "August 13, 2018",
      title: "Dyzee and family moves to Taiwan"
    },
    {
      date: "April 3, 2018",
      title: "Dyzee becomes a Daddy!"
    },
    {
      date: "January 15, 2017",
      title: "Dyzee publicly releases \u201CThe Plan\u201D"
    },
    {
      date: "November 2, 2016",
      title: "Dyzee launches the Dyzeediaries Vlog series"
    },
    {
      date: "November 8, 2015",
      title: "Dyzee returns with 7 Commandoz to win Freestyle Sessions (Los Angeles, USA)"
    },
    {
      date: "April 21, 2012",
      title: "Dyzee announces retirement from competitions (Circle Industry, Salzburg Austria)"
    },
    {
      date: "July 2, 2011",
      title: "Global launched the O.U.R. System (@ R16 World Championships, Seoul Korea)"
    },
    {
      date: "March 1, 2011",
      title: "Joined Cartel Creative INC as global producer of R16 World Championships"
    },
    {
      date: "May 18, 2010",
      title: "Received Blessings from OG\u2019s and Pioneers to launch judging system (New York, USA)"
    },
    {
      date: "May 23, 2009",
      title: "Married to Janice Kim (Toronto, Canada)"
    },
    {
      date: "August 24, 2008",
      title: "Dyzee w/ Supernaturalz (+ Flexible flave) wins Freestyle Sessions World Finals (Los Angeles, USA)"
    },
    {
      date: "August 26, 2005",
      title: "Gave life to Jesus (Youngnak Church Retreat, Toronto)"
    },
    {
      date: "October 18, 2002",
      title: "First international Exhibition battle (Dyzee VS Jayrawk, Mighty 4 Sacramento, USA)"
    },
    {
      date: "August 19, 2001",
      title: "Dyzee wins Rocksteady Anniversary 1 on 1, becoming first World Champion Bboy of Asian ethnicity"
    },
    {
      date: "November 18, 1999",
      title: "Organized first Bboy competition (Back 2 da Underground - Toronto)"
    },
    {
      date: "June 18, 1995",
      title: "Joined Supernaturalz Crew (Toronto Canada)"
    },
    {
      date: "June 18, 1994",
      title: "Started Breakin"
    }
  ];
  $$result.css.add(css$1);
  return `<h1 class="${"svelte-nlg7nr"}">Dyzee&#39;s Timeline</h1>


<div class="${"grid svelte-nlg7nr"}">${(0, import_index_38cedc01.d)(events, (event) => {
    return `<div class="${"event svelte-nlg7nr"}"><h5 class="${"date svelte-nlg7nr"}">${(0, import_index_38cedc01.e)(event.date)}</h5>
      
      <div class="${"content svelte-nlg7nr"}"><h5 class="${"title svelte-nlg7nr"}">${(0, import_index_38cedc01.e)(event.title)}</h5>
        ${event.subtitle ? `<p class="${"subtitle"}">${(0, import_index_38cedc01.e)(event.subtitle)}</p>` : ``}</div>

    </div>`;
  })}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-2y80io.svelte-2y80io{display:grid;grid-template-columns:repeat(4,1fr)}.item.svelte-2y80io.svelte-2y80io{max-height:620px;max-width:620px;overflow:hidden;position:relative;cursor:pointer}.item.svelte-2y80io img.svelte-2y80io{object-fit:cover;object-position:center;height:100%;width:100%;transition:0.3s ease transform;transform:scale(1.05)}.item.svelte-2y80io h4.svelte-2y80io{position:absolute;bottom:0;left:0;background:rgba(0,0,0,0.5);width:100%;color:white;text-align:center;margin:0;padding:20px 10px}.item.svelte-2y80io:hover img.svelte-2y80io{transform:scale(1.2)}@media only screen and (max-width: 900px){.grid.svelte-2y80io.svelte-2y80io{display:block;background:#ccc;padding:10px}.item.svelte-2y80io.svelte-2y80io{margin:20px auto}.item.svelte-2y80io h4.svelte-2y80io{bottom:4px}}",
  map: null
};
const hydrate = import_Seo_0b47aeec.d;
const router = import_Seo_0b47aeec.b;
const prerender = true;
const items = [
  {
    title: "About",
    image: aboutImg,
    href: "/about"
  },
  {
    title: "The Diaries",
    image: diariesImg,
    href: "/diaries"
  },
  {
    title: "Services",
    image: servicesImg,
    href: "/services"
  },
  {
    title: "BBoy Business",
    image: businessImg,
    href: "/bboy-business"
  }
];
const Routes = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, { pathname: "/" }, {}, {})}

<div class="${"grid svelte-2y80io"}">${(0, import_index_38cedc01.d)(items, (item) => {
    return `<a${(0, import_index_38cedc01.b)("href", item.href, 0)}><div class="${"item svelte-2y80io"}"><img${(0, import_index_38cedc01.b)("src", item.image, 0)}${(0, import_index_38cedc01.b)("alt", item.title, 0)} class="${"svelte-2y80io"}">
			<h4 class="${"svelte-2y80io"}">${(0, import_index_38cedc01.e)(item.title)}</h4></div>
	</a>`;
  })}</div>

<div class="${"page-wrapper"}">${(0, import_index_38cedc01.v)(Timeline, "Timeline").$$render($$result, {}, {}, {})}
</div>`;
});
