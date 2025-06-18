// src/components/BillCalculator.js
import React, { useState } from 'react';

const BillCalculator = () => {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [pname, setPname] = useState('');
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const addProduct = () => {
        const totalPrice = qty * price;
        const newProduct = { id, pname, qty, price, totalPrice };
        setProducts([...products, newProduct]);
        setTotal(total + totalPrice);
        resetForm();
    };

    const resetForm = () => {
        setId('');
        setPname('');
        setQty(0);
        setPrice(0);
    };

    const discount = total * 0.02;
    const subtotal = total - discount;
    const tax = subtotal * 0.24; // SGST + CGST (12% each)
    const finalAmount = subtotal + tax;

    return (
        <div style={{ padding: '20px' }}>
            <h3>Add Product</h3>
            <div>
                <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                <input placeholder="Name" value={pname} onChange={(e) => setPname(e.target.value)} />
                <input type="number" placeholder="Quantity" value={qty} onChange={(e) => setQty(parseInt(e.target.value))} />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
                <button onClick={addProduct}>Add</button>
            </div>

            <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, i) => (
                        <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.pname}</td>
                            <td>{p.qty}</td>
                            <td>{p.price.toFixed(2)}</td>
                            <td>{p.totalPrice.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <p>Total Amount: ₹{total.toFixed(2)}</p>
                <p>Discount (2%): ₹{discount.toFixed(2)}</p>
                <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                <p>SGST (12%): ₹{(tax / 2).toFixed(2)}</p>
                <p>CGST (12%): ₹{(tax / 2).toFixed(2)}</p>
                <h3>Total Payable: ₹{finalAmount.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default BillCalculator;