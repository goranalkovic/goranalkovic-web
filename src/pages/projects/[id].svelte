<script>
  import SkeletonLoader from "../../components/skeleton-loader.svelte";

  export let id;

  async function loadProjects() {
    let response = await fetch(
      "https://raw.githubusercontent.com/goranalkovic/goranalkovic.github.io/master/projects.json"
    );
    let json = await response.json();

    return json.filter((p) => p.slug === id)[0];
  }
</script>

<style>
  h1 {
    font-family: var(--family-serif);
    font-weight: normal;
    font-style: italic;
    font-size: 4rem;
    line-height: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.3rem;
    max-width: 40ch;
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

  .actions a {
    border: 1px solid var(--border-subtle);
    padding: 6px 10px;
    transition: 0.3s color, 0.3s background-color;
    margin: 1rem 0;
  }

  .actions a:hover {
    background: var(--border-subtle);
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

{#await loadProjects()}
  <SkeletonLoader />
{:then project}
  <h1>{project.name}</h1>
  <p class="description">{project.description}</p>
  <div class="flex">
    <div>
      <p class="item">
        <span class="item-title">Year</span>
        <br />
        <span class="item-description">{project.year}</span>
      </p>
      <p class="item">
        <span class="item-title">Type</span>
        <br />
        <span class="item-description">{project.type}</span>
      </p>

      <p class="item">
        <span class="item-title">Technologies</span>
        <br />
        <span class="item-description">{project.technologies}</span>
      </p>
    </div>

    <div class="actions">
      {#if project.githubUrl != null}
        <a href={project.githubUrl} target="_blank">GitHub</a>
      {/if}

      {#if project.url != null}
        <a href={project.url} target="_blank">Open</a>
      {/if}
    </div>
  </div>

  <div class="gallery">
    {#each project.images as image, i}
      <img src="/{image.src.replace('img', 'images')}" alt={image.subHtml} />
    {/each}
  </div>
{:catch error}
  Error: {error}
{/await}
