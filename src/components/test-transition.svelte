<script>
  import BaseTransition from "@sveltech/routify/runtime/decorators/BaseTransition.svelte";

  import { scale, fly, fade } from "svelte/transition";

  let configs = [
    {
      // New and old route are identical, do nothing
      condition: ({ routes }) => routes[0] === routes[1],
      transition: () => {},
    },

    {
      // Main-level items
      condition: ({ routes }) => {
        if (
          (routes[0].file == "index.svelte" || routes[0].file == "cv.svelte") &&
          (routes[1].file == "index.svelte" || routes[1].file == "cv.svelte")
        ) {
          return true;
        }
      },
      transition: fly,
      inParams: { x: 80, duration: 250 },
      outParams: { x: -80, duration: 250 },
    },
    {
      // Main-level items to lower level
      condition: ({ routes }) => {
        if (
          routes[0].file == "[id].svelte" &&
          (routes[1].file == "index.svelte" || routes[1].file == "cv.svelte")
        ) {
          return true;
        }
      },
      transition: scale,
      inParams: { start: 0.8 },
      outParams: { start: 1.2 },
    },
    {
      // Lower level to main-level
      condition: ({ routes }) => {
        if (
          routes[1].file == "[id].svelte" &&
          (routes[0].file == "index.svelte" || routes[1].file == "cv.svelte")
        ) {
          return true;
        }
      },
      transition: scale,
      inParams: { start: 1.2 },
      outParams: { start: 0.8 },
    },
    {
      condition: (c) => true,
      transition: fade,
    },
  ];
</script>

<BaseTransition {configs}>
  <slot />
</BaseTransition>
