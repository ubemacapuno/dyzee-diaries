<script lang="ts">
import { getExcerpt } from "$lib/excerpt";

  import type { Diary } from "./diaries";
 
	export let diary: Diary
</script>


<div class="diary">
  <div class="thumbnail">
    <img  src={diary.image} alt={diary.title} />
  </div>
  <div>

    <h5>
      {diary.date}
    </h5>
    <h5>
      <a
      href={`/diaries/${diary.id}`}
      aria-label={`link to a diary titled ${diary.title}`}
      
      >
      {diary.title}
    </a>
  </h5>
  <p>{diary.excerpt || getExcerpt(diary.html)}</p>
</div>




</div>

<div class="read-more">
  <a href={`/diaries/${diary.id}`} >
    Read More
  </a>
</div>

<hr/>

<style>
  .diary {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-gap: 20px;
    padding-top: 20px;
  }

  .thumbnail {
    /* width: ;
    height: 100%; */
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
  }

	h5 {
		hyphens: auto;
    margin: 0;

	}

  .read-more {
    display: flex;
    justify-content: flex-end;
  }


  @media only screen and (max-width: 900px) {
		.diary {
			display: block;	
		}
}
</style>
