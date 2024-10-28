import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BiMap } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };


        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const onClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="info">
                <div className="contact-data">
                    <p className="map-text"><span><BiMap /></span>ք. Երևան, Հրաչյա Ներսիսյան փ.,7/1</p>
                    <a href="tel:+37410286320"className="phone-number">
                            <span><FiPhoneCall /></span>  (010) 286 320
                        </a>  
                </div>
                <div className="address">
                    <a  className="mail" href="mailto:poliklinika.yesayan@yerevan.am" >
                        <span><GoMail /></span>poliklinika.yesayan@yerevan.am
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100037771209404" className="facebook"><FaFacebookF /></a>

                </div>
            </div>
            <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className="logo" onClick={onClick}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isOpen && (
                        <div className="close-icon" onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </div>
                    )}
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Գլխավոր</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>Մեր մասին</NavLink>
                    <NavLink to="/services" onClick={() => setIsOpen(false)}>Ծառայություններ</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Կապ</NavLink>
                </div>
                {!isOpen && (
                    <div className="new-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </>
    );
};
