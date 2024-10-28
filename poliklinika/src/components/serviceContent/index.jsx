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

export const ServiceContent = () => {
    const items = [
        { img: img1, title: "Թերապևտիկ" },
        { img: img2, title: "ՈՒռուցքաբանություն" },
        { img: img3, title: "Սրտաբանություն" },
        { img: img4, title: "Մաշկաբանություն" },
        { img: img5, title: "Ինֆեկցիոն" },
        { img: img6, title: "Կանանց կոնսուլտացիա" },
        { img: img7, title: "Նյարդաբանություն" },
        { img: img8, title: "Էնդոկրինոլոգիական" },
        { img: img9, title: "Ատամնաբուժություն" },
        { img: img10, title: "Ակնաբուժություն" },
        { img: img11, title: "Ուրոլոգիական" },
        { img: img12, title: "Ֆիզիոթերապիա" },
        { img: img13, title: "ԼՕՌ" },
        { img: img14, title: "Համաճարակաբանություն" },
        { img: img15, title: "Գործիքային և ախտորոշիչ" },
        { img: img16, title: "Վիրաբուժություն" },
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
