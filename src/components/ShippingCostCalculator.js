import React, { useEffect, useState } from "react";
import { data } from "../fakeData";
import { calculateShippingCosts } from "../utils/calculateShippingCosts";

export default function ShippingCostCalculator() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [dest, setDest] = useState("US");

  console.log(dest);
  console.log(cart);
  console.log(totalPrice);
  useEffect(() => {
    if (cart.length && dest) {
      setTotalPrice(calculateShippingCosts(cart, dest));
    }
  }, [cart, dest]);

  const handleAddItem = (item) => {
    setCart(
      (prev) => [...prev, { ...item, quantity: 1 }]
      // prev.map((product) => {
      //   if (product.name === item.name)
      //     return { ...product, quantity: product.quantity + 1 };
      //   return product;
      // })
    );
  };

  return (
    <div>
      <div className="totalPrice">
        <h2>Total Price: {totalPrice && totalPrice}</h2>
      </div>
      <div className="mb-2">
        <label>Destination</label>
        <select value={dest} onChange={(e) => setDest(e.target.value)}>
          <option value="US">US</option>
          <option value="CA">CA</option>
          <option value="EU">EU</option>
          <option value="ASIA">ASIA</option>
        </select>
      </div>
      <table className="table" border="1" align="center">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Khối lượng</th>
            <th scope="col">Giá</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={product.name}>
              <th>{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.weight}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className="card-btn"
                  onClick={() => handleAddItem(product)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul class="list-group">
        {cart?.map((item) => (
          <li class="list-group-item">{`${item.name} - ${item.weight}kg - ${item.price}$ - SL: ${item.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}
