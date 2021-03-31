import axios from "axios";
import React, { useState } from "react";

const AddBook = () => {
    const [newBook, setnewBook] = useState({
        title: "",
        author: "",
        imgURL: "",
    });
    const [imageURL, setImageURL] = useState(null);

    const handleBlur = (e) => {
        const name = e.target.name;
        const newItem = { ...newBook };
        newItem[name] = e.target.value;
        setnewBook(newItem);
    };

    const handleImageUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "562ec4a82955b6ffb86f48b59bc647db");
        imageData.append("image", e.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                const newItem = { ...newBook };
                newItem["imgURL"] = imageURL;
                setnewBook(newItem);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleAddBook = (e) => {
        fetch("http://localhost:5055/addBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        });
        e.preventDefault();
    };

    return (
        <div>
            {/* <Link to="/" className="btn btn-primary">
                Go Home
            </Link> */}
            <h4>Add Book</h4>
            <form onSubmit={handleAddBook}>
                <div className="row mb-5">
                    <div className="col">
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Book Name"
                            type="text"
                            name="title"
                            id="title"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            type="text"
                            placeholder="Author Name"
                            name="author"
                            id="eventDate"
                        />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Price"
                            type="number"
                            name="price"
                            id="title"
                        />
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    onChange={handleImageUpload}
                                    className="custom-file-input"
                                    id="inputGroupFile03"
                                    aria-describedby="inputGroupFileAddon03"
                                    name=""
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile03">
                                    Choose file
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary float-right">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddBook;
