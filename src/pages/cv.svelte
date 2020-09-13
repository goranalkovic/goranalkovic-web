<script>
  import { work, skills, certsAndAwards, education } from "../stores.js";
  import CvEntry from "../components/cv-entry.svelte";
  import { metatags } from "@sveltech/routify";
  metatags.title = "Goran Alković - CV";
</script>

<style>
  h1 {
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 2.4rem;
    margin: 0;
    margin-top: 4rem;
    margin-bottom: 2rem;
    font-weight: normal;
    font-style: italic;
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
    max-width: 36vw;
  }

  @media screen and (max-width: 1080px) {
    p {
      max-width: 46vw;
    }
  }

  @media screen and (max-width: 580px) {
    p {
      max-width: 100%;
    }
  }
</style>

<h1>Résumé</h1>

<section>
  <h2 style="margin-top: 0">Contact</h2>
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
      <span style="opacity: 0.6">+385</span> 97 6480 800</a>
  </p>

  <p class="item">
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

<section class="cv-block">
  <h2>About me</h2>
  <p class="justify">
    I'm a developer and designer based in Varaždin, Croatia. Always learning new
    things and doing amazing stuff with things I already know. I love all kinds
    of design, but I also love making something amazing out of my designs.
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

<section class="cv-block">
  <h2>Awards and certificates</h2>
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

<section class="cv-block">
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
