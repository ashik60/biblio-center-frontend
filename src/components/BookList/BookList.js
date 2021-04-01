import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import BookCard from "../BookCard/BookCard";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://mighty-badlands-60955.herokuapp.com/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {!books.length && (
                <div className="text-center mt-5 bg-white">
                    <Spinner animation="grow" variant="success" />
                </div>
            )}

            {books.length && (
                <div className="home pb-3">
                    <div className=" container pt-3">
                        <div className="d-flex flex-wrap justify-content-center">
                            {books.map((book) => (
                                <BookCard key={book._id} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookList;
