<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Selecciona el sabor de tu pastel</h1>
  </div>

  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col" v-for="item in cakes" :key="item.name">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <input
            class="form-check-input"
            type="checkbox"
            name="cakeFlavor"
            id="{{ 'flavor' + i }}"
            value="{{ item.name }}"
          />
          <h4 class="my-0 fw-normal">{{ item.name }}</h4>
        </div>
        <div class="card-body">
          <img width="140" height="140" v-bind:src="item.img" />
        </div>
        <h1 class="card-title pricing-card-title">
          ${{ item.price }}<small class="text-muted fw-light"></small>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFlavor",
  props: {},
  data() {
    return {
      cakes: [
        {
          img: "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4922/fancy/r_4922_1550828876.jpg",
          name: "Chocolate",
          description: "",
          price: 70,
        },
        {
          img: "https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/durazno-3l-rebanada.jpg",
          name: "Vainilla",
          description: "",
          price: 50,
        },
        {
          img: "https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/tenta-fres-rebanada-247x296.jpg",
          name: "Fresa",
          description: "",
          price: 60,
        },
      ],
    };
  },
};
</script>
