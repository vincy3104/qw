import React from "react";
import Productp from "./props/Productp";

const Product =()=>{
    return(
        <>
        <div className="main-product main">
            <div className="container">
                <div className="title">
                    <p>trending products</p>
                </div>
                <div className="content">
                    <div className="row">
                        <Productp path="assets/images/p1.jpg" name="red valvet cup cake" price="$35.00" strike="$51.00"/>
                        <Productp path="assets/images/p2.jpg" name="bread pie" price="$14.00"/>
                        <Productp path="assets/images/p3.jpg" name="french loaf bread" price="$23.00"  strike="21.00"/>
                        <Productp path="assets/images/p5.jpg" name="delicious cookies" price="$31.00" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Product;