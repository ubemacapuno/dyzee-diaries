<script context="module" lang="ts">
	import { browser, dev } from '$app/env';
	import Seo from '$lib/components/Seo.svelte';
	import Timeline from '$lib/components/Timeline.svelte';

	import aboutImg from '$lib/images/home-about.jpg';
	import servicesImg from '$lib/images/home-services.jpg';
	import diariesImg from '$lib/images/home-diaries.jpg';
	import businessImg from '$lib/images/home-business.jpg';
import HomeHeroImage from '$lib/components/HomeHeroImage.svelte';

	// // we don't need any JS on this page, though we'll load
	// // it in dev so that we get hot module replacement...
	// export const hydrate = dev;
	
	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
	
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	const items = [
		{
			title: 'About',
			image: aboutImg,
			href: '/about'
		},
		{
			title: 'The Diaries',
			image: diariesImg,
			href: '/diaries'
		},
		{
			title: 'Services',
			image: servicesImg,
			href: '/services'
		},
		{
			title: 'BBoy Business',
			image: businessImg,
			href: '/bboy-business'
		},
	]
</script>

<Seo pathname="/" />

<div class="grid">
	{#each items as item}
	<a href={item.href}>

		<div class="item">
			<HomeHeroImage src={item.image} alt={item.title} />
			<h4>{item.title}</h4>
		</div>
	</a>
	{/each}
</div>

<div class="page-wrapper">
	<Timeline />
</div>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(4,1fr);
}

.item { 
	max-height: 620px;
	max-width: 620px;
	overflow: hidden;
	position: relative;
	cursor: pointer;
}

.item img {
  object-fit: cover;
	object-position: center;
	height: 100%;
	width: 100%;
	transition: 0.3s ease transform;
	/* transform: scale(1.05); */
}

.item h4 {
	position: absolute;
	bottom: 3px;
	left: 0;
	background: rgba(0,0,0,0.5);
	width: 100%;
	color: white;
	text-align: center;
	margin: 0;
	padding: 20px 10px;
}

.item:hover img {
	transform: scale(1.2);
}

@media only screen and (max-width: 900px) {
	.grid {
		display: block;
		background: #ccc;
		padding: 10px;

	}

	.item { 
		margin: 20px auto;
	}

	.item h4 {
		bottom: 4px;
	}

}
</style>
