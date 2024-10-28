import React from "react";
import "./style.css";
import { ServiceContent } from "../../components/serviceContent";
import { useNavigate } from "react-router-dom";

export const Service = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
    <>
      <div className="services">
            <div className="services-img">
                <div className="services-text">
                    <h1>Ծառայություններ</h1>
                    <h6 onClick={onClick}>Գլխավոր / </h6>
                </div>
            </div>
        </div>
        <ServiceContent/>
    </>
    )
}


