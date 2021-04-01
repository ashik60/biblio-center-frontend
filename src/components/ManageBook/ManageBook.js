import React, { useEffect, useState } from "react";

const ManageBook = () => {
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

    const handleDelete = (id) => {
        fetch("https://mighty-badlands-60955.herokuapp.com/deleteBook/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    fetch("https://mighty-badlands-60955.herokuapp.com/books")
                        .then((res) => res.json())
                        .then((data) => {
                            setBooks(data);
                            console.log(data);
                        })
                        .catch((err) => console.log(err));
                }
            });
    };

    return (
        <div>
            <h1 className="mt-3">Manage Book</h1>
            <div className="shadow p-2 rounded">
                <table className="table  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="h6">
                        {books.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>${book.price}</td>
                                <td onClick={() => handleDelete(book._id)}>
                                    <img
                                        height="30px"
                                        style={{ cursor: "pointer" }}
                                        src={"https://i.ibb.co/wN1K49B/Group-33150.png"}
                                        alt="Delete"
                                    ></img>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBook;
