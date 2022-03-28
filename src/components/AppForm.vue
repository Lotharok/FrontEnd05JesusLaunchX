<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-3">
      <label for="name" class="form-label">Nombre</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder=""
        v-model="order.name"
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
        v-model="order.mail"
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
        v-model="order.phone"
        required
      />
      <div class="invalid-feedback">Obligatorio.</div>
    </div>
    <div class="col-md-3"></div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <label for="description" class="form-label">Descripcion del pastel</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        v-model="order.detail"
      ></textarea>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-sm-6">
      <button
        class="btn btn-primary"
        type="submit"
        @click.stop.prevent="submit()"
      >
        Pedir
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  props: {},
  data() {
    return {
      order: {
        id: 0,
        name: "",
        phone: "",
        detail: "",
        mail: "",
      },
    };
  },
  methods: {
    submit() {
      this.order.id = this.$store.state.lastId + 1;
      this.$store.dispatch("createOrder", this.order);
      this.$router.push("/thank");
    },
  },
};
</script>
