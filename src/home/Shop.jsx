import React from "react";
import Pshop from "./Pshop";

const Shop =( ) => {
    return(
        <>
        {/* <div className="shop-items main" data-aos="fade-up-left"> */}
        <div className="shop-items main">

            <div className="container">
                <div className="item-inner">
                    <Pshop para="food taste" head="fresh bread bakery shop" path="assets/images/bread-sale1.jpg"/>
                    <Pshop para="only today" head="100% fresh & hand made" path="assets/images/sale2.jpg"/>
                    <Pshop para="premiun qality" head="bread & sweet bakery shop" path="assets/images/donuts3.jpg"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Shop;