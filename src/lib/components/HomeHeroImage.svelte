<script lang="ts">
	import { onMount } from 'svelte'
	export let src: string;
  export let alt: string;

	let loaded = false;

	onMount(() => {
			const img = new Image();
			img.src = src;

			img.onload = () => {
					loaded = true;
			};

	})
</script>

{#if loaded}
	<img {src} {alt} />
{/if}


