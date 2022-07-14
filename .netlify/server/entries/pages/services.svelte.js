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
  default: () => Services,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../chunks/Seo-0b47aeec.js");
var import_Hero_dd4a108f = require("../../chunks/Hero-dd4a108f.js");
var servicesHero = "/_app/assets/service-hero-f40abac1.jpeg";
var eventConsultingThree = "/_app/assets/services-event-consulting-3-3fc18458.png";
var eventConsultingTwo = "/_app/assets/services-event-consulting-2-5584b96d.png";
var eventConsultingOne = "/_app/assets/services-event-consulting-1-5ffa9152.png";
var ourThree = "/_app/assets/services-our-3-db389130.jpg";
var ourTwo = "/_app/assets/services-our-2-670e12b9.jpg";
var ourOne = "/_app/assets/services-our-1-d93ad9e5.jpg";
var servicesLecturesTwo = "/_app/assets/services-lectures-2-ae1fd345.jpg";
var servicesLecturesOne = "/_app/assets/services-lectures-1-673a1059.jpg";
var servicesPanelDiscussion = "/_app/assets/services-panel-discussion-e5c9172a.jpg";
var servicesWorkshopsTwo = "/_app/assets/services-workshops-2-593d3897.jpg";
var servicesWorkshopsOne = "/_app/assets/services-workshops-1-e003f917.jpg";
var Accordion_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-jcjnzh{transition:0.3s}button.svelte-jcjnzh:hover{color:var(--primary-color)}span.svelte-jcjnzh{margin-right:5px;display:inline-block;transform:rotate(0.25turn);transition:transform 0.3s ease}.isOpen.svelte-jcjnzh{transform:rotate(0.5turn)}.wrapper.svelte-jcjnzh{padding:20px}button.svelte-jcjnzh{display:flex;justify-content:left;margin-top:50px;background:none;color:inherit;border:none;padding:0;font-size:1.5rem;cursor:pointer;outline:inherit}",
  map: null
};
const Accordion = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  let { title: title2 = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  $$result.css.add(css$1);
  return `<button class="${"svelte-jcjnzh"}"><span class="${["svelte-jcjnzh", ""].join(" ").trim()}">\u25B2</span>${(0, import_index_38cedc01.e)(title2)}</button>
  ${``}`;
});
var services_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1863b2b{width:100%}li.svelte-1863b2b{margin:10px 0px;line-height:200%}p.svelte-1863b2b{color:black}",
  map: null
};
const router = import_Seo_0b47aeec.b;
const prerender = true;
const title = "Services";
const description = "Providing a range of professional services to BBoys around the world";
const Services = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, {
    title,
    description,
    pathname: "/services"
  }, {}, {})}

${(0, import_index_38cedc01.v)(import_Hero_dd4a108f.H, "Hero").$$render($$result, {
    title,
    subtitle: description,
    image: servicesHero
  }, {}, {})}
<div class="${"page-wrapper"}">
  <section class="${"services-body"}">${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Competitions & Judging" }, {}, {
    default: () => {
      return `<div class="${"competitions"}"><p class="${"svelte-1863b2b"}">Since 2001, Dyzee has been an international judge, travelling to cities and events all around the world. As a judge, he makes it my utmost importance to be a fair, and an objective judge. Dyzee does not judge on what he personally prefers, but rather on the conversation of the battle, while giving equal weight to each of the different perspectives in Breakin.</p>
        <p class="${"svelte-1863b2b"}">Being the creator of the OUR System, Dyzee\u2019s core values are fairness, justice, transparency and being honest.</p>
        <p class="${"svelte-1863b2b"}">Dyzee also provide score sheets and explanations for each of the competitors who that he judges.</p></div>`;
    }
  })}
  
  ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Workshops" }, {}, {
    default: () => {
      return `<div class="${"workshops"}"><p class="${"svelte-1863b2b"}">Many Bboys regard Dyzee as on of the great teachers and coaches in the Bboy game. Dyzee has lead many crews and Bboys into international titles such as his crew the Supernaturalz, 7 Commandoz, as well as other internationally renown crews such as Morning of Owl (Korea), Dream Runnerz, Double Kill (Taiwan), SAS Crew (Philippines), Acropom (Spain), &amp; Dynamic Rockers (USA), just to name a few.</p>
      <p class="${"svelte-1863b2b"}">Dyzee&#39;s workshops are regularly 2-3hrs and has 3 major workshops types:
      </p>
        <ol><li class="${"svelte-1863b2b"}">Evolution of the Bboy 1-1.5hrs (beginner-general)
            <ol><li class="${"svelte-1863b2b"}">This workshop takes the students through the evolution of the dance, artform and game, diving into the \u201Cinitial intent\u201D and the 3 pillars of Foundation, learning the difference between the Brooklyn, Bronx and Queens (latin) approaches to the music and how to create a basic bboy formula sentence structure.</li></ol></li>
          <li class="${"svelte-1863b2b"}">Advanced Battle Strategies 1-1.5hrs (advanced)
            <ol><li class="${"svelte-1863b2b"}">Many Bboys these days perform, rehearse and dance, but are not battling. This workshop focuses on the lost fundamentals and deeper strategies of battling from the cypher to the stage.</li></ol></li>
          <li class="${"svelte-1863b2b"}">Toronto Bboy Thread Styles 1.5-2hrs (general)
            <ol><li class="${"svelte-1863b2b"}">This workshop breaks a part what a true effective Bboy combination set is, while going through each Threading technique, guiding and equipping the students to learn how to create their own perfect threading combos and use it in a way that is effective in a battle. This class goes through the multiple burn poses.</li></ol></li>
          <li class="${"svelte-1863b2b"}">Power Footwork 1hr (advanced)
            <ol><li class="${"svelte-1863b2b"}">This workshop is an intense advanced class on a style called power footwork (aka air footwork), a circular style which revolves around powermoves disguised as footwork. These are the most difficult footwork techniques in the world which does not rely on flexibility</li></ol></li>
          <li class="${"svelte-1863b2b"}">Shadow Legs 1hr (advanced)
            <ol><li class="${"svelte-1863b2b"}">The shadown legs style is a Toronto-style based footwork approach which Dyzee is internationally renowned for mastering and evolving this style. Categorized under Dynamic Foundation, this style is based on fluttering numchuck like footwork and legwork like illusions with the legs. Considered one of the hardest floorwork styles to master, Dyzee shares the keys to each of the techniques, and the thought process into upgrading and evolving each of the patterns.</li></ol></li>
          <li class="${"svelte-1863b2b"}">Toronto Complex Legwork 1hr (advanced)
            <ol><li class="${"svelte-1863b2b"}">Toronto Legwork is part of the Toronto Style and is the bridge between footwork and Threads. This goes through all the legwork moves, patterns and the evolution of them.</li></ol></li>
          <li class="${"svelte-1863b2b"}">Toronto Thread Styles
            <ol><li class="${"svelte-1863b2b"}">The Thread Style is a lost artform of building combos and story telling. This workshop breaks down how the perfect Thread Combos are created, plus the rules that almost every threader makes!</li></ol></li>
          <li class="${"svelte-1863b2b"}">4 Levels of Originality 1.5-2hrs (general \u2013 advanced)
            <ol><li class="${"svelte-1863b2b"}">This mind-altering workshop is about going deeper into the understanding of originality and creativity, answering how one can find their own style and go deeper as an artist. This workshop breaks down the process of creativity, from changing the details, adding one&#39;s flavor, the flipping the dynamics and story telling an overall concept, while exploring the question, how far can you go with originality before it&#39;s no longer Breakin? This class is more of an intense workout of the mind which requires a lot of thinking, concentration, and open mindedness. This gives mental tools for flipping moves that helps to unlock any Bboy&#39;s creativity using a simple method which helped Dyzee and the Supernaturalz to flip as many moves and create their own styles.</li></ol></li>
          <li class="${"svelte-1863b2b"}">How to Execute 1-1.5hrs (general \u2013 advanced)
            <ol><li class="${"svelte-1863b2b"}">This workshop isn&#39;t just about discipline and physicality, but it&#39;s about how to know when your moves are ready, how to train them so you never mess up and how increasing your execution will also increase you confidence. These tools are how some of the best Bboys train and sharpen their arsenal and is now available for all to learn!</li></ol></li>
          <li class="${"svelte-1863b2b"}">FATES Ultimate Crew Battle Strategy of Death 2hrs (advanced)
            <ol><li class="${"svelte-1863b2b"}">This workshop is the most advanced and made specifically only for REAL SERIOUS CREWS. A proven battle formula that can defeat any crew!</li></ol>
              
              <img${(0, import_index_38cedc01.b)("src", servicesWorkshopsOne, 0)} alt="${"Dyzee teaching a workshop to other dancers."}" class="${"svelte-1863b2b"}">
              <img${(0, import_index_38cedc01.b)("src", servicesWorkshopsTwo, 0)} alt="${"Dyzee on a stage teaching a workshop."}" class="${"svelte-1863b2b"}"></li></ol></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Panel Discussions" }, {}, {
    default: () => {
      return `<div class="${"discussions"}"><p class="${"svelte-1863b2b"}">Dyzee has spoken on numerous panel discussions about various topics, providing well informed opinions and expertise. What ever topic you chose related to the Bboy &amp; Bgirl culture, Dyzee has a lot to say, whether or not if the community is ready to hear it!</p>
          
        <img${(0, import_index_38cedc01.b)("src", servicesPanelDiscussion, 0)} alt="${"Dyzee speaking during a panel discussion."}" class="${"svelte-1863b2b"}"></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Lectures & Presentations" }, {}, {
    default: () => {
      return `<div class="${"lectures"}"><p class="${"svelte-1863b2b"}">Dyzee can also publicly speak, presenting a variety of Bboy topics using his unique sense of humor while providing slideshows.</p>
        <p class="${"svelte-1863b2b"}">Some topics may include:</p>
        <ol><li class="${"svelte-1863b2b"}">Ultimate Crew Battle Strategy</li>
          <li class="${"svelte-1863b2b"}">History and Origins of the Bboy</li>
          <li class="${"svelte-1863b2b"}">How to organize events and gain sponsorship</li>
          <li class="${"svelte-1863b2b"}">How to create of professional Bboy Industry and future</li></ol>
        
        <img${(0, import_index_38cedc01.b)("src", servicesLecturesOne, 0)} alt="${"Dyzee presents a slideshow to the audience - close shot."}" class="${"svelte-1863b2b"}">
        <img${(0, import_index_38cedc01.b)("src", servicesLecturesTwo, 0)} alt="${"Dyzee presents a slideshow to the audience - wide shot."}" class="${"svelte-1863b2b"}"></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Co-hosting" }, {}, {
    default: () => {
      return `<div class="${"co-hosting"}"><p class="${"svelte-1863b2b"}">Since 1999, Dyzee has hosted and emceed his own events from Toronto to Seoul city. His down-to-earth style provides an organic atmosphere as he understands that properly explaining to the audience what a Bboy battle is, how to properly enjoy it and what is on the line, creates an atmosphere of excitement.</p></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Our System Administration" }, {}, {
    default: () => {
      return `<div class="${"our-system"}"><p class="${"svelte-1863b2b"}">If your event is interested in using the OUR System, Dyzee provides a complete set up and administration of the OUR System, including set up, judges training, audience explanations, and live administration.</p>
        
        <img${(0, import_index_38cedc01.b)("src", ourOne, 0)} alt="${"A dance crew celebrates a win."}" class="${"svelte-1863b2b"}">
        <img${(0, import_index_38cedc01.b)("src", ourTwo, 0)} alt="${"Laptops display the OUR system software and dancers gather in a cypher in the background."}" class="${"svelte-1863b2b"}">
        <img${(0, import_index_38cedc01.b)("src", ourThree, 0)} alt="${"Dyzee and other dancers sit together in a circle."}" class="${"svelte-1863b2b"}"></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Event Consulting and Mentoring" }, {}, {
    default: () => {
      return `<div class="${"event-consulting"}"><p class="${"svelte-1863b2b"}">Dyzee is not only a Bboy, but a long standing event Bboy event producer on all grand scales since 1999, starting in Toronto, then later moving to Korea to become the global tournament producer for R16. From small grassroots community lead tournaments to large million dollar budgets, Dyzee not only has a global reputation of creating the most exciting and memorable Bboy events, but also boast to have never lost money from an event, which is a sad reality in the world of bboy event organizing.</p>
        <p class="${"svelte-1863b2b"}">From strong and creative marketing and promotion campaigns to finding and working with sponsors, Dyzee has not only the experience &amp; knowledge of Bboy event productions on all scales, but has also mentored other event organizers from around the world from places such as  Canada, Taiwan, Nepal and the Philippines, just to name a few. Many of these organizers Dyzee mentored from the ground up,  becoming the top organizers in their country, while successfully growing and nurturing their local Bboy communities using Dyzee&#39;s 60 page step by step R16 event manuals he created.</p>
        <p class="${"svelte-1863b2b"}">If you are an aspiring Bboy event organizer or even a well seasoned local event producer, and would like to take your events and community to the next level, Dyzee is passionate about working and helping people like you!</p>
        
        <img${(0, import_index_38cedc01.b)("src", eventConsultingOne, 0)} alt="${"A graphic for R16 Partner Manual."}" class="${"svelte-1863b2b"}">
        <img${(0, import_index_38cedc01.b)("src", eventConsultingTwo, 0)} alt="${"A flyer with an introduction to Dyzee - R16 Global Series Producer."}" class="${"svelte-1863b2b"}">
        <img${(0, import_index_38cedc01.b)("src", eventConsultingThree, 0)} alt="${"A flyer for R16."}" class="${"svelte-1863b2b"}"></div>`;
    }
  })}

    ${(0, import_index_38cedc01.v)(Accordion, "Accordion").$$render($$result, { title: "Event & Brand Promotion" }, {}, {
    default: () => {
      return `<div class="${"brand-consulting"}"><p class="${"svelte-1863b2b"}">Working with many sponsors in the past, Dyzee is open to working with and collaborating with your event sponsors. Whether it would be brand endorsement, photography or video promotion, This comes part of the package when working with Dyzee.</p></div>`;
    }
  })}</section>
</div>`;
});
