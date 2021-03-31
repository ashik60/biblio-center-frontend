import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";

const Checkout = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { title, author, price } = book;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const quantity = 1;

    axios
        .get("http://localhost:5055/books/" + id)
        .then((res) => setBook(res.data[0]))
        .catch((err) => console.log(err));

    const handleCheckOut = () => {
        axios
            .post("http://localhost:5055/postOrder", {
                title: title,
                author: author,
                quantity: quantity,
                price: price,
                date: new Date(),
                email: loggedInUser.email,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
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

            <Link
                to={"/orders"}
                onClick={handleCheckOut}
                className="float-right mt-3 btn btn-primary"
            >
                Checkout
            </Link>
        </div>
    );
};

export default Checkout;
