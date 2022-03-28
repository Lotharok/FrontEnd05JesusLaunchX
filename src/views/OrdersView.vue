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
      <h2>Pedidos</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
              <th scope="col">Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in $store.state.orders" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.mail }}</td>
              <td>{{ item.detail }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "OrdersView",
  components: {},
};
</script>
