<script>
  import { url } from "@sveltech/routify";
</script>

<style>
  .huge {
    font-size: 24vw;
    font-weight: 700;
    line-height: 90%;
  }
  .e404 {
    text-align: center;
  }
  .big {
    margin-top: 2rem;
  }
</style>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">
    Page not found. <br />
    <br />
    <a href={$url('.')}>Go Home</a>
  </div>
</div>
