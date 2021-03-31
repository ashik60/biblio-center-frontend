import React, { useEffect, useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/orders")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <h1>Your Orders: {orders.length} </h1>
            <div className="shadow p-2 rounded">
                <table className="table  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody className="h6">
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order.date.slice(0, 10)}</td>
                                <td>{order.email}</td>
                                <td>{order.title}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
