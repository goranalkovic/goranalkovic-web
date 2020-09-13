<script>
  import { work } from "../../stores.js";
  import { metatags, url } from "@sveltech/routify";
  metatags.title = "Goran Alković - work";
</script>

<h1>Work</h1>

{#each $work as project, i (i)}
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
