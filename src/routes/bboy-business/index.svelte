<script context="module">
	import { browser, dev } from '$app/env';
  import businessHero from '$lib/images/business/business-hero.jpeg'

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
  import Hero from '$lib/components/Hero.svelte'
  import Seo from '$lib/components/Seo.svelte';
  import ProjectPreview from '$lib/projects/ProjectPreview.svelte'
	const title = 'BBoy Business'
  const description = 'Dyzee is in the business of creating a self-sustaining Bboy industry'
  import { projects } from '$lib/projects/projects';


</script>

<Seo {title} {description} pathname="/bboy-business" />

<Hero {title} subtitle={description} image={businessHero} />
<div class="page-wrapper">
<div class="grid">

  {#each projects as project}
  <ProjectPreview {project} />
  {:else}
  <h3>Coming Soon!</h3>
  {/each}
</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin-top: 2rem;
  }
</style>