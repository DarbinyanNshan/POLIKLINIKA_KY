import React from "react";
import "./style.css";

import img3 from "../../assets/images/home/kolektiv.jpg";

export const AboutContent = () => {
    return (
        <div className="about-content">
            <div>
                <h2>Կառլեն Եսայանի անվան պոլիկլինիկա</h2>
                <p>
                    Հիմնադրվել է 2012 թվականին, Երևանի քաղաքապետի կողմից՝ որպես իրավաբանական անձ։
                    Բուժհաստատությունն ունի հետևյալ կաբինետները՝
                    <ul>
                        <li>ՔԿԱ </li>
                        <li>Ակնաբուժական </li>
                        <li>Ներզատաբանական </li>
                        <li>Ուռուցքաբանական </li>
                        <li>Վիրաբուժական </li>
                        <li>Նյարդաբանական </li>
                        <li>Սրտաբանական </li>
                        <li>ԷՍԳ </li>
                        <li>Մաշկավեներական </li>
                        <li>Կանանց կոնսուլտացիա</li>
                        <li>Վարակաբանական </li>
                        <li>Համաճարակաբանական </li>
                        <li>Ռենտգեն </li>
                    </ul>
                </p>
            </div>
            <img src={img3} alt="Կոլեկտիվ նկար" />
        </div>
    );
};
