import React from "react";
import AddBook from "../AddBook/AddBook";
import BookList from "../BookList/BookList";

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <BookList></BookList>
            <div className="container">
                <AddBook />
            </div>
        </div>
    );
};

export default Home;
