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
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_38cedc01 = require("../../chunks/index-38cedc01.js");
var import_Seo_0b47aeec = require("../../chunks/Seo-0b47aeec.js");
var awardImage = "/_app/assets/award-6e7fd5a3.svg";
var aboutHeroImg = "/_app/assets/about-hero-2eed39f5.jpg";
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: `h3.svelte-bubdkd.svelte-bubdkd{font-size:1.5rem}.about-content-top.svelte-bubdkd.svelte-bubdkd{display:grid;grid-template-columns:1fr 1fr}.about-image.svelte-bubdkd.svelte-bubdkd{width:300px;height:auto;margin:0 auto;align-self:center}.about-awards.svelte-bubdkd.svelte-bubdkd{background-image:url("$lib/images/about/Awards.jpeg");background-position:center center;background-repeat:no-repeat;padding-top:110px;padding-right:30px;padding-bottom:130px;padding-left:30px;background-size:cover;background-attachment:fixed;color:white;font-size:1.2rem}.about-awards.svelte-bubdkd h2.svelte-bubdkd{color:white}.about-awards.svelte-bubdkd ul.svelte-bubdkd{padding:0}.about-awards.svelte-bubdkd li.svelte-bubdkd{list-style:none;margin:20px 0px}img.svelte-bubdkd.svelte-bubdkd{margin-right:30px}.about-fun-facts.svelte-bubdkd.svelte-bubdkd{display:none}.about-fun-facts.svelte-bubdkd h2.svelte-bubdkd{align-items:center;justify-content:center}progress.svelte-bubdkd.svelte-bubdkd{text-align:left;background-color:#f3f3f3;border:0;height:2rem;width:50%;margin:5px;position:relative}.foundation.svelte-bubdkd.svelte-bubdkd:before,.originality.svelte-bubdkd.svelte-bubdkd:before,.dynamics.svelte-bubdkd.svelte-bubdkd:before,.execution.svelte-bubdkd.svelte-bubdkd:before,.cypher.svelte-bubdkd.svelte-bubdkd:before,.administration.svelte-bubdkd.svelte-bubdkd:before,.accounting.svelte-bubdkd.svelte-bubdkd:before,.marketing.svelte-bubdkd.svelte-bubdkd:before,.production.svelte-bubdkd.svelte-bubdkd:before,.sales.svelte-bubdkd.svelte-bubdkd:before,.content.svelte-bubdkd.svelte-bubdkd:before,.creativity.svelte-bubdkd.svelte-bubdkd:before,.charisma.svelte-bubdkd.svelte-bubdkd:before,.video-quality.svelte-bubdkd.svelte-bubdkd:before,.editing.svelte-bubdkd.svelte-bubdkd:before,.faith.svelte-bubdkd.svelte-bubdkd:before{color:white;font-size:1.0rem;position:absolute;margin:10px}.foundation.svelte-bubdkd.svelte-bubdkd:before{content:'Foundation 76'}.originality.svelte-bubdkd.svelte-bubdkd:before{content:'Originality 99'}.dynamics.svelte-bubdkd.svelte-bubdkd:before{content:'Dynamics 70'}.execution.svelte-bubdkd.svelte-bubdkd:before{content:'Execution 89'}.cypher.svelte-bubdkd.svelte-bubdkd:before{content:'Cypher 81'}.administration.svelte-bubdkd.svelte-bubdkd:before{content:'Administration 69'}.accounting.svelte-bubdkd.svelte-bubdkd:before{content:'Accounting 57'}.marketing.svelte-bubdkd.svelte-bubdkd:before{content:'Marketing 85'}.production.svelte-bubdkd.svelte-bubdkd:before{content:'Production 82'}.sales.svelte-bubdkd.svelte-bubdkd:before{content:'Sales 50'}.content.svelte-bubdkd.svelte-bubdkd:before{content:'Content 82'}.creativity.svelte-bubdkd.svelte-bubdkd:before{content:'Creativity 80'}.charisma.svelte-bubdkd.svelte-bubdkd:before{content:'Charisma 75'}.video-quality.svelte-bubdkd.svelte-bubdkd:before{content:'Video Quality 55'}.editing.svelte-bubdkd.svelte-bubdkd:before{content:'Editing 67'}.faith.svelte-bubdkd.svelte-bubdkd:before{content:'Faith 100'}progress.svelte-bubdkd.svelte-bubdkd::-webkit-progress-bar{background-color:var(--nav-text-color)}progress.svelte-bubdkd.svelte-bubdkd::-webkit-progress-value{background-color:var(--primary-color)}progress.svelte-bubdkd.svelte-bubdkd::-moz-progress-bar{background-color:var(--primary-color)}@media only screen and (max-width: 900px){.about-content-top.svelte-bubdkd.svelte-bubdkd{display:block}progress.svelte-bubdkd.svelte-bubdkd{width:100%}}`,
  map: null
};
const hydrate = import_Seo_0b47aeec.d;
const router = import_Seo_0b47aeec.b;
const prerender = true;
const About = (0, import_index_38cedc01.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_38cedc01.v)(import_Seo_0b47aeec.S, "Seo").$$render($$result, {
    title: "About",
    description: "About Dyzee",
    pathname: "/about",
    image: ""
  }, {}, {})}

<div class="${"page-wrapper"}">

	<div class="${"about-content-top svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", aboutHeroImg, 0)} alt="${"Dyzee doing a thread"}" class="${"about-image svelte-bubdkd"}">

		<div class="${"about-text"}">
			<h1>About Dyzee</h1>
			<h3 class="${"svelte-bubdkd"}">This section is about the Bboy named Dyzee</h3>
			<p>Born in 1979, I&#39;m a Canadian-born Filipino, who lived in Seoul Korea for 9 years, now living in Toronto (and seasonally in Chiayi Taiwan) with my Canadian-born Korean wife. As a retired 13x World Champion Bboy who is still active in the global Bboy community, my ultimate goal is to take Bboying (and Hip hop) culture to a self sustainable industry.
			</p></div></div>

	
	<section class="${"about-ratings"}"><h2>BBoy</h2>
		<p>Dyzee is a world renown Bboy legend, who not only has countless 1st place competition titles, but is also considered the pioneer of the Toronto style, the best of illusion footwork, dynamic foundation and the master of the threading style.
		He first exploded on the international Bboy scene in 2001 where he was considered one of the top 5 Bboys in the world, and although retired from competitions in 2012, he has returned from time to time, still winning battles and proving his mastery of the artform.</p>

			<section id="${"skills"}"><progress class="${"foundation svelte-bubdkd"}" value="${"76"}" max="${"100"}"></progress><span></span>
				<progress class="${"originality svelte-bubdkd"}" value="${"99"}" max="${"100"}"></progress><span></span>
				<progress class="${"dynamics svelte-bubdkd"}" value="${"70"}" max="${"100"}"></progress><span></span>
				<progress class="${"execution svelte-bubdkd"}" value="${"89"}" max="${"100"}"></progress><span></span>
				<progress class="${"cypher svelte-bubdkd"}" value="${"81"}" max="${"100"}"></progress><span></span></section>
			
		<h2>Business Man</h2>
		<p>Dyzee organized his first event in 1999. Since then, he has organized countless Bboy events around the world, launching the first international judging system, as well as becoming the global events producer for the R16 World Championships.
			To many, his progressive ideas and projects have earned him the reputation as the first activist who birthed the pro-bboy-industry movement.</p>

			<section id="${"skills"}"><progress class="${"administration svelte-bubdkd"}" value="${"69"}" max="${"100"}"></progress><span></span>
				<progress class="${"accounting svelte-bubdkd"}" value="${"57"}" max="${"100"}"></progress><span></span>
				<progress class="${"marketing svelte-bubdkd"}" value="${"85"}" max="${"100"}"></progress><span></span>
				<progress class="${"production svelte-bubdkd"}" value="${"82"}" max="${"100"}"></progress><span></span>
				<progress class="${"sales svelte-bubdkd"}" value="${"50"}" max="${"100"}"></progress><span></span></section>

		<h2>Vlogger</h2>
		<p>Dyzee has been uploading knowledge &amp; Bboy related content online since 2004. In 2016, he officially launched the Dyzee Diaries Vlog &amp; The Plan series on youtube.</p>

		<section id="${"skills"}"><progress class="${"content svelte-bubdkd"}" value="${"82"}" max="${"100"}"></progress><span></span>
			<progress class="${"creativity svelte-bubdkd"}" value="${"80"}" max="${"100"}"></progress><span></span>
			<progress class="${"charisma svelte-bubdkd"}" value="${"75"}" max="${"100"}"></progress><span></span>
			<progress class="${"video-quality svelte-bubdkd"}" value="${"55"}" max="${"100"}"></progress><span></span>
			<progress class="${"editing svelte-bubdkd"}" value="${"67"}" max="${"100"}"></progress><span></span></section>

		<h2>Man of Faith</h2>
		<p>In 2005, Dyzee was one of the first famous Bboys to publicly come out in his faith. He openly expresses his beliefs and often attributes every win and achievement to God.</p>
		<section id="${"skills"}"><progress class="${"faith svelte-bubdkd"}" value="${"100"}" max="${"100"}"></progress><span></span></section></section></div>

	
	<section class="${"about-awards svelte-bubdkd"}"><h2 class="${"svelte-bubdkd"}">Awards</h2>
		<ul class="${"svelte-bubdkd"}"><li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2014 Taipei, Taiwan \u2013 \u201CNew Taipei B-Boy City\u201D (crew)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2012 Salzburg, Austria \u2013 \u201CCircle Industry\u201D (2 on 2)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2011 Temple, France \u2013 \u201CTemple O&#39; Style\u201D (crew)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2010 Beijing, China \u2013 \u201CKeep On Dancing\u201D (crew)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2015 Los Angeles, USA \u2013 \u201CFreestyle Sessions World Finals\u201D (3 on 3)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2009 Busan, Korea \u2013 \u201CAll Style Street Dance Festival\u201D (3 on 3)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2009 Copenhagen, Denmark \u2013 \u201CFloor Wars\u201D (3 on 3)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2008 New York, USA \u2013 \u201CRocksteady Anniversary\u201D (crew)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2008 Montreal, Canada \u2013 \u201CJust For Laughs Festival\u201D (3 on 3)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2008 Los Angeles, USA \u2013 \u201CFreestyle Sessions 11\u201D (crew)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2003 San Francisco, USA \u2013 \u201CMighty 4 5th Year Anniversary\u201D (3 on 3)</li>
			<li class="${"svelte-bubdkd"}"><img${(0, import_index_38cedc01.b)("src", awardImage, 0)} alt="${"award icon"}" class="${"svelte-bubdkd"}">2001 New York, USA \u2013 \u201CRocksteady Anniversary\u201D (Solo)</li></ul></section>

<div class="${"page-wrapper"}">
	<section class="${"about-fun-facts svelte-bubdkd"}"><h2 class="${"svelte-bubdkd"}">Fun Facts About Dyzee</h2>
		<ol><li>Dyzee was the first ethnic Asian to become an international superstar Bboy, thus inspiring Asian Bboys from across the world</li>
			<li>In 2004, Dyzee was the first international Bboy ever to be invited to China, which is now one of the biggest Bboy scenelis in the world</li>
			<li>Dyzee was the first Bboy to globally launch an objective based judging system</li>
			<li>Dyzee was the first non american to receive the Spy Award</li>
			<li>Dyzee is the inventor and pioneer of a large of the footwork tricks, legwork foundation and Thread concepts that are now being done today and part of the Bboy foundation</li>
			<li>In 2011, Dyzee lead the uniting movement which brought together all the major event organizers, which lead to the Undisputed World Bboy Organization</li>
			<li>As a coach, Dyzee has developed a crew battle formula which has lead some of the best crews from zero wins to international titles such as Dream Runnerz (Taiwan), SAS Crew (Philippines) and Morning of Owl (Korea) just to name a few</li>
			<li>Dyzee was one of the first famous Bboys to publicly come out with his faith in God</li>
			<li>Besides his home city of Toronto Canada, Dyzee has had a huge hand in cultivating thriving Bboy scenes such as Philippines, Taiwan and Nepal</li></ol></section>
</div>`;
});
