<template>
  <div class="jumbotron text-center">
    <h1 class="display-3">Gracias!</h1>
    <p class="lead">Estamos procesando tu orden.</p>
    <hr />
    <p class="lead">
      <router-link to="/home" class="btn btn-primary btn-sm" role="button">
        Regresar a la pagina principal
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "ThankView",
  components: {},
};
</script>
