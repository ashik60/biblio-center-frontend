import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                console.log(loggedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log("ERROR:", errorMessage);
            });
    };

    return (
        <div className="">
            <Header></Header>
            <div className="mt-5">
                <div
                    style={{
                        width: "28rem",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "120px",
                        paddingBottom: "120px",
                    }}
                    className="card mx-auto text-center"
                >
                    <div>
                        <h4 className="mb-5">Login</h4>
                        <button
                            onClick={signInWithGoogle}
                            style={{ borderRadius: "50px" }}
                            className="btn btn-outline-dark btn-block text-left"
                        >
                            {" "}
                            <img
                                style={{ marginRight: "85px" }}
                                height="30px"
                                src={"https://i.ibb.co/CPGpPDg/google.png"}
                                alt="GOOGLE"
                            ></img>
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
