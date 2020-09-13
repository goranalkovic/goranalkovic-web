<script>
  import { metatags, url } from "@sveltech/routify";
  import SkeletonLoader from "../components/skeleton-loader.svelte";
  metatags.title = "Goran Alković - designer & developer";
  metatags.description = "Description coming soon...";

  async function loadProjects() {
    let response = await fetch(
      "https://raw.githubusercontent.com/goranalkovic/goranalkovic.github.io/master/projects.json"
    );
    return response.json();
  }

  async function loadCv() {
    let response = await fetch(
      "https://raw.githubusercontent.com/goranalkovic/goranalkovic.github.io/master/cv.json"
    );
    return response.json();
  }
</script>

<style>
  .flex {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "work projects about" "cv contact about";
    gap: var(--content-padding);
  }

  .flex section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-me {
    font-family: var(--family-serif);
    font-style: italic;
    max-width: 18ch;
    font-size: 1.8rem;
  }

  .about-me p {
    margin: 0;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 0;
  }

  section p.item:last-of-type {
    margin-bottom: 3rem;
  }

  .skill-item-description:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1080px) {
    .flex {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(4, auto);
      grid-template-areas: "work about" "projects about" "cv about" "contact about";

      height: 100%;
    }
  }

  @media screen and (max-width: 740px) {
    .flex {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, auto);
      grid-template-areas: "about" "work" "projects" "cv" "contact";

      height: 100%;
    }
  }
</style>

<main class="flex">
  <section style="grid-area: work">
    <h2>Work</h2>

    {#await loadCv()}
      <SkeletonLoader />
    {:then cv}
      {#each cv.work as project, i (i)}
        {#if project.featured == true}
          <p class="item">
            {#if project.slug != null}
              <a
                class="item-title"
                href={$url('/work/:id', { id: project.slug })}>{project.who}</a>
            {:else}<span class="item-title">{project.who}</span>{/if}
            <br />
            <span class="item-description">{@html project.what}</span>
          </p>
        {/if}
      {/each}

      <a class="see-more" href={$url('/work')}>See all work</a>
    {:catch error}
      Error: {error}
    {/await}
  </section>

  <section style="grid-area: projects">
    <h2>Personal projects</h2>

    {#await loadProjects()}
      <SkeletonLoader />
    {:then projects}
      {#each projects as project, i (i)}
        {#if project.featured == true}
          <p class="item">
            <a
              class="item-title"
              href={$url('/projects/:id', {
                id: project.slug,
              })}>{project.name}</a>
            <br />
            <span class="item-description">{@html project.description}</span>
          </p>
        {/if}
      {/each}

      <a
        class="see-more"
        href="https://github.com/goranalkovic"
        target="_blank">See more on GitHub</a>
    {:catch error}
      Error: {error}
    {/await}
  </section>

  <section class="about-me" style="grid-area: about">
    <p>I'm a developer and designer based in Varaždin, Croatia.</p>
    <p>I love making things that look good and work even better.</p>
  </section>

  <section style="grid-area: cv">
    <h2>Skills TL;DR</h2>

    {#await loadCv()}
      <SkeletonLoader />
    {:then cv}
      {#each cv.skills as skill, i (i)}
        {#if skill.shownInQuick == true}
          <p class="item">
            <span class="item-title">{skill.name} </span>
            <br />
            <span
              class="skill-item-description item-description">{@html skill.shortDescription}</span>
          </p>
        {/if}
      {/each}

      <a class="see-more" href={$url('/cv')}>See complete CV</a>
    {:catch error}
      Error: {error}
    {/await}
  </section>

  <section style="grid-area: contact">
    <h2>Contact</h2>

    <p class="item">
      <span class="item-title">E-mail</span>
      <br />
      <a
        class="item-description"
        href="mailto:contact@goranalkovic.com">contact@goranalkovic.com</a>
    </p>
    <p class="item">
      <span class="item-title">Phone</span>
      <br />
      <a href="tel:+385976480800" class="item-description">
        <span style="opacity: 0.6">+385</span> 97 6480 800</a>
    </p>

    <p class="item">
      <span class="item-title">GitHub</span>
      <br />
      <a href="https://github.com/goranalkovic" class="item-description">
        <span style="opacity: 0.6">github.com/</span>goranalkovic
      </a>
    </p>
  </section>
</main>
