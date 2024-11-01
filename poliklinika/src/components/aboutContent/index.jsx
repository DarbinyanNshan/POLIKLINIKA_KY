import React from "react";
import "./style.css";

import img3 from "../../assets/images/home/kolektiv.jpg"

export const AboutContent = () => {


    return (
    <>
           <div className="about-content">
                <div >
                    <h2>
                        Կառլեն Յեսայանի անվան պոլիկլինիկա
                    </h2>
                    <p>Հիմնադրվել է 1965 թվականին։ Այն մինչև 2012 թվականը եղել է «Սուրբ Աստվածամայր» բժշկական կենտրոնի կազմում։ 2012 թվականին Երևանի քաղաքապետի որոշմամբ կլինիկան դարձել է անկախ իրավաբանական անձ։
                    Բուժհաստատությունն ունի հետևյալ կաբինետները՝ թերապիա, մանկաբուժություն, գինեկոլոգիա, նյարդաբանություն, ԼՕՌ, ակնաբուժություն, սրտաբանություն, ուռուցքաբանություն, մաշկաբանություն, վիրաբուժություն,, ֆիզիոթերապիա, էնդոկրինոլոգիական,ուրոլոգիական, ԷԿԳ, ուլտրաձայնային ախտորոշում,ռենտգեն, կլինիկական ախտորոշում, կլինիկական,ցիտոլոգիական, կենսաքիմիական լաբորատորիա, միջամտությունների կաբինետ</p>
                </div>
                    <img src={img3} alt="3" />
            </div>
    </>
    )
}


