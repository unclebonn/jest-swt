import React, { useEffect, useState } from "react";
import { data } from "../fakeData";
import { calculateShippingCosts } from "../utils/calculateShippingCosts";

export default function ShippingCostCalculator() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [dest, setDest] = useState("JP");

  console.log(dest);
  console.log(cart);
  console.log(totalPrice);
  useEffect(() => {
    if (cart.length && dest) {
      setTotalPrice(calculateShippingCosts(cart, dest));
    }
  }, [cart, dest]);

  const handleAddItem = (item) => {
    setCart((prev) => {
      let add = false;
      const incArr = prev.map((product) => {
        if (product.name === item.name) {
          add = true;
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      if (add) return incArr;
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <div>
      <div className="totalPrice">
        <h2>Total Price: {totalPrice && totalPrice}</h2>
      </div>
      <div className="mb-2">
        <label>Destination</label>
        <select value={dest} onChange={(e) => setDest(e.target.value)}>
          <option value="JP">Japan</option>
          <option value="TW">Taiwan</option>
          <option value="KR">South Korea</option>
          <option value="TH">Thailand</option>
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
