<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-3">
      <label for="name" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder=""
        value=""
        required
      />
      <div class="invalid-feedback">Obligatorio.</div>
    </div>

    <div class="col-sm-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="you@example.com"
      />
      <div class="invalid-feedback">Coloca un correo valido.</div>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-md-3">
      <label for="phone" class="form-label">Telefono</label>
      <input
        type="tel"
        class="form-control"
        id="phone"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Obligatorio.</div>
    </div>
    <div class="col-md-3"></div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <label for="description" class="form-label">Descripcion del pastel</label>
      <textarea class="form-control" id="description" rows="3"></textarea>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <button type="submit" class="btn btn-primary">Primary</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  props: {},
};
</script>
