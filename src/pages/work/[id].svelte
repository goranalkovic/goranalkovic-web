<script>
  import { work } from "../../stores.js";
  import { metatags, url } from "@sveltech/routify";
  export let id;

  $: project = $work.filter((p) => p.slug === id)[0];
</script>

<style>
  .description {
    font-size: 1.3rem;
    max-width: 32ch;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-subtle);
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

  @media screen and (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }

    .description {
      max-width: 20ch;
    }
  }
</style>

{#if project != null}
  <h1>{project.who}</h1>
  <p class="description">{project.summary}</p>
  <div class="flex">
    <div>
      <p class="item">
        <span class="item-title">Timespan</span>
        <br />
        <span class="item-description">{project.when}</span>
      </p>
      <p class="item">
        <span class="item-title">Category</span>
        <br />
        <span class="item-description">{project.type}</span>
      </p>

      <p class="item">
        <span class="item-title">Skills</span>
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
        <img
          src="/{image.src.replace('img', 'images')}"
          alt={image.subHtml}
          loading="lazy" />
      {/each}
    </div>
  {/if}
{/if}
