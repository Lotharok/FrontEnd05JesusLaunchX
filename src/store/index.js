import { createStore } from "vuex";

export default createStore({
  state: {
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
    orders: [
      {
        id: 1,
        name: "Juan Perez",
        phone: "9931458745",
        detail: "Pastel de chocolate",
        mail: "juan.perez@gmail.com",
      },
      {
        id: 2,
        name: "Samuel Lopez",
        phone: "6654785441",
        detail: "Vela de 7 años.",
        mail: "samuel.lopez@gmail.com",
      },
      {
        id: 3,
        name: "Laura Martinez",
        phone: "5568745844",
        detail: "Pastel napolitano",
        mail: "laura.martinez@gmail.com",
      },
    ],
    lastId: 3,
  },
  getters: {},
  mutations: {
    addOrder(state, order) {
      state.orders.push(order);
    },
    increaseId(state) {
      state.lastId ++;
    }
  },
  actions: {
    async createOrder({ commit }, order) {
      commit("increaseId");
      commit("addOrder", order);
    },
  },
  modules: {},
});
