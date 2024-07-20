import React from "react";

const Productp = (props) => {
    return (
        <>
            <div className="featured-item">
                <div className="item-inner">
                    <div className="i-block">
                        <a href="#">
                            <img src={props.path} alt="p1" />
                        </a>
                        <div className="s-icon">
                            <a href="#">
                                <i className="fa-regular fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="about-p">
                        <div className="p-name">
                            <a href="#">{props.name}</a>
                            <div className="rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div className="p-price">
                            <p>{props.price}</p>
                            <p className="strike">{props.strike}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Productp;