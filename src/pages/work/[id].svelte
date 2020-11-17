<script>
  import { work } from "../../stores.js";
  import Icon from "../../components/icon.svelte";
  import { metatags, url } from "@sveltech/routify";
  export let id;

  $: project = $work.filter((p) => p.slug === id)[0];
</script>

<style>
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-bottom: 1px solid var(--border-subtle); */
    flex-wrap: wrap;
  }

  .flex div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .flex p:not(:last-child) {
    margin-right: 3rem;
  }

  .actions a:not(:last-child) {
    margin-right: 1rem;
  }

  .gallery {
    padding: 3rem 0;
  }

  .gallery figure {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .gallery img {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .gallery figcaption {
    position: absolute;
    top: 0;
    left: 0;
    
    background-color: rgba(250,250,250,0.68);
    color: #181818;
    padding: 0.6rem 1.1rem;
    opacity: 0;
    transform-origin: top left;
    transform: scaleX(0.8);
    transition: 0.3s opacity, 0.3s transform;
  }

  .gallery figure:hover > figcaption, .gallery figure:focus > figcaption {
    transform: scaleX(1);
    opacity: 1;
  }

  @supports (backdrop-filter: blur(30px)){
    .gallery figcaption {
      backdrop-filter: blur(30px) saturate(1.25);
    }
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }

    .description {
      max-width: 28ch;
    }
  }
</style>

{#if project != null}
  <h1>{project.who}</h1>
  <p class="description">
    {@html project.summary}
  </p>
  <div class="flex">
    
    <div>
    
      <p class="item">
        <span class="item-title">
          <Icon glyph="tag" width="26" height="26" color="var(--accent)" />
          <br />
          Category</span>
        <br />
        <span class="item-description">{project.type}</span>
      </p>
      <p class="item">
        <span class="item-title">
          <Icon glyph="calendar" width="26" height="26" color="var(--accent)" />
          <br />
          Timespan</span>
        <br />
        <span class="item-description">{project.when}</span>
      </p>


      <p class="item">
        <span class="item-title">
          <Icon glyph="skill" width="26" height="26" color="var(--accent)" />
          <br />
          Skills</span>
        <br />
        <span class="item-description">{project.technologies}</span>
      </p>
    </div>

    <div class="actions">
      {#if project.githubUrl != null}
        <a
          class="button"
          href={project.githubUrl}
          rel="noreferrer"
          target="_blank">GitHub</a>
      {/if}

      {#if project.url != null}
        <a
          class="button"
          href={project.url}
          rel="noreferrer"
          target="_blank">Open</a>
      {/if}
    </div>
  </div>

  {#if project.images != null}
    <div class="gallery">
      {#each project.images as image, i}
       <figure>
        <img
        src="/{image.src.replace('img', 'images')}"
        alt={image.subHtml}
        loading="lazy" />
        <figcaption>{@html image.subHtml}</figcaption>
       </figure>
      {/each}
    </div>
  {/if}
{/if}
