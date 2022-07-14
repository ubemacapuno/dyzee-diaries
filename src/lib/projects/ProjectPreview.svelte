<script lang="ts">
import { getExcerpt } from "$lib/excerpt";

  import type { Project } from "./projects";
 
 export let project: Project
</script>

<a
href={`/bboy-business/${project.id}`}
aria-label={`link to a project titled ${project.title}`}

>
<div class="project">
  <img src={project.image} alt={project.title} />
  <div class="content">
    <h5>
      {project.title}
    </h5>
    <p>{project.excerpt || getExcerpt(project.html)}</p>
  </div>
  </div>
</a>

<style>
  .project {
    border-radius: 6px;
  }


  img {
    width: 100%;
    height: auto;
  }

	h5 {
		hyphens: auto;
    margin: 0;
    color: var(--primary-color);
	}
  a:hover {
    text-decoration: none;
  }
</style>
