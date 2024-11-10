import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/home/xach.png";
import img2 from "../../assets/images/home/yerevan.png";
import img3 from "../../assets/images/home/kolektiv.jpg"

import { FaGenderless } from "react-icons/fa";
import { ServiceContent } from "../../components/serviceContent";


export const Home = () => {
    const navigate = useNavigate();

    const onAbout = () => {
        navigate('/about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="home">
                <div className="img" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="overlay">
                        <h1>ՄԵՐ ԱՌԱՋՆԱՀԵՐԹՈՒԹՅՈՒՆԸ ՁԵՐ ԱՌՈՂՋՈՒԹՅՈՒՆՆ Է </h1>
                        <button onClick={onAbout} className="home-btn">Մեր Մասին</button>
                    </div>
                </div>
                <img src={img2} alt="2" />
            </div>
            <div className="home-about">
                <div >
                    <h2>
                        Կառլեն Եսայանի անվան պոլիկլինիկա
                    </h2>
                    <p><span><FaGenderless/></span>Հիմնադրվել է 2012 թվականին, Երևանի քաղաքապետի որոշմամբ՝ որպես  իրավաբանական անձ։</p>
                    {/* <p><span><FaGenderless/></span>2012 թվականին Երևանի քաղաքապետի որոշմամբ կլինիկան դարձել է անկախ իրավաբանական անձ։</p> */}
                    <button onClick={onAbout} className="home-btn">Մեր Մասին</button>
                </div>
                    <img src={img3} alt="3" />
            </div>
            <ServiceContent/>
        </>
    );
};
