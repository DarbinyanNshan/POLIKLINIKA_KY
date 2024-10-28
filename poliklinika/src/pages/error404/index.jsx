import React from "react";
import "./style.css";
import error from "../../assets/images/404-error.jpg"
import { useNavigate } from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="error">
            <img src={error} alt="error" />
            <h2>Oops! It looks like you are lost ...!</h2>
            <button onClick={onClick}>Go back to Home</button>
        </div>
    )
}


