<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://i.postimg.cc/vBdGcGs4/Astronaut-Sweet-Bakery.png"
          class="d-block w-100"
          alt="Universo"
        />
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Pasteles de otro mundo!!</h1>
            <p><a class="btn btn-lg btn-primary" href="#">Arma el tuyo</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://files.nolocreocdn.com/wp-content/uploads/2020/09/098f38f08dfd53f572205ddfad04246c.png"
          class="d-block w-100"
          alt="Universo"
        />
        <div class="container">
          <div class="carousel-caption">
            <h1>Deliciosos momentos.</h1>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://px.cdn.reduno.com.bo/reduno/122018/1544499891055.webp?cw=770&ch=440&extw=jpg"
          class="d-block w-100"
          alt="Universo"
        />
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Sabores espaciales.</h1>
            <p>Para ti.</p>
            <p>
              <a class="btn btn-lg btn-primary" href="/gallery">Exploralos</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container marketing">
    <div class="row">
      <div class="col-lg-4" v-for="item in items" :key="item.name">
        <img width="140" height="140" v-bind:src="item.img" />
        <h2>{{ item.name }}</h2>
        <p>
          <a class="btn btn-secondary" href="#">{{ item.button }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      items: [
        {
          img: "https://s1.eestatic.com/2015/03/03/cocinillas/cocinillas_15258554_115891984_605x610.jpg",
          name: "Pastel Planeta",
          description: "",
          button: "Ordenalo",
        },
        {
          img: "https://static4.todobonito.com/m/2016/12/2028e9f20ff6a774b3881d5a96ea370a.jpg",
          name: "Pastel Galaxia",
          description: "",
          button: "Ordenalo",
        },
        {
          img: "https://pbs.twimg.com/media/DhotX0DUcAElFAu.jpg",
          name: "Dona Universo",
          description: "",
          button: "Ordenala",
        },
      ]
    };
  },
};
</script>
