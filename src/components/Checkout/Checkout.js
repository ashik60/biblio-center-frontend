import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const Checkout = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { title, author, price } = book;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const quantity = 1;
    const [orderPlaced, setOrderPlaced] = useState(false);

    axios
        .get("https://mighty-badlands-60955.herokuapp.com/books/" + id)
        .then((res) => setBook(res.data[0]))
        .catch((err) => console.log(err));

    const handleCheckOut = () => {
        axios
            .post("https://mighty-badlands-60955.herokuapp.com/postOrder", {
                title: title,
                author: author,
                quantity: quantity,
                price: price,
                date: new Date(),
                email: loggedInUser.email,
            })
            .then(function (response) {
                console.log(response);
                setOrderPlaced(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1>Orders</h1>
                <div className="shadow p-2 rounded">
                    <table className="table  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Description</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody className="h6">
                            <tr>
                                <td>{title}</td>
                                <td>{quantity}</td>
                                <td>${price}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {orderPlaced && (
                    <div className="alert alert-success" role="alert">
                        ✓ Order Placed Successfully!
                    </div>
                )}
                <div className="text-right">
                    <button onClick={handleCheckOut} className=" mt-3 btn btn-primary">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
