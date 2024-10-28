import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png"

import { FaFacebookF } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";



export const Footer = () => {
    const navigate = useNavigate();
    const onNavigate = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="footer">
                <div className="footer1">
                    <img src={logo} alt="" />
                    <p>Մեր առաջնահերթությունը ձեր առողջությունն է</p>
                    <a href="https://www.facebook.com/profile.php?id=100037771209404"><FaFacebookF /></a>
                </div>
                <div className="footer2">
                    <h3>Մեր Հասցեն</h3>
                    <p><span><BiMap /></span>ք. Երևան, Հրաչյա Ներսիսյան փ.,7/1</p>
                    <a href="mailto:poliklinika.yesayan@yerevan.am" className="footer-mail">
                        <span><GoMail /></span>poliklinika.yesayan@yerevan.am
                    </a>
                    <p>
                        <a href="tel:+37410286320" className="footer-number">
                            <span><FiPhoneCall /></span>  (010) 286 320
                        </a>
                    </p>
                </div>
                <div className="footer3">
                    <h3>Աշխատանքային ժամերը</h3>
                    <p>Երկ - Ուրբ - <span>9:00 - 18:00</span></p>
                    <p>Շաբաթ <span>10:00 - 14:00</span></p>
                    <p>Կիրակի - <span>Փակ</span></p>
                </div>
            </div>
            <div className="footer_text">
                <p> Բոլոր իրավունքները պաշտպանված են։  Ստեղծված է <span>High-Tech Service-ի </span>կողմից:</p>

            </div>
        </>
    );
};
