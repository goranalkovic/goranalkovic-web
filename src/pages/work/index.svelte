<script>
  import { work } from "../../stores.js";
  import { metatags, url } from "@sveltech/routify";
  metatags.title = "Goran Alković - work";
</script>

<style>
  /* p.item:not(:last-child) {
    margin-bottom: 2rem;
  } */


  h1 {
    margin-bottom: 0.5rem;
  }  
  span.item-description {
    font-weight: 400;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 4rem;
  }

  @media screen and (max-width: 760px) {
      .grid {
        grid-template-columns: 1fr;
      }
  }
</style>

<h1>Work</h1>

<p class="description">What I've worked on before</p>

<div class="grid">
  
{#each $work as project, i (i)}
<p class="item">
  {#if project.slug != null}
    <a
      class="item-title"
      href={$url('/work/:id', { id: project.slug })}>{project.who}
      <br />
      <span class="item-description">{@html project.what}</span>
    </a>
  {:else}<span class="item-title">{project.who} <br />
    <span class="item-description">{@html project.what}</span></span>{/if}
 
</p>
{/each}

</div>