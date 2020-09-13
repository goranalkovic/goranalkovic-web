<script>
  import { projects } from "../../stores.js";
  import { metatags, url } from "@sveltech/routify";
  metatags.title = "Goran Alković - projects";

  let restOfImgsVisible = false;
</script>

<style>
  p.item:not(:last-child) {
    margin-bottom: 2rem;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 3rem;
  }

  .gallery img {
    max-width: 33%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }

  h2 {
    font-family: var(--family-sans);
    font-size: 2rem;
    margin-top: 6rem;
  }

  @media screen and (max-width: 1080px) {
    .gallery img {
      max-width: 50%;
    }
  }

  @media screen and (max-width: 680px) {
    .gallery img {
      max-width: 100%;
    }
  }
</style>

<h1>Projects</h1>

{#each $projects as project, i (i)}
  {#if project.featured == true}
    <p class="item">
      <a
        class="item-title"
        href={$url('/projects/:id', { id: project.slug })}>{project.name}</a>
      <br />
      <span class="item-description">{@html project.description}</span>
    </p>
  {/if}
{/each}

<h2>Photography</h2>

<div class="gallery">
  <img loading="lazy" src="../images/photography/1.jpg" alt="My dog" />
  <img loading="lazy" src="../images/photography/2.jpg" alt="Food" />

  <img loading="lazy" src="../images/photography/6.jpg" alt="Sky" />
  {#if restOfImgsVisible}
    <img loading="lazy" src="../images/photography/7.jpg" alt="Gloomy forest" />
    <img
      loading="lazy"
      src="../images/photography/8.jpg"
      alt="Locks on fence in Paris" />
    <img loading="lazy" src="../images/photography/9.jpg" alt="Eiffel tower" />
    <img loading="lazy" src="../images/photography/3.jpg" alt="Sweets" />
    <img loading="lazy" src="../images/photography/4.jpg" alt="Statue" />
    <img
      loading="lazy"
      src="../images/photography/5.jpg"
      alt="Bird in Versailles" />
    <img
      loading="lazy"
      src="../images/photography/10.jpg"
      alt="Saint-Eustache, Paris" />
    <img loading="lazy" src="../images/photography/11.jpg" alt="River Seine" />
    <img loading="lazy" src="../images/photography/12.jpg" alt="Paris" />
    <img loading="lazy" src="../images/photography/14.jpg" alt="Wooden post" />
    <img loading="lazy" src="../images/photography/15.jpg" alt="Snowy bench" />
    <img
      loading="lazy"
      src="../images/photography/19.jpg"
      alt="Varaždin square scale model" />
    <img
      loading="lazy"
      src="../images/photography/16.jpg"
      alt="View from the airplane 1" />
    <img
      loading="lazy"
      src="../images/photography/17.jpg"
      alt="View from the airplane 2" />
    <img
      loading="lazy"
      src="../images/photography/18.jpg"
      alt="Autumn leaves" />
  {:else}
    <button on:click={() => (restOfImgsVisible = true)}>Load all images (~2MB)</button>
  {/if}
</div>
