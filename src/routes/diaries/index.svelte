
<script context="module">
	import { browser, dev } from '$app/env';
	import diariesHero from '$lib/images/diaries/diaries-hero.jpeg'

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
  import { diaries } from '$lib/diaries/diaries';
  import DiaryPreview from '$lib/diaries/DiaryPreview.svelte'
	const title = 'The Diaries'
  const description = 'The latest of vlogs, blogs, and other media to follow Dyzee on his quest'
</script>

<Seo {title} {description} pathname="/diaries" />


<Hero {title} subtitle={description} image={diariesHero} />
<div class="page-wrapper">
  {#each diaries as diary}
  <DiaryPreview {diary} />
  {:else}
  <h3>Coming Soon!</h3>
  {/each}
</div>
