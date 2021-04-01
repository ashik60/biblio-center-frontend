import React from "react";
import Header from "../Header/Header";

const NoMatch = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="text-warning text-center p-5">
                <h1>Page not found!</h1>
            </div>
        </div>
    );
};

export default NoMatch;
