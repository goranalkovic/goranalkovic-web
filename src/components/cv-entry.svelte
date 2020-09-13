<script>
  export let when = null;
  export let title;
  export let subtitle = null;
  export let details = null;
</script>

<style>
  .title,
  .details,
  .subtitle {
    max-width: 36vw;
  }

  .when {
    color: var(--muted);
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
  }

  .title {
    font-weight: 700;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
  }

  .subtitle {
    margin: 0.2rem 0;
    padding: 0;
    font-size: 1.1rem;
  }

  .details {
    margin: 0;
    padding: 0;
    margin-top: 0.6rem;
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: justify;
    text-align-last: left;
    line-height: 150%;
  }

  :global(.details b) {
    color: var(--accent);
    font-weight: normal;
  }

  @media screen and (max-width: 1080px) {
    .title,
    .details,
    .subtitle {
      max-width: 46vw;
    }
  }

  @media screen and (max-width: 580px) {
    .title,
    .details,
    .subtitle {
      max-width: 100%;
    }
  }
</style>

<h4 class="title">
  {@html title}
</h4>

{#if subtitle != null}
  <p class="subtitle">
    {@html subtitle}
  </p>
{/if}

{#if when != null}
  <p class="when">
    {@html when}
  </p>
{/if}

{#if Array.isArray(details)}
  {#each details as item}
    <p class="details">
      {@html item}
    </p>
  {/each}
{:else if details != null}
  <p class="details">
    {@html details}
  </p>
{/if}
