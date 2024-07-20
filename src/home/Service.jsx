import React from "react";
import { FaTruck } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

const Service =()=>{
    return(
        <>
        <div className="s-main main" data-aos="fade-out">
            <div className="container">
                <div className="s-inner">
                    <div className="s-col">
                        <div className="c-inner">
                            <div className="s-icon">
                                <a href="#">
                                <FaTruck />
                                </a>
                            </div>
                            <div className="s-txt">
                                <span>
                                    free delivery
                                </span>
                                <p>
                                    free shipping for orders over $50
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="s-col">
                        <div className="c-inner">
                            <div className="s-icon">
                                <a href="#">
                                <BsCurrencyDollar />
                                </a>
                            </div>
                            <div className="s-txt">
                                <span>
                                    Return & refund
                                </span>
                                <p>
                                    Free shipping for orders over $50
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="s-col">
                        <div className="c-inner">
                            <div className="s-icon">
                                <a href="#">
                                <FaHeadphonesAlt />
                                </a>
                            </div>
                            <div className="s-txt">
                                <span>
                                    Quality support
                                </span>
                                <p>
                                    free shipping for orders over $50
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="s-col">
                        <div className="c-inner">
                            <div className="s-icon">
                                <a href="#">
                                <SlEnvolopeLetter />
                                </a>
                            </div>
                            <div className="s-txt">
                                <span>
                                    Join newslleter
                                </span>
                                <p>
                                    free shipping for orders over $50
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Service;