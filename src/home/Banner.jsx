import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Bannerp from "./props/Bannerp";

const Banner = () => {
    const options = {
        loop: true,
        margin: 10,
        autoplay:true,
        autoplaytimeout:5000,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }
    return (
        <>
            <OwlCarousel className='owl-theme' {...options}>
                <Bannerp path="assets/images/slider2.jpg" head="handmade bakery shop" para="summer mega sale"/>
                <Bannerp path="assets/images/slider1.jpg" head="delicious chocolates" para="top selling!"/>
            </OwlCarousel>
        </>
    );
}

export default Banner;