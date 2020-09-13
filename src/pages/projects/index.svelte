<script>
  import { metatags, url } from "@sveltech/routify";
  import SkeletonLoader from "../../components/skeleton-loader.svelte";
  metatags.title = "Goran Alković - projects";

  async function loadProjects() {
    let response = await fetch("files/projects.json");
    return response.json();
  }
</script>

<h1>Projects</h1>

{#await loadProjects()}
  <SkeletonLoader />
{:then projects}
  {#each projects as project, i (i)}
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
{:catch error}
  Error: {error}
{/await}
