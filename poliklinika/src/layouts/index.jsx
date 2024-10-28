import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NavBar } from "../components/navbar";
import { About } from "../pages/about";
import { Service } from "../pages/services";
import { ContactUs } from "../pages/contact";
import { Error } from "../pages/error404";
import { Footer } from "../components/footer";


export const Router = () => {


    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="*"  element={<Error/>} />
            </Routes>
            <Footer />
        </div>
    )
}