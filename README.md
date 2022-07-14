## Dyzee Diaries: <a target="_blank" href="https://demo-dyzee-diaries.netlify.app"/>Live Demo Here!</a> 
This repository is for a collaborative project with the Pure Func team to create a landing page for BBoy Dyzee (SuperNaturalz BBoy Crew).

## How It's Made:
This was a collaborative effort with the Pure Func team. The client had a slow-loading WordPress site, and it was our goal to recreate and optimize the application using SvelteKit. We split up our tasks and used a tracker tool to track and update our task progress. My tasks included styling, content, images, and components. This application was my first introduction to using and deploying a Svelte application.

  <td width="100%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/dyze-diaries.gif?raw=true" width="100%"  alt="Lighthouse Score after update."/>
    </td>
  </tr>

**Tech used:** 
Mainly Svelte/SvelteKit (HTML, CSS, JavaScript) was used for this project.

To use this, please be sure to checkout [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte), and 

## `npm -install`

## Optimizations:
Comparing the home pages of the original application to the face-lifted SvelteKit application, the app achieved a Performance score boost from 63 to 97 per Google's Lighthouse tool:

 <tr>
 Improved Lighthouse Score:
    <td width="33.3%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/lighthouse-new.jpg?raw=true" width="50%"  alt="Lighthouse Score after update."/>
    </td>
  </tr>
  
   <tr>
   Original Lighthouse Score:
    <td width="33.3%"  style="align:center;" valign="top">
            <img src="https://github.com/ubemacapuno/images-for-github-readme/blob/main/lighthouse-original.jpg?raw=true" width="50%"  alt="Lighthouse Score after update."/>
    </td>
  </tr>

## Lessons Learned:
This is my first project using SvelteKit, so a lot was learned and I am still learning when reviewing and updating this project. One of the biggest things I learned was the routing, rendering, and also the concept of scoped components (meaning that accidentally changing the style of elements elsewhere in the app will not break components) that come with using front-end libraries.
