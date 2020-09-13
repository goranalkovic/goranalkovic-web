<script>
  import { url, isActive } from "@sveltech/routify";
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
    padding: var(--content-padding) var(--side-padding);
    padding-right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  header h1,
  header span {
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
    margin-right: 0.6rem;
  }

  nav a {
    font-size: 1.2rem;
    color: var(--muted);
    transition: 0.2s color;
    font-weight: 100 !important;
  }

  nav a:hover {
    color: var(--accent);
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
  }
  .name {
    color: var(--accent);
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 740px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      grid-template-areas: "header" "nav" "content" "footer";

      height: 100%;
    }

    nav {
      padding-left: var(--side-padding);
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>

<main class="grid">
  <header>
    <a class="name" href={$url('/')}> Goran Alković </a>
    <span>Designer & developer</span>
  </header>

  <nav>
    <a href={$url('/')} class:active={$isActive('/index')}>Home</a>
    <a href={$url('/cv')} class:active={$isActive('/cv')}>CV</a>
    <a
      href={$url('/projects')}
      class:active={$isActive('/projects')}>Projects</a>
    <a href={$url('/work')} class:active={$isActive('/work')}>Work</a>
  </nav>

  <div class="fullwidth">
    <slot />
  </div>

  <footer>
    <p>
      Copyright Goran Alković, 2020 <br />
      <small>Made with <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer">Svelte</a>, hosted on <a href="https://netlify.com" rel="noreferrer" target="_blank">Netlify</a></small>
    </p>
  </footer>
</main>
