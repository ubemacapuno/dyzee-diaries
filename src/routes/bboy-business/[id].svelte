
<script context="module" lang="ts">
  import {  dev } from '$app/env';
  
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
import type { Project } from '$lib/projects/projects';
export let project: Project
</script>

<Seo title={project.title} description={project.excerpt || getExcerpt(project.html)} pathname={`/bboy-business/${project.id}`}>
  <meta property="og:type" content="article" />
</Seo>


<div class="page-wrapper">
  <div class="project">

    {#if project.image}
    <img src={project.image} style="width:100%;" alt={project.title}/>
    {/if}
    
    <h2>{project.title}</h2>
    <h4>Project Overview</h4>
    
    <div class="content">
      {@html project.html}
    </div>
  </div>
</div>
  
<style>

.project {
    margin: 0 auto;
    max-width: 900px;
  }
  :global(.project-img) {
    max-width: 100%;
    height: auto;
  }
  

  h2 {
    color: var(--primary-color);
    hyphens: auto;
  }
  
	h4 {
		hyphens: auto;
	}
</style>