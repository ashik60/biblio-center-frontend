import React, { useState } from "react";
import AddBook from "../AddBook/AddBook";
import ManageBook from "../ManageBook/ManageBook";

const Admin = () => {
    const [showAddBook, setShowAddBook] = useState(true);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 pt-3 vh-100 bg-dark text-white">
                    <p onClick={() => setShowAddBook(false)} style={{ cursor: "pointer" }}>
                        Manage Book
                    </p>
                    <p onClick={() => setShowAddBook(true)} style={{ cursor: "pointer" }}>
                        Add Book
                    </p>
                    <p>Edit Book</p>
                </div>
                <div className="col-md-9">{showAddBook ? <AddBook /> : <ManageBook />}</div>
            </div>
        </div>
    );
};

export default Admin;
