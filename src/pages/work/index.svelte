<script>
  import { metatags, url } from "@sveltech/routify";
  import SkeletonLoader from "../../components/skeleton-loader.svelte";
  metatags.title = "Goran Alković - work";

  async function loadCv() {
    let response = await fetch("files/cv.json");
    return response.json();
  }
</script>

<h1>Work</h1>

{#await loadCv()}
  <SkeletonLoader />
{:then projects}
  {#each projects.work as project, i (i)}
    <p class="item">
      {#if project.slug != null}
        <a
          class="item-title"
          href={$url('/work/:id', { id: project.slug })}>{project.who}</a>
      {:else}<span class="item-title">{project.who}</span>{/if}
      <br />
      <span class="item-description">{@html project.what}</span>
    </p>
  {/each}
{/await}
