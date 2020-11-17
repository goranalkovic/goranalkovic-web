<script>
  import { projects } from "../../stores.js";
  import Icon from "../../components/icon.svelte";
  export let id;

  $: project = $projects.filter((p) => p.slug === id)[0];
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

  .gallery img {
    width: 100%;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }

    .description {
      max-width: 26ch;
    }
  }
</style>

{#if project != null}
  <h1>{project.name}</h1>
  <p class="description">{@html project.description}</p>
  <div class="flex">
    <div>
      <p class="item">
        <span class="item-title">
          <Icon glyph="tag" width="26" height="26" color="var(--accent)" />
          <br />
          Type</span>
        <br />
        <span class="item-description">{project.type}</span>
      </p>
      <p class="item">
        <span class="item-title">
          <Icon glyph="calendar" width="26" height="26" color="var(--accent)" />
          <br />
          Timespan</span>
        <br />
        <span class="item-description">{project.year}</span>
      </p>


      <p class="item">
        <span class="item-title">
          <Icon glyph="skill" width="26" height="26" color="var(--accent)" />
          <br />
          Technologies</span>
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
          target="_blank">GitHub
          <Icon
          glyph="link"
          style="opacity: 0.65; margin-left: 5px;"/>
        </a>
      {/if}

      {#if project.url != null}
        <a class="button" href={project.url} target="_blank">Open
          <Icon
          glyph="link"
          style="opacity: 0.65; margin-left: 5px;"/>

        </a>
      {/if}
    </div>
  </div>

  {#if project.images != null}
    <div class="gallery">
      {#each project.images as image, i}
        <img
          src="/{image.src.replace('img', 'images')}"
          alt={image.subHtml}
          loading="lazy" />
      {/each}
    </div>
  {/if}
{/if}
