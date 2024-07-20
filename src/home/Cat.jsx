

import React, { useEffect, useState } from "react";
import Catp from "./props/Catp";
import axios from 'axios';


const Cat = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/vegist/catagory/get-api.php').then(function (response) {
            // handle success
            setCategory(response.data);
        })
    }, [])

    return (
        <>
            {/* <div className="catagory main" data-aos="fade-up-right"> */}
            <div className="catagory main">

                <div className="container">
                    <div className="cat-inner">
                        {
                            category.map((obj) => {
                                return (
                                    <>
                                        <Catp path={obj.image} head={obj.title} />
                                    </>
                                );
                            })
                        }
                        {/* <Catp path="assets/images/cake1.jpg" head="cake" />
                        <Catp path="assets/images/cookie2.jpg" head="cookie" />
                        <Catp path="assets/images/cupcake3.jpg" head="cupcake" />
                        <Catp path="assets/images/bagel4.jpg" head="bagel" />
                        <Catp path="assets/images/sandwich6.jpg" head="sandwich" /> */}
                    </div>
                </div>
            </div>

        </>
    );
}
export default Cat;