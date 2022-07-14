
<script context="module" lang="ts">
  import {  dev } from '$app/env';
  import { goto } from '$app/navigation';
  // // we don't need any JS on this page, though we'll load
  // // it in dev so that we get hot module replacement...
  // export const hydrate = dev;

  // since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
  import { getExcerpt } from "$lib/excerpt";
  import Seo from '$lib/components/Seo.svelte';
  import type { Diary } from '$lib/diaries/diaries';
  import DiaryFooter from "$lib/diaries/DiaryFooter.svelte";

  export let diary: Diary

</script>

{#if !diary}
  {() => goto('/diaries')}
{/if}

<Seo title={diary.title} description={diary.excerpt || getExcerpt(diary.html)} pathname={`/diaries/${diary.id}`} >
  <meta property="og:type" content="article" />
</Seo>  



<div class="page-wrapper">
  {#if diary.image}
    <img src={diary.image} style="width:100%;" alt={diary.title}/>
  {/if}

  <div class="diary">

    <h2>{diary.title}</h2>
    <h4>
      {diary.date}
    </h4>
    
    <div class="content">
      {@html diary.html}
    </div>
    
    <DiaryFooter />
  </div>
</div>
  
<style>

  .diary {
    margin: 0 auto;
    max-width: 900px;
  }
  :global(.diary-img) {
    max-width: 100%;
  }

  h2 {
    color: var(--primary-color);
    hyphens: auto;
  }
	h4 {
		hyphens: auto;
	}
</style>
