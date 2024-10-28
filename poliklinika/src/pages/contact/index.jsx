import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ContactContent } from "../../components/contactContent";



export const ContactUs = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <>
          <div className="contact">
            <div className="contact-img">
                <div className="contact-text">
                    <h1>Կապ</h1>
                    <h6 onClick={onClick}>Գլխավոր / </h6>
                </div>
            </div>
        </div>
        <ContactContent/>
      </>
    )
}


