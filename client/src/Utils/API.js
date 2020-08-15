import axios from "axios";

export default {
  getAllProducts: function () {
    return axios.get("/api/products");
  },
  addToCart: function (productData) {
    return axios.post("/api/cart", productData);
  },
  removeFromCart: function (id) {
    return axios.delete(`/api/cart/${id}`);
  },
  updateCart: function (id, productData) {
    return axios.put(`/api/cart/${id}/`, productData);
  },
  getCart: function () {
    return axios.get(`/api/cart/`);
  },

  //Stripe Test Api
};
// Publishable Stripe APi
let key =
  "pk_test_51HGURZGzoftg3io4VGUKJVzorfK9YjVlhvB27PnfjkCvS27xzsOTWnBoOFzrxppVqFCz5HUUOifCq0uSqA6LGF0R00iTxD8krG";
