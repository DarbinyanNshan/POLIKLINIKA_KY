import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AboutContent } from "../../components/aboutContent";

export const About = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="about">
        <div className="about-img">
            <div className="about-text">
                <h1>Մեր Մասին</h1>
                <h6 onClick={onClick}>Գլխավոր / </h6>
            </div>
        </div>
        <AboutContent/>
    </div>
    )
}


