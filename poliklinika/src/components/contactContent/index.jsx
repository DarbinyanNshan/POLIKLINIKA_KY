import React, { useRef } from "react";
import "./style.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactContent = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_avjh2ws',
            'template_3sxoptj',
            form.current,
            'G_GFIiShl_BuU3IBw'
        )
            .then(() => {
                toast.success("Ձեր հաղորդագրությունը ուղարկվել է", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(() => {
                toast.error("Ձեր հաղորդագրությունը չի ուղարկվել", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        e.target.reset();
    };

    return (
        <>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Ունե՞ք հարցեր։ Դիմեք մեզ</h2>
                    <h3>Ընդունարան</h3>
                    <p>Հեռ․ 010286320</p>
                </div>
                <div className="contact-input">
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="input-box">
                            <div className="input-field">
                                <input type="text" name="user_name" placeholder="Անուն Ազգանուն" required />
                                <span className="focus"></span>
                            </div>
                            <div className="input-field">
                                <input type="text" name="phone" placeholder="Հեռախոսահամար" required />
                                <span className="focus"></span>
                            </div>
                            <div className="input-field">
                                <input type="email" placeholder="Էլ․ հասցե" name="user_email" required />
                                <span className="focus"></span>
                            </div>
                        </div>
                        <div className="textarea-field">
                            <textarea name="message" cols="30" rows="10" placeholder="Հաղորդագրություն" required></textarea>
                            <span className="focus"></span>
                        </div>
                        <div>
                            <button type="submit" className="contact-btn">Ուղարկել</button>
                        </div>
                        <ToastContainer
                            position="bottom-center"
                            autoClose={4000}
                            limit={1}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </form>
                </div>
            </div>
            <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1865.0076900942845!2d44.50562924612217!3d40.20316991008341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd387fb7fd3f%3A0xc540c6ec2630aead!2sHrachya%20Kochar%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1722245166997!5m2!1sru!2sam"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
        </>
    );
};
