import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:5055/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="container pt-3">
                <div className="d-flex flex-wrap justify-content-center">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookList;
