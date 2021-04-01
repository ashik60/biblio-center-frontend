import axios from "axios";
import React, { useState } from "react";

const AddBook = () => {
    const [newBook, setnewBook] = useState({
        title: "",
        author: "",
        imgURL: "",
    });

    // const [uploadingDivStyle, setUploadingStyle] = useState({
    //     display: "none",
    // });
    // const [imageURL, setImageURL] = useState(null);

    const handleBlur = (e) => {
        const name = e.target.name;
        const newItem = { ...newBook };
        newItem[name] = e.target.value;
        setnewBook(newItem);
    };

    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "562ec4a82955b6ffb86f48b59bc647db");
        imageData.append("image", e.target.files[0]);
        // setUploadingStyle({ display: "block" });

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then((response) => response.data.data.display_url)
            .then((response) => {
                console.log(response);
                // setImageURL(response);
                // let imageURL = response;
                const newItem = { ...newBook };
                newItem.imgURL = response;
                setnewBook(newItem);

                // console.log(newItem);
                // console.log(newBook);
                alert("Image Uploaded successfully.");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleAddBook = (e) => {
        fetch("https://mighty-badlands-60955.herokuapp.com/addBook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        });
        e.preventDefault();
        console.log(newBook);
        // setnewBook({
        //     title: "",
        //     author: "",
        //     imgURL: "",
        // });
    };

    return (
        <div>
            {/* <Header></Header> */}
            <h1 className="mt-3">Add Book</h1>
            <form className="p-5  mt-5 bg-white shadow-lg" onSubmit={handleAddBook}>
                <div className="row mb-5">
                    <div className="col">
                        <label className="h5">Book Name</label>
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Enter Name"
                            type="text"
                            name="title"
                            required
                        />
                    </div>
                    <div className="col">
                        <label className="h5">Author Name</label>
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            type="text"
                            placeholder="Enter Name"
                            name="author"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="h5">Price</label>
                        <input
                            onBlur={handleBlur}
                            className="form-control"
                            placeholder="Enter Price"
                            type="number"
                            name="price"
                        />
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label className="h5">Add Book Cover Photo</label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="form-control-file "
                                id="exampleFormControlFile1"
                            ></input>
                        </div>
                        {/* <div style={uploadingDivStyle}>
                            {newBook.imgURL !== null ? (
                                <p className="alert alert-success">Image Uploaded successfully</p>
                            ) : (
                                <p className="alert alert-info">Uploading Image</p>
                            )}
                        </div> */}
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
