<script>
  import { projects, work, skills } from "../stores.js";
  import { metatags, url } from "@sveltech/routify";
  import Icon from '../components/icon.svelte';
  metatags.title = "Goran Alković - designer & developer";
  metatags.description = "Personal website of Goran Alković";
</script>

<style>
  .flex {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "about about" "work projects" "cv contact";
    gap: var(--content-padding);
    margin-top: -2rem;
  }

  .flex section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .about-me {
    font-family: var(--family-serif);
    font-style: italic;
    max-width: 17ch;
    font-size: 3rem;
    font-size: min(60vw, 3.6rem);
    line-height: 120%;
  }

  .about-me p {
    margin: 0;
    margin-bottom: 1rem;
  }

  .about-me span {
    /* text-decoration: 6px underline var(--accent) ; */
    color: var(--accent)
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

  .see-more {
    margin-left: 0;
    margin-top: auto;
    margin-bottom: 0;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1080px) {
    .flex {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, auto);
      grid-template-areas: "about about" "work projects" "cv contact";

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

    /* .about-me {
      text-align: center;
    } */
  }
</style>

<main class="flex">
  <section class="about-me" style="grid-area: about" id="about">
    <p><span>Designer & developer</span> based in Varaždin, Croatia.</p>
    <!-- <p>I'm a developer and a designer based in Varaždin, Croatia.</p> -->
    <!-- <p>I love making things that look good and work even better.</p> -->
  </section>

  <section style="grid-area: work" id="work">
    <h2>Work</h2>

    {#each $work as project, i (i)}
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

    <a class="button see-more" href={$url('/work')}>See all work
      <Icon
      glyph="arrow-right"
      style="opacity: 0.85; margin-left: 5px;"/>
    </a>
  </section>



  <section style="grid-area: projects" id="projects">
    <h2>Personal projects</h2>

    {#each $projects as project, i (i)}
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

    <a class="button see-more" href={$url('/projects')}>See all projects
      <Icon
      glyph="arrow-right"
      style="opacity: 0.85; margin-left: 5px;"/>
    </a>
  </section>

  <section style="grid-area: cv" id="cv">
    <h2>Skills TL;DR</h2>

    {#each $skills as skill, i (i)}
      {#if skill.shownInQuick == true}
        <p class="item">
          <span class="item-title">{skill.name} </span>
          <br />
          <span
            class="skill-item-description item-description">{@html skill.shortDescription}</span>
        </p>
      {/if}
    {/each}

    <a class="button see-more" href={$url('/cv')}>Read my CV  <Icon
      glyph="arrow-right"
      style="opacity: 0.85; margin-left: 5px;"/></a>
  </section>

  <section style="grid-area: contact" id="contact">
    <h2>Contact</h2>

    <p class="item">
      <span class="item-title">E-mail</span>
      <br />
      <a
        class="item-description"
        href="mailto:contact@goranalkovic.com"
        target="_self">contact@goranalkovic.com</a>
    </p>
    <p class="item">
      <span class="item-title">Phone</span>
      <br />
      <a href="tel:+385976480800" target="_self" class="item-description">
        <span style="opacity: 0.6">+385</span> 97 6480 800</a>
    </p>

    <p class="item">
      <span class="item-title">GitHub</span>
      <br />
      <a
        href="https://github.com/goranalkovic"
        target="_blank"
        rel="noreferrer"
        class="item-description">
        <span style="opacity: 0.6">github.com/</span>goranalkovic
      </a>
    </p>

    <a class="button see-more" href="mailto:contact@goranalkovic.com"
    target="_self"><Icon
      glyph="email"
      style="opacity: 0.85; margin-right: 5px;"/> Contact me  </a>
  </section>
</main>
