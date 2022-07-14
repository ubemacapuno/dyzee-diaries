<script context="module">
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte"
	import { browser, dev } from '$app/env';
  import Accordion from "$lib/components/Accordion.svelte";
  //images for services
  import servicesWorkshopsOne from '$lib/images/services/services-workshops-1.jpg'
  import servicesWorkshopsTwo from '$lib/images/services/services-workshops-2.jpg'
  import servicesPanelDiscussion from '$lib/images/services/services-panel-discussion.jpg'
  import servicesLecturesOne from '$lib/images/services/services-lectures-1.jpg'
  import servicesLecturesTwo from '$lib/images/services/services-lectures-2.jpg'
  import ourOne from '$lib/images/services/services-our-1.jpg'
  import ourTwo from '$lib/images/services/services-our-2.jpg'
  import ourThree from '$lib/images/services/services-our-3.jpg'
  import eventConsultingOne from '$lib/images/services/services-event-consulting-1.png'
  import eventConsultingTwo from '$lib/images/services/services-event-consulting-2.png'
  import eventConsultingThree from '$lib/images/services/services-event-consulting-3.png'
  import servicesHero from '$lib/images/services/service-hero.jpeg'
  import servicesHeroCTA from '$lib/images/services/services-hero-CTA.jpg'

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

<script lang="ts">
  const title = 'Services'
  const description = 'Providing a range of professional services to BBoys around the world'
</script>
  
<Seo {title} description={description} pathname="/services" />

<Hero {title} subtitle={description} image={servicesHero} />
<div class="page-wrapper">
  <!--"Competitions & Judging" section-->
  <section class="services-body">
  <Accordion title="Competitions & Judging">
    <div class="competitions">
        <p>Since 2001, Dyzee has been an international judge, travelling to cities and events all around the world. As a judge, he makes it my utmost importance to be a fair, and an objective judge. Dyzee does not judge on what he personally prefers, but rather on the conversation of the battle, while giving equal weight to each of the different perspectives in Breakin.</p>
        <p>Being the creator of the OUR System, Dyzee’s core values are fairness, justice, transparency and being honest.</p>
        <p>Dyzee also provide score sheets and explanations for each of the competitors who that he judges.</p>
    </div>
  </Accordion>
  
  <Accordion title="Workshops">
    <div class="workshops">  
      <p>Many Bboys regard Dyzee as on of the great teachers and coaches in the Bboy game. Dyzee has lead many crews and Bboys into international titles such as his crew the Supernaturalz, 7 Commandoz, as well as other internationally renown crews such as Morning of Owl (Korea), Dream Runnerz, Double Kill (Taiwan), SAS Crew (Philippines), Acropom (Spain), & Dynamic Rockers (USA), just to name a few.</p>
      <p>
        Dyzee's workshops are regularly 2-3hrs and has 3 major workshops types:
      </p>
        <ol>
          <li>
            Evolution of the Bboy 1-1.5hrs (beginner-general)
            <ol>
              <li>This workshop takes the students through the evolution of the dance, artform and game, diving into the “initial intent” and the 3 pillars of Foundation, learning the difference between the Brooklyn, Bronx and Queens (latin) approaches to the music and how to create a basic bboy formula sentence structure.</li>
            </ol>
          </li>
          <li>
            Advanced Battle Strategies 1-1.5hrs (advanced)
            <ol>
              <li>Many Bboys these days perform, rehearse and dance, but are not battling. This workshop focuses on the lost fundamentals and deeper strategies of battling from the cypher to the stage.</li>
            </ol>
          </li>
          <li>
            Toronto Bboy Thread Styles 1.5-2hrs (general)
            <ol>
              <li>This workshop breaks a part what a true effective Bboy combination set is, while going through each Threading technique, guiding and equipping the students to learn how to create their own perfect threading combos and use it in a way that is effective in a battle. This class goes through the multiple burn poses.</li>
            </ol>
          </li>
          <li>
            Power Footwork 1hr (advanced)
            <ol>
              <li>This workshop is an intense advanced class on a style called power footwork (aka air footwork), a circular style which revolves around powermoves disguised as footwork. These are the most difficult footwork techniques in the world which does not rely on flexibility</li>
            </ol>
          </li>
          <li>
            Shadow Legs 1hr (advanced)
            <ol>
              <li>The shadown legs style is a Toronto-style based footwork approach which Dyzee is internationally renowned for mastering and evolving this style. Categorized under Dynamic Foundation, this style is based on fluttering numchuck like footwork and legwork like illusions with the legs. Considered one of the hardest floorwork styles to master, Dyzee shares the keys to each of the techniques, and the thought process into upgrading and evolving each of the patterns.</li>
            </ol>
          </li>
          <li>
            Toronto Complex Legwork 1hr (advanced)
            <ol>
              <li>Toronto Legwork is part of the Toronto Style and is the bridge between footwork and Threads. This goes through all the legwork moves, patterns and the evolution of them.</li>
            </ol>
          </li>
          <li>
            Toronto Thread Styles
            <ol>
              <li>The Thread Style is a lost artform of building combos and story telling. This workshop breaks down how the perfect Thread Combos are created, plus the rules that almost every threader makes!</li>
            </ol>
          </li>
          <li>
            4 Levels of Originality 1.5-2hrs (general – advanced)
            <ol>
              <li>This mind-altering workshop is about going deeper into the understanding of originality and creativity, answering how one can find their own style and go deeper as an artist. This workshop breaks down the process of creativity, from changing the details, adding one's flavor, the flipping the dynamics and story telling an overall concept, while exploring the question, how far can you go with originality before it's no longer Breakin? This class is more of an intense workout of the mind which requires a lot of thinking, concentration, and open mindedness. This gives mental tools for flipping moves that helps to unlock any Bboy's creativity using a simple method which helped Dyzee and the Supernaturalz to flip as many moves and create their own styles.</li>
            </ol>
          </li>
          <li>
            How to Execute 1-1.5hrs (general – advanced)
            <ol>
              <li>This workshop isn't just about discipline and physicality, but it's about how to know when your moves are ready, how to train them so you never mess up and how increasing your execution will also increase you confidence. These tools are how some of the best Bboys train and sharpen their arsenal and is now available for all to learn!</li>
            </ol>
          </li>
          <li>
            FATES Ultimate Crew Battle Strategy of Death 2hrs (advanced)
            <ol>
              <li>This workshop is the most advanced and made specifically only for REAL SERIOUS CREWS. A proven battle formula that can defeat any crew!</li>
            </ol>
              <!-- insert crew images here -->
              <img src={servicesWorkshopsOne}  alt="Dyzee teaching a workshop to other dancers.">
              <img src={servicesWorkshopsTwo}   alt="Dyzee on a stage teaching a workshop.">
          </li>
        </ol>
    </div>  
  </Accordion>

    <Accordion title="Panel Discussions">
      <div class="discussions">
        <p>Dyzee has spoken on numerous panel discussions about various topics, providing well informed opinions and expertise. What ever topic you chose related to the Bboy & Bgirl culture, Dyzee has a lot to say, whether or not if the community is ready to hear it!</p>
          <!--insert judge panel image-->
        <img src={servicesPanelDiscussion}  alt="Dyzee speaking during a panel discussion.">
      </div>
    </Accordion>

    <Accordion title="Lectures & Presentations">
      <div class="lectures">
        <p>Dyzee can also publicly speak, presenting a variety of Bboy topics using his unique sense of humor while providing slideshows.</p>
        <p>Some topics may include:</p>
        <ol>
          <li>Ultimate Crew Battle Strategy</li>
          <li>History and Origins of the Bboy</li>
          <li>How to organize events and gain sponsorship</li>
          <li>How to create of professional Bboy Industry and future</li>
        </ol>
        <!--insert lecture images-->
        <img src={servicesLecturesOne}  alt="Dyzee presents a slideshow to the audience - close shot.">
        <img src={servicesLecturesTwo}  alt="Dyzee presents a slideshow to the audience - wide shot.">
      </div>
    </Accordion>

    <Accordion title="Co-hosting">
      <div class="co-hosting">
        <p>Since 1999, Dyzee has hosted and emceed his own events from Toronto to Seoul city. His down-to-earth style provides an organic atmosphere as he understands that properly explaining to the audience what a Bboy battle is, how to properly enjoy it and what is on the line, creates an atmosphere of excitement.</p>
      </div>
    </Accordion>

    <Accordion title="Our System Administration">
      <div class="our-system">
        <p>If your event is interested in using the OUR System, Dyzee provides a complete set up and administration of the OUR System, including set up, judges training, audience explanations, and live administration.</p>
        <!--insert OUR images-->
        <img src={ourOne}  alt="A dance crew celebrates a win.">
        <img src={ourTwo}  alt="Laptops display the OUR system software and dancers gather in a cypher in the background.">
        <img src={ourThree} alt="Dyzee and other dancers sit together in a circle.">
      </div>
    </Accordion>

    <Accordion title="Event Consulting and Mentoring">
      <div class="event-consulting">
        <p>Dyzee is not only a Bboy, but a long standing event Bboy event producer on all grand scales since 1999, starting in Toronto, then later moving to Korea to become the global tournament producer for R16. From small grassroots community lead tournaments to large million dollar budgets, Dyzee not only has a global reputation of creating the most exciting and memorable Bboy events, but also boast to have never lost money from an event, which is a sad reality in the world of bboy event organizing.</p>
        <p>From strong and creative marketing and promotion campaigns to finding and working with sponsors, Dyzee has not only the experience & knowledge of Bboy event productions on all scales, but has also mentored other event organizers from around the world from places such as  Canada, Taiwan, Nepal and the Philippines, just to name a few. Many of these organizers Dyzee mentored from the ground up,  becoming the top organizers in their country, while successfully growing and nurturing their local Bboy communities using Dyzee's 60 page step by step R16 event manuals he created.</p>
        <p>If you are an aspiring Bboy event organizer or even a well seasoned local event producer, and would like to take your events and community to the next level, Dyzee is passionate about working and helping people like you!</p>
        <!--insert event images (png)-->
        <img src={eventConsultingOne}  alt="A graphic for R16 Partner Manual.">
        <img src={eventConsultingTwo}  alt="A flyer with an introduction to Dyzee - R16 Global Series Producer.">
        <img src={eventConsultingThree}  alt="A flyer for R16.">
      </div>
    </Accordion>

    <Accordion title="Event & Brand Promotion">
     <div class="brand-consulting">
        <p>Working with many sponsors in the past, Dyzee is open to working with and collaborating with your event sponsors. Whether it would be brand endorsement, photography or video promotion, This comes part of the package when working with Dyzee.</p>
      </div>
    </Accordion>

  </section>
</div>
<Hero image={servicesHeroCTA}>
  <h5 class="cta-banner-text">Want to book Dyzee?</h5>
  <p class="cta-banner-text">Providing a range of professional services to BBoys around the world</p>
  <a class="ghost-button" href="/contact">Contact</a>
</Hero>

<style>

img {
width: 100%;
}

li {
  margin: 10px 0px;
  line-height: 200%;
}

.cta-banner-text {
  color: var(--background-color);
  line-height: 1.3;
	font-weight: bold;
	margin-bottom: 10px;
	margin-top: 20px;
}

p {
	font-weight: 400;
	line-height: 1.5;
}

h5 {
	font-size: 4rem;
}

@media (max-width: 900px) {
	h5 {
		font-size: 1.4rem;
	}
}
</style>
  
  
