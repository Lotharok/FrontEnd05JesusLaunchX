<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
      <img
        width="90"
        style="display: block; margin-left: auto; margin-right: auto"
        src="https://i.postimg.cc/XNDtz2yq/Astro.png"
        alt="Astronauta"
      />
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <router-link class="nav-link px-2 link-secondary" to="/home"
          >Home</router-link
        >
      </li>
      <li>
        <router-link class="nav-link px-2 link-secondary" to="/gallery"
          >Pasteles</router-link
        >
      </li>
      <li>
        <router-link class="nav-link px-2 link-secondary" to="/shop"
          >Ordena</router-link
        >
      </li>
    </ul>

    <div class="col-md-3 text-end">
      <router-link class="btn btn-outline-primary me-2" to="/orders"
        >Login</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {},
};
</script>
