<script context="module">
	import { browser, dev } from '$app/env';
	import Seo from '$lib/components/Seo.svelte'
	import aboutHeroImg from '$lib/images/about/about-hero.jpg'
	import awardImage from '$lib/images/about/award.svg'

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<Seo title="About" description="About Dyzee" pathname="/about" image="" />

<div class="page-wrapper">

	<div class="about-content-top">
			<img src={aboutHeroImg}  alt="Dyzee doing a thread" class="about-image">

		<div class="about-text"><!-- About text section-->
			<h1>About Dyzee</h1>
			<h3>This section is about the Bboy named Dyzee</h3>
			<p>	
		Born in 1979, I'm a Canadian-born Filipino, who lived in Seoul Korea for 9 years, now living in Toronto (and seasonally in Chiayi Taiwan) with my Canadian-born Korean wife. As a retired 13x World Champion Bboy who is still active in the global Bboy community, my ultimate goal is to take Bboying (and Hip hop) culture to a self sustainable industry.
			</p>
		</div>
	</div>

	<!--"bboy", "business man", "vlogger", "man of faith" section-->
	<section class="about-ratings">
		<h2>BBoy</h2>
		<p>Dyzee is a world renown Bboy legend, who not only has countless 1st place competition titles, but is also considered the pioneer of the Toronto style, the best of illusion footwork, dynamic foundation and the master of the threading style.
		He first exploded on the international Bboy scene in 2001 where he was considered one of the top 5 Bboys in the world, and although retired from competitions in 2012, he has returned from time to time, still winning battles and proving his mastery of the artform.</p>

			<section id="skills">
				<progress class="foundation" value="76" max="100"></progress>
				<progress class="originality" value="99" max="100"></progress>
				<progress class="dynamics" value="70" max="100"></progress>
				<progress class="execution" value="89" max="100"></progress>
				<progress class="cypher" value="81" max="100"></progress>
			</section>
			
		<h2>Business Man</h2>
		<p>Dyzee organized his first event in 1999. Since then, he has organized countless Bboy events around the world, launching the first international judging system, as well as becoming the global events producer for the R16 World Championships.
			To many, his progressive ideas and projects have earned him the reputation as the first activist who birthed the pro-bboy-industry movement.</p>

			<section id="skills">
				<progress class="administration" value="69" max="100"></progress>
				<progress class="accounting" value="57" max="100"></progress>
				<progress class="marketing" value="85" max="100"></progress>
				<progress class="production" value="82" max="100"></progress>
				<progress class="sales" value="50" max="100"></progress>
			</section>

		<h2>Vlogger</h2>
		<p>Dyzee has been uploading knowledge & Bboy related content online since 2004. In 2016, he officially launched the Dyzee Diaries Vlog & The Plan series on youtube.</p>

		<section id="skills">
			<progress class="content" value="82" max="100"></progress>
			<progress class="creativity" value="80" max="100"></progress>
			<progress class="charisma" value="75" max="100"></progress>
			<progress class="video-quality" value="55" max="100"></progress>
			<progress class="editing" value="67" max="100"></progress>
		</section>

		<h2>Man of Faith</h2>
		<p>In 2005, Dyzee was one of the first famous Bboys to publicly come out in his faith. He openly expresses his beliefs and often attributes every win and achievement to God.</p>
		<section id="skills">
			<progress class="faith" value="100" max="100"></progress>
		</section>	
	</section>
</div>

	<!-- Awards section-->
	<section class="about-awards">
		<h2>Awards</h2>
		<ul>
			<li><img src={awardImage} alt="award icon"/>2014 Taipei, Taiwan – “New Taipei B-Boy City” (crew)</li>
			<li><img src={awardImage} alt="award icon"/>2012 Salzburg, Austria – “Circle Industry” (2 on 2)</li>
			<li><img src={awardImage} alt="award icon"/>2011 Temple, France – “Temple O' Style” (crew)</li>
			<li><img src={awardImage} alt="award icon"/>2010 Beijing, China – “Keep On Dancing” (crew)</li>
			<li><img src={awardImage} alt="award icon"/>2015 Los Angeles, USA – “Freestyle Sessions World Finals” (3 on 3)</li>
			<li><img src={awardImage} alt="award icon"/>2009 Busan, Korea – “All Style Street Dance Festival” (3 on 3)</li>
			<li><img src={awardImage} alt="award icon"/>2009 Copenhagen, Denmark – “Floor Wars” (3 on 3)</li>
			<li><img src={awardImage} alt="award icon"/>2008 New York, USA – “Rocksteady Anniversary” (crew)</li>
			<li><img src={awardImage} alt="award icon"/>2008 Montreal, Canada – “Just For Laughs Festival” (3 on 3)</li>
			<li><img src={awardImage} alt="award icon"/>2008 Los Angeles, USA – “Freestyle Sessions 11” (crew)</li>
			<li><img src={awardImage} alt="award icon"/>2003 San Francisco, USA – “Mighty 4 5th Year Anniversary” (3 on 3)</li>
			<li><img src={awardImage} alt="award icon"/>2001 New York, USA – “Rocksteady Anniversary” (Solo)</li>
		</ul>
	</section>

<div class="page-wrapper">
	<!--Fun Facts About Dyzee-->
	<section class="about-fun-facts">
		<h2>Fun Facts About Dyzee</h2>
		<ol>
			<li>Dyzee was the first ethnic Asian to become an international superstar Bboy, thus inspiring Asian Bboys from across the world</li>
			<li>In 2004, Dyzee was the first international Bboy ever to be invited to China, which is now one of the biggest Bboy scenelis in the world</li>
			<li>Dyzee was the first Bboy to globally launch an objective based judging system</li>
			<li>Dyzee was the first non american to receive the Spy Award</li>
			<li>Dyzee is the inventor and pioneer of a large of the footwork tricks, legwork foundation and Thread concepts that are now being done today and part of the Bboy foundation</li>
			<li>In 2011, Dyzee lead the uniting movement which brought together all the major event organizers, which lead to the Undisputed World Bboy Organization</li>
			<li>As a coach, Dyzee has developed a crew battle formula which has lead some of the best crews from zero wins to international titles such as Dream Runnerz (Taiwan), SAS Crew (Philippines) and Morning of Owl (Korea) just to name a few</li>
			<li>Dyzee was one of the first famous Bboys to publicly come out with his faith in God</li>
			<li>Besides his home city of Toronto Canada, Dyzee has had a huge hand in cultivating thriving Bboy scenes such as Philippines, Taiwan and Nepal</li>
		</ol>
	</section>
</div>

<style>

	h3 {
		font-size: 1.5rem;
	}

	.about-content-top {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.about-image {
		width: 300px;
		height: auto;
		margin: 0 auto;
		align-self: center;
	}

	.about-awards {
		background-image: url("$lib/images/about/Awards.jpeg");
		background-position: center center;
		background-repeat: no-repeat;
		padding-top:110px;
		padding-right:30px;
		padding-bottom:130px;
		padding-left:30px;
		background-size:cover;
		background-attachment:fixed;
		color: white;
		font-size: 1.2rem;
	}

	.about-awards h2{
		color: white;
	}

	.about-awards ul{
		padding: 0;
	}

	.about-awards li{
		list-style: none;
		margin: 20px 0px;
	}

	img {
		margin-right: 30px;
	}

/*Hide about-fun-facts section for now, add hoverable component at later date */
	.about-fun-facts {
		display: none; 
	}
	.about-fun-facts h2 {
		align-items: center;
		justify-content: center;
	}
	
/*Styling for progress bars */	
	progress {
		text-align: left;
		background-color: #f3f3f3;
		border: 0;
		height: 2rem;
		width: 50%;
		margin: 5px;
		position: relative;
	}

	.foundation:before,.originality:before,.dynamics:before,.execution:before,.cypher:before,.administration:before,.accounting:before,.marketing:before,.production:before,.sales:before,.content:before,.creativity:before,.charisma:before,.video-quality:before,.editing:before,.faith:before{
		color: white;
		font-size: 1.0rem;
		position:absolute;
		margin: 10px;
	}

	.foundation:before{
		content: 'Foundation 76';
	
	}

	.originality:before{
		content: 'Originality 99';
	
	}

	.dynamics:before{
		content: 'Dynamics 70';
	}

	.execution:before{
		content: 'Execution 89';
	}

	.cypher:before{
		content: 'Cypher 81';
	}

	.administration:before{
		content: 'Administration 69';
	}

	.accounting:before{
		content: 'Accounting 57';
	}

	.marketing:before{
		content: 'Marketing 85';
	}

	.production:before{
		content: 'Production 82';
	}

	.sales:before{
		content: 'Sales 50';
	}

	.content:before{
		content: 'Content 82';
	}
	
	.creativity:before{
		content: 'Creativity 80';
	}

	.charisma:before{
		content: 'Charisma 75';
	}

	.video-quality:before{
		content: 'Video Quality 55';
	}

	.editing:before{
		content: 'Editing 67';
	}

	.faith:before{
		content: 'Faith 100';
	}

	progress::-webkit-progress-bar {
    background-color: var(--nav-text-color);
	}

	progress::-webkit-progress-value {
		background-color: var(--primary-color);
	}

	progress::-moz-progress-bar {
		background-color: var(--primary-color);
	}

	/* Media Queries */
	@media only screen and (max-width: 900px) {
		.about-content-top {
			display: block;	
		}

		progress {
			width: 100%;
		}
}
</style>
