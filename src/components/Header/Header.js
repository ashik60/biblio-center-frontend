import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 ">
                <h5 className="my-0 mr-md-auto h2  font-weight-normal">Biblio Center</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-2 text-white">
                        Home
                    </Link>
                    <Link to="/orders" className="p-2 text-white">
                        Orders
                    </Link>
                    <Link to="/admin" className="p-2 text-white">
                        Admin
                    </Link>
                    <Link to="/" className="p-2 text-white">
                        Deals
                    </Link>
                    {loggedInUser.name ? (
                        <Link className="btn btn-outline-light">{loggedInUser.name}</Link>
                    ) : (
                        <Link to="/login" className="btn btn-outline-light">
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
