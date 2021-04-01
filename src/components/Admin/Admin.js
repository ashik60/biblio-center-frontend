import React, { useState } from "react";
import AddBook from "../AddBook/AddBook";
import ManageBook from "../ManageBook/ManageBook";

const Admin = () => {
    const [showAddBook, setShowAddBook] = useState(true);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 pt-3 pl-5 vh-100 bg-dark text-white">
                    <h1 className="mb-5">Biblio House</h1>
                    <p onClick={() => setShowAddBook(false)} style={{ cursor: "pointer" }}>
                        <img
                            height="30px"
                            style={{ cursor: "pointer" }}
                            src={"https://i.ibb.co/PZVhNG2/grid-1.png"}
                            alt="Delete"
                            className="mr-2"
                        ></img>
                        Manage Book
                    </p>
                    <p onClick={() => setShowAddBook(true)} style={{ cursor: "pointer" }}>
                        <img
                            height="30px"
                            style={{ cursor: "pointer" }}
                            src={"https://i.ibb.co/V2Fk6ng/plus-1.png"}
                            alt="Delete"
                            className="mr-2"
                        ></img>
                        Add Book
                    </p>
                    <p>
                        <img
                            height="30px"
                            style={{ cursor: "pointer" }}
                            src={"https://i.ibb.co/wsMnPRx/edit-1.png"}
                            alt="Delete"
                            className="mr-2"
                        ></img>
                        Edit Book
                    </p>
                </div>
                <div className="col-md-9">{showAddBook ? <AddBook /> : <ManageBook />}</div>
            </div>
        </div>
    );
};

export default Admin;
