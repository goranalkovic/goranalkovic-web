<script>
  import { url, isActive } from "@sveltech/routify";
  import TestTransition from "../components/TestTransition.svelte";
  import Icon from "../components/icon.svelte";
  import { writable } from "svelte/store";
  import TabsTransition from "@sveltech/routify/runtime/decorators/TabsTransition.svelte";
  import { onMount } from "svelte";
  const width = writable();

  let mode = "auto";

  const setDark = (e) => {
    if (e != undefined) e.target.blur();

    mode = "dark";
    document.querySelector("html").classList.add("dark-theme");
  };

  const setLight = (e) => {
    if (e != undefined) e.target.blur();

    mode = "light";
    document.querySelector("html").classList.remove("dark-theme");
  };

  const setAuto = (e) => {
    if (e != undefined) e.target.blur();

    mode = "auto";

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", () => {
      autoSwitchTheme(mediaQuery.matches);
    });

    autoSwitchTheme(mediaQuery.matches);
  };

  const autoSwitchTheme = (matches) => {
    if (matches) document.querySelector("html").classList.add("dark-theme");
    else document.querySelector("html").classList.remove("dark-theme");
  };

  onMount(() => {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      setAuto();
    } else {
      setLight();
      document.querySelector("#autoThemeSwitch").remove();
    }
  });
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "content" "footer";

    height: 100%;
  }

  header {
    grid-area: header;
    padding: calc(var(--content-padding) / 2) var(--side-padding);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .three-way-toggle {
    display: flex;
    border-radius: 10em;
    border: 1px solid var(--border-subtle);
    height: 2.6em;
    transition: 0.3s;

    background: linear-gradient(
      to right,
      var(--c1, var(--background)) 0%,
      var(--c2, var(--background)) 50%,
      var(--c3, var(--background)) 100%
    );
  }

  .three-way-toggle .active {
    color: var(--accent) !important;
    pointer-events: none;
  }

  .light-theme {
    --c3: var(--border-subtle);
  }

  .dark-theme {
    --c1: var(--border-subtle);
  }

  .auto-theme {
    --c2: var(--border-subtle);
  }

  .three-way-toggle button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.6em;
    height: 2.6em;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: var(--muted);
  }

  .three-way-toggle button.muted {
    color: var(--border-subtle);
  }

  .three-way-toggle button:hover,
  .three-way-toggle button:focus {
    color: var(--accent) !important;
  }

  nav {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.85em;
  }

  nav a {
    font-size: 1rem;
    color: var(--muted);
    transition: 0.2s color, 0.2s background-color;
    font-weight: 400;
    margin: 0;
    padding: 0;
    padding: 0.25rem 0.5rem;
    /* background-color: var(--accent-muted); */
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--muted);
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  html.dark-theme nav a {
    border: none;
    border-bottom: 1px solid var(--border-subtle);
  }

  nav a:not(.cta):hover, nav a:not(.cta):focus {
    color: var(--text) !important;
    background-color: var(--background);
    border-bottom-color: var(--accent);
  }

  html.dark-theme nav a:not(.cta):hover,
  html.dark-theme nav a:not(.cta):focus {
    color: var(--text) !important;
    background-color: var(--border-subtle);
    border-bottom-color: var(--accent);
  }

  nav a.cta {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--on-accent);
    transition: 0.3s color, 0.3s background-color, 0.3s border-color;
  }

  html.dark-theme nav a.cta {
    background-color: var(--border-subtle);
    color: var(--accent);
    border: 1px solid var(--border-subtle);
    /* border-bottom: 1px solid var(--accent); */
  }

  nav a:not(.cta).active {
    border-bottom: 1px solid var(--accent);
  }

  nav a.cta:hover,
  nav a.cta:focus {
    color: var(--accent) !important;
    background-color: var(--on-accent);
    border-color: var(--on-accent);
  }



  html.dark-theme nav a.cta:hover, html.dark-theme nav a.cta:focus {
    background-color: var(--accent) !important;
    border-color: var(--accent) !important;
    color: var(--on-accent) !important
  }

  /* nav a.active {
    color: var(--text);
    font-weight: 700 !important;
  } */

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
    justify-content: space-between;
    align-items: center;
    transition: 0.3s border-color;
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
    transition: 0.3s text-decoration-color, 0.2s color;
  }
  .name {
    color: var(--accent);
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1;
  }

  header a span {
    transition: 0.3s background-color, 0.3s color, 0.3s padding;
    display: inline-block;
  }

  header a:hover .name,
  header a:focus .name {
    background-color: var(--accent);
    /* border-radius: 3px; */
    color: var(--background) !important;
    text-decoration: none !important;
    /* padding: 0.3rem 0.4rem; */
  }

  header a:hover .under-name,
  header a:focus .under-name {
    /* background-color: var(--accent-muted); */
    /* border-radius: 3px; */
    color: var(--accent) !important;
    text-decoration: none !important;
    /* padding: 0.2rem 0.6rem 0.4rem; */
  }

  header .under-name {
    line-height: 1.2;
    transform: translateY(-4px);
  }

  header a:hover,
  header a:focus {
    text-decoration: none;
  }

  @media screen and (max-width: 670px) {
    nav {
      /* padding-left: var(--side-padding); */
      /* padding-top: 0;
      padding-bottom: 0;
      padding: 0; */
      /* padding: 0; */
      width: 100%;
      justify-content: center;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    header {
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
    }
  }
  @media screen and (max-width: 580px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: "header" "content" "footer";
      height: 100%;
    }

    footer {
      flex-direction: column;
      gap: 1em;
    }
  }
</style>

<main class="grid">
  <header>
    <a
      onclick="this.blur()"
      style="transform: translateY(4px)"
      href={$url('/')}>
      <span class="name">Goran Alković</span>

         
      <br /><span
      class="under-name">Designer & developer</span>
      </a>

    <nav>
      <!-- <a href={$url('/')} class:active={$isActive('/index')}>Home</a> -->
      <a onclick="this.blur()"  href={$url('/cv')} class:active={$isActive('/cv')}>CV</a>
      <a onclick="this.blur()" 
        href={$url('/projects')}
        class:active={$isActive('/projects')}>Projects</a>
      <a onclick="this.blur()"  href={$url('/work')} class:active={$isActive('/work')}>Work</a> 

   
      <a
        onclick="this.blur()"
        class="cta"
        href="mailto:contact@goranalkovic.com">
        <Icon
          glyph="email"
          style="opacity: 0.85; margin-right: 0px;"
          width="24"
          height="24" />
        <!-- Contact me -->
      </a>
    </nav>
  </header>

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

    <div
      class="three-way-toggle"
      class:dark-theme={mode == 'dark'}
      class:light-theme={mode == 'light'}
      class:auto-theme={mode == 'auto'}>
      <button class:active={mode == 'dark'} on:click={setDark}><Icon
          glyph="moon" /></button>
      <button
        id="autoThemeSwitch"
        class="muted"
        class:active={mode == 'auto'}
        style="width: 2em"
        on:click={setAuto}><Icon glyph="sync" width="18" height="18" /></button>
      <button class:active={mode == 'light'} on:click={setLight}><Icon
          glyph="sun" /></button>
    </div>
  </footer>
</main>

<!-- routify:options bundle=true -->
