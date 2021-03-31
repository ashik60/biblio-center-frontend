import React from "react";

const BookCard = (props) => {
    const { title, author, imgURL, _id, price } = props.book;

    return (
        <div className="card background m-2 text-center" style={{ width: "15rem" }}>
            <img
                src={imgURL}
                className="card-img-top mx-auto img-fluid d-block mt-3"
                style={{ width: "8rem" }}
                alt="..."
            ></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{author}</p>
                <h4 className="card-text float-left">${price}</h4>
                <button className="btn btn-primary float-right">Buy Now</button>

                {/* <Link to={"/teamdetails/" + _id} className="btn btn-success">
                    Explore
                </Link> */}
            </div>
        </div>
    );
};

export default BookCard;
