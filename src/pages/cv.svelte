<script>
  import { work, skills, certsAndAwards, education } from "../stores.js";
  import CvEntry from "../components/cv-entry.svelte";
  import { metatags } from "@sveltech/routify";
  metatags.title = "Goran Alković - CV";
</script>

<style>
  h2 {
    /* font-size: 2.4rem; */
    margin: 0;
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: normal;
    /* font-style: italic; */
  }

  li {
    margin: 4rem 0;
  }

  li:first-of-type {
    margin-top: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1rem;
    text-align: justify;
    text-align-last: left;
    max-width: 36ch;
  }

  .cv-btns {
    display: flex;
    margin: 1rem 0 4rem 0;
    align-items: baseline;
    justify-content: flex-start;
    grid-area: download;
  }

  .cv-btns a:not(.button) {
    margin: 0;
    margin-left: 1rem;
    color: var(--muted);
  }

  .cv {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
    grid-template-areas: "title download" "about contact" "skills work" "education work" "awards work";
    align-items: flex-start;
    justify-items: flex-start;
    grid-gap: 4em;
  }

  .about {
    grid-area: about;
  }
  .contact {
    grid-area: contact;
  }
  .skills {
    grid-area: skills;
  }
  .work {
    grid-area: work;
  }
  .awards {
    grid-area: awards;
  }
  .education {
    grid-area: education;
  }

 
  /* @media screen and (max-width: 1080px) {
    p {
      max-width: 46vw;
    }
  } */

  @media screen and (max-width: 980px) {
    p {
      max-width: 46vw;
    }
  }

  @media screen and (max-width: 840px) {
    .cv {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(6, auto);
      grid-template-areas: "title download" "contact contact" "about about" "skills skills"  "work work" "education education" "awards awards";
      grid-row-gap: 2rem;
    }

    ul,
    li,
    p,
    .cv-block,
    :global(.title),
    :global(.details),
    :global(.subtitle) {
      max-width: 100% !important;
    }
  }

  @media screen and (max-width: 580px) {
    p {
      max-width: 100%;
    }

    .cv-btns {
      flex-direction: column;
      /* align-items: center; */
      margin-bottom: 2rem;
    }

    .cv-btns a:not(.button) {
      margin: 0.5rem 0;
      padding: 6px 10px;
    }
  }
</style>

<div class="cv">
  <h1 style="grid-area: title">Résumé</h1>

<div class="cv-btns">
  <a
    class="button"
    style="margin: 0;"
    href="/files/Goran-Alkovic-Full-CV.pdf"
    target="_blank">Printable version
    <small
      style="opacity: 0.4; margin-left: 0.2rem; display: inline-block; font-size: 90%">PDF</small></a>
  <!-- <a href="/files/Goran-Alkovic-Quick-CV.pdf" target="_blank">Download short CV
    <small
      style="opacity: 0.4; margin-left: 0.2rem; display: inline-block; font-size: 90%">PDF</small></a> -->
</div>


  <section class="cv-block contact">
    <h2>Contact</h2>
    <p class="item">
      <span class="item-title">E-mail</span>
      <br />
      <a
        class="item-description"
        target="_self"
        href="mailto:contact@goranalkovic.com">contact@goranalkovic.com</a>
    </p>
    <p class="item">
      <span class="item-title">Phone</span>
      <br />
      <a href="tel:+385976480800" target="_self" class="item-description">
        <span style="opacity: 0.6">+385</span>
        97 6480 800</a>
    </p>

    <p class="cv-block item">
      <span class="item-title">GitHub</span>
      <br />
      <a
        href="https://github.com/goranalkovic"
        rel="noreferrer"
        target="_blank"
        class="item-description">
        <span style="opacity: 0.6">github.com/</span>goranalkovic
      </a>
    </p>
  </section>

  <section class="cv-block about">
    <h2>About me</h2>
    <p class="justify">
      I'm a developer and designer based in Varaždin, Croatia. Always learning
      new things and doing amazing stuff with things I already know. I love all
      kinds of design, but I also love making something amazing out of my
      designs.
    </p>
  </section>

  <section class="cv-block work">
    <h2>Work</h2>
    <ul>
      {#each $work as job}
        <li>
          <CvEntry
            when={job.when}
            title={job.who}
            subtitle={job.what}
            details={job.summary} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block skills">
    <h2>Skills</h2>
    <ul>
      {#each $skills as skill}
        <li>
          <CvEntry title={skill.name} details={skill.description} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block awards">
    <h2>Awards &amp; certificates</h2>
    <ul>
      {#each $certsAndAwards as cert}
        <li>
          <CvEntry
            when={cert.when}
            title={cert.title}
            details={cert.description} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block education">
    <h2>Education</h2>
    <ul>
      {#each $education as edu}
        <li>
          <CvEntry
            when={edu.when}
            title={edu.what}
            details={edu.description}
            subtitle={edu.title} />
        </li>
      {/each}
    </ul>
  </section>
</div>
