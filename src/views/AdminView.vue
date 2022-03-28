<template>
  <div class="row">
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/orders" class="nav-link">
              <span data-feather="file"></span>
              Ordenes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">
              <span data-feather="file"></span>
              Productos
            </router-link>
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
            <tr v-for="item in $store.state.materials" :key="item.name">
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
};
</script>
