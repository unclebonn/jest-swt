import React, { createContext, useState } from 'react';
import { data } from './data'
import './Cart.css'


export default function Cart() {
    return (
        <div className='cart'>
            <div className='column'>
                <div className='item'>
                    <table className='table' border='1' align='center'>
                        <tr width='50% !important' align='center'>
                            <th>Product</th>
                            <th>Weight</th>
                            <th>Price</th>
                        </tr>
                        {data.map((product) =>
                            <tr align='center' key={product.name}>
                                <td>{product.name}</td>
                                <td>{product.weight}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className='card-btn'>+</button>
                                </td>
                            </tr>
                        )}
                    </table>
                </div>
                


                <div className='destination'>
                    <label>Destination</label>
                    <select>
                        <option value='US'>US</option>
                        <option value='CA'>CA</option>
                        <option value='EU'>EU</option>
                        <option value='ASIA'>ASIA</option>
                    </select>
                </div>
                <div className='totalPrice'>
                    <h2>Total Price: </h2>
                </div>
            </div>
        </div>

    )
}



