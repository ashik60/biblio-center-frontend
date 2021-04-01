import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
    const { title, author, imgURL, _id, price } = props.book;

    return (
        <div className="card background m-2 text-center" style={{ width: "15rem" }}>
            <img
                src={imgURL}
                className="card-img-top mx-auto img-fluid d-block mt-3"
                style={{ width: "8rem", height: "10rem" }}
                alt="..."
            ></img>
            <div className="card-body">
                <h5 className="card-title text-left">{title}</h5>
                <p className="card-text text-left">{author}</p>
                <h4 className="card-text color-primary float-left">${price}</h4>
                <Link to={"/checkout/" + _id} className="btn btn-primary float-right">
                    Buy Now
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
