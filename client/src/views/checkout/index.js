import React, { useEffect, useState, useContext } from "react";
import OrderCard from "../../components/OrderCard";
import ItemCart from "../../components/ItemCart";
// import axios from "axios";
import Nav from "../../components/Nav";
import API from "../../Utils/API";
import { CartContext } from "../../CartContex";

function Checkout() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState();
  const [material, setMaterial] = useState();
  const [totalPlusMaterial, setTotalPlusMaterial] = useState();

  function deleteItem(e, item) {
    let id = e.target.id;

    API.removeFromCart(id)
      .then((res) => {
        console.log(res);
        cart.splice(id, 1);
        setCart([...cart]);
      })
      .catch();
  }

  useEffect(() => {
    let data = cart;
    console.log(data, "cart when component mount");
    setItems(cart);
    console.log(items);
    let prices = [];
    let price = data.forEach((item) => {
      let qtyPrice = 1 * item.price;
      prices.push(qtyPrice);
    });
    if (prices.length === 0) {
      setTotal(0);
      setMaterial(0);
      setTotalPlusMaterial(0);
      return;
    } else {
      let material = 5;
      let reducer = (a, b) => a + b;

      setTotal(prices.reduce(reducer));

      let result = prices.reduce(reducer);

      let materialResult = Math.round(result * material) / 100;
      setMaterial(materialResult);

      setTotalPlusMaterial(materialResult + result);
    }
  }, [cart]);

  return (
    <>
      {" "}
      <Nav />
      <div className=" container mt-5 ">
        <div className="row">
          <div className="col">
            <h3>My cart</h3>
          </div>
        </div>

        <div className="row item-cart-container ">
          <div className="col m8">
            {" "}
            <ItemCart items={items} deleteItem={deleteItem} />
          </div>
          <div className="col m4 m-auto s12">
            {" "}
            <OrderCard
              total={total}
              material={material}
              totalPlusMaterial={totalPlusMaterial}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
