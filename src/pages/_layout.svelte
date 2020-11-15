<script>
  import { url, isActive } from "@sveltech/routify";
  import TestTransition from "../components/TestTransition.svelte";
  import { writable } from "svelte/store";
  import TabsTransition from "@sveltech/routify/runtime/decorators/TabsTransition.svelte";
  const width = writable();
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header nav" "content content" "footer footer";

    height: 100%;
  }

  header {
    grid-area: header;
    padding: calc(var(--content-padding) / 2) var(--side-padding);
    padding-right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  header .under-name {
    margin: 0.1rem 0;
  }

  nav {
    grid-area: nav;
    padding: var(--content-padding) var(--side-padding);
    padding-left: 0;
    display: flex;
    align-items: center;
  }

  nav a:not(:last-of-type) {
    /* margin-right: 0.6rem; */
  }

  nav a {
    font-size: 1.2rem;
    color: var(--muted);
    transition: 0.2s color;
    font-weight: 400;
  }

  nav a {
    background: var(--accent-muted);
    border-color: var(--accent-muted);
    color: var(--accent);
    transition: 0.3s color, 0.3s background-color, 0.3s border-color;
  }

  nav a:hover, nav a:focus {
    color: var(--on-accent) !important;
    background-color: var(--accent);
    border-color: var(--accent);
  }

  nav a.active {
    /* pointer-events: none; */
    color: var(--text);
    font-weight: 700 !important;
  }

  .fullwidth {
    grid-area: content;
    padding: var(--content-padding) var(--side-padding);
  }

  footer {
    display: flex;
    grid-area: footer;
    border-top: 1px solid var(--border-subtle);
    width: 100%;
    padding: var(--content-padding) var(--side-padding);
  }

  footer small {
    color: var(--muted);
    font-size: 0.9rem;
  }

  footer small a {
    color: var(--muted);
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: var(--border-subtle);
  }
  .name {
    color: var(--accent);
    font-size: 2rem;
    font-weight: bold;
    line-height: 0.9;
  }

  header a span {
    transition: 0.3s background-color, 0.3s color, 0.3s padding;
    display: inline-block
  }

  header a:hover .name, header a:focus .name {
    background-color: var(--accent);
    /* border-radius: 3px; */
    color: var(--background) !important;
    text-decoration: none !important;
    padding: 0.3rem 0.4rem;
  }

  header a:hover .under-name, header a:focus .under-name {
    background-color: var(--accent-muted);
    /* border-radius: 3px; */
    color: var(--accent) !important;
    text-decoration: none !important;
    padding: 0.2rem 0.6rem 0.4rem;
  }

  header .under-name {
    line-height: 1.2;
  }

  header a:hover, header a:focus {
    text-decoration: none;
  }

  @media screen and (max-width: 580px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr auto;
      grid-template-areas: "header" "nav" "content" "footer";
      height: 100%;
    }

    nav {
      /* padding-left: var(--side-padding); */
      padding-top: 0;
      padding-bottom: 0;
      padding: 0;
    }

    nav a {
      margin-left: var(--side-padding);
    }

    header {
      /* align-items: center; */
      padding-right: var(--side-padding);
    }

    header a {
      /* text-align: center; */
    }
  }
</style>

<main class="grid">
  <header>
    <a href={$url('/')}> <span class="name">Goran Alković</span><br><span class="under-name">Designer & developer</span></a>
  </header>

  <nav>
    <!-- <a href={$url('/')} class:active={$isActive('/index')}>Home</a> -->
    <!-- <a href={$url('/cv')} class:active={$isActive('/cv')}>CV</a>
    <a
      href={$url('/projects')}
      class:active={$isActive('/projects')}>Projects</a>
    <a href={$url('/work')} class:active={$isActive('/work')}>Work</a> -->

    <a class="button" href="mailto:contact@goranalkovic.com">Contact me</a>
  </nav>

  <div class="fullwidth" bind:offsetWidth={$width}>
    <slot decorator={TestTransition} scoped={{ width }} />
  </div>

  <footer>
    <p>
      Copyright Goran Alković, 2020
      <br />
      <small>Made with
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer">Svelte</a>, hosted on
        <a
          href="https://netlify.com"
          rel="noreferrer"
          target="_blank">Netlify</a></small>
    </p>
  </footer>
</main>

<!-- routify:options bundle=true -->
