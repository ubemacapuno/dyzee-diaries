<script>
  export let title = ''
  export let subtitle = ''
  export let image = ''
  export let isCentered = false
</script>



<div class:isCentered class="wrapper" class:image>
  {#if image}
    <img src={image} alt={title} />
  {/if}

  <div class="content">
    <h1>{title}</h1>    
    {#if subtitle}
    <h3>{subtitle}</h3> 
    {/if}
    <slot />
  </div>
</div>


<style>
  .wrapper {
    position: relative;
    display: flex;
    align-items:center;
    min-height: 300px;
    max-height: 700px;
    margin-bottom: 100px;
  }

   img {
    width: calc(100vw - var(--sidebar-width));
    max-height: inherit;
    object-fit: cover;
    max-width: 100%;
  }

  .content {
    padding: 40px 20px 20px;
    margin: 0 5%;
    hyphens: auto;
    position: absolute;
    max-width: 900px;
  }

  h1 {
    text-transform: uppercase;
  }

  h1, h3{
    color: white;
  }
  .isCentered {
    text-align: center;
    justify-content:center;
  }

  @media (max-width: 900px) {
	img {
		width: 100vw;
	}


}
</style>