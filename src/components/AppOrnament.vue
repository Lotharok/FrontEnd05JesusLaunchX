<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Selecciona tus adornor</h1>
  </div>

  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col" v-for="item of ornaments" :key="item.name">
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
  name: "AppOrnament",
  props: {},
  data() {
    return {
      ornaments: [
        {
          img: "https://st.depositphotos.com/1020804/2157/i/600/depositphotos_21579613-stock-photo-strawberries-with-leaves.jpg",
          name: "Fresas",
          description: "",
          price: 10,
        },
        {
          img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00068063613650L.jpg",
          name: "Vela",
          description: "",
          price: 5,
        },
        {
          img: "https://us.123rf.com/450wm/viktarmalyshchyts/viktarmalyshchyts1112/viktarmalyshchyts111200072/11701896-duraznos.jpg?ver=6",
          name: "Duraznos",
          description: "",
          price: 15,
        },
      ],
    };
  },
};
</script>
