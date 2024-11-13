import React from "react";
import "./style.css";

import img1 from "../../assets/images/service/terapevt.png";
import img2 from "../../assets/images/service/cancer.png";
import img3 from "../../assets/images/service/cardiology.png";
import img4 from "../../assets/images/service/dermatology.png";
import img5 from "../../assets/images/service/infectious-disease.png";
import img6 from "../../assets/images/service/uterus.png";
import img7 from "../../assets/images/service/neurological.png";
import img8 from "../../assets/images/service/endocrinological.png";
import img9 from "../../assets/images/service/dental.png";
import img10 from "../../assets/images/service/check.png";
import img11 from "../../assets/images/service/uroGast.png";
import img12 from "../../assets/images/service/physical-therapy.png";
import img13 from "../../assets/images/service/ear.png";
import img14 from "../../assets/images/service/search.png";
import img15 from "../../assets/images/service/diagnostic.png";
import img16 from "../../assets/images/service/surTra.png";
import img17 from "../../assets/images/service/ptsd.png";
import img18 from "../../assets/images/service/digestive-system.png";
import img19 from "../../assets/images/service/dna-test.png";


export const ServiceContent = () => {
    const items = [
        { img: img1, title: "Թերապևտիկ" },
        { img: img2, title: "Ուռուցքաբանական" },
        { img: img3, title: "Սրտաբանական" },
        { img: img4, title: "Մաշկավեներական" },
        { img: img5, title: "Վարակաբանական" },
        { img: img6, title: "Կանանց կոնսուլտացիա" },
        { img: img7, title: "Նյարդաբանական" },
        { img: img8, title: "Ներզատաբանական" },
        { img: img9, title: "Ատամնաբուժություն" },
        { img: img10, title: "Ակնաբուժական" },
        { img: img11, title: "Ուրոլոգիական" },
        { img: img12, title: "Ֆիզիոթերապևտիկ" },
        { img: img13, title: "Քիթ-կոկորդ-ականջաբանական" },
        { img: img14, title: "Համաճարակաբանական" },
        { img: img15, title: "Լաբորատոր-գործիքային ախտորոշիչ հետազությունների" },
        { img: img16, title: "Վիրաբուժական" },
        { img: img17, title: "Վնասվածքաբանական" },
        { img: img18, title: "Գաստրոէնտերոլոգիական" },
        { img: img19, title: "Գենետիկ" },

    ];

    return (
        <>
            <div className="medical-title">
                <div>
                    <h3>Ծառայություններ</h3>
                    <h6>Առողջապահական լուծումներ</h6>
                </div>
            </div>
            <div className="medical">
                {items.map((item, index) => (
                    <div className="medical-content" key={index}>
                        <img src={item.img} alt={`department ${index + 1}`} />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};
