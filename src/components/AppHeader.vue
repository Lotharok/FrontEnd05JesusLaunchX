<template>
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
    <img width="90" style="display: block;
    margin-left: auto;
    margin-right: auto;" src="https://i.postimg.cc/XNDtz2yq/Astro.png" alt="Astronauta" >
  </a>

  <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
    <li><a href="/gallery" class="nav-link px-2 link-dark">Pasteles</a></li>
    <li><a href="/shop" class="nav-link px-2 link-dark">Ordena</a></li>
  </ul>

  <div class="col-md-3 text-end">
    <a href="/orders" class="btn btn-outline-primary me-2">Login</a>
  </div>
</header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
  }
}
</script>