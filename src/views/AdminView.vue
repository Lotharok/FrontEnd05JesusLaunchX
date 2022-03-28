<template>
  <div class="row">
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/orders">
              <span data-feather="file"></span>
              Ordenes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/admin">
              <span data-feather="shopping-cart"></span>
              Productos
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h2>Inventario</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Nombre</th>
              <th scope="col">Tiopo</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in materials" :key="item.name">
              <td><img width="40" height="40" v-bind:src="item.img" /></td>
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  components: {},
  data() {
    return {
      materials: [
        {
          img: "https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/durazno-3l-rebanada.jpg",
          name: "Vainilla",
          type: "Sabor",
          amount: 100,
        },
        {
          img: "https://www.pasteleriasquemen.com/wp-content/uploads/2019/11/tenta-fres-rebanada-247x296.jpg",
          name: "Fresa",
          type: "Sabor",
          amount: 5,
        },
        {
          img: "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/4922/fancy/r_4922_1550828876.jpg",
          name: "Chocolate",
          type: "Sabor",
          amount: 0,
        },
        {
          img: "https://st.depositphotos.com/1020804/2157/i/600/depositphotos_21579613-stock-photo-strawberries-with-leaves.jpg",
          name: "Fresas",
          type: "Adorno",
          amount: 0,
        },
        {
          img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00068063613650L.jpg",
          name: "Velas",
          type: "Adorno",
          amount: 5,
        },
        {
          img: "https://us.123rf.com/450wm/viktarmalyshchyts/viktarmalyshchyts1112/viktarmalyshchyts111200072/11701896-duraznos.jpg?ver=6",
          name: "Duraznos",
          type: "Adorno",
          amount: 50,
        },
      ],
    };
  },
};
</script>
