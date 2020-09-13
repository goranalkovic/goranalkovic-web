<script>
  import { projects } from "../../stores.js";
  import { metatags, url } from "@sveltech/routify";
  import SkeletonLoader from "../../components/skeleton-loader.svelte";
  metatags.title = "Goran Alković - projects";
</script>

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
