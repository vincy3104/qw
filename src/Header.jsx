import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="h-top">
                    <div className="container">
                        <div className="t-inner">
                            <div className="t-col">
                                <div className="notify">
                                    <span>free shipping</span>
                                      orders from all item
                                </div>
                            </div>
                            <div className="t-col">
                                <div className="txt-notify">
                                    <a href="#"> my order</a>
                                    <a href="#"> track orders</a>
                                    <a href="#"> contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-main">
                    <div className="h-middle">
                        <div className="container">
                            <div className="m-inner">
                                <div className="col info">
                                    <div className="c-info">
                                        <span>
                                            <i className="fa-solid fa-headphones"></i>
                                        </span>
                                        <a href="tel:(+10)2223535">(+14) 22465 323255</a>
                                    </div>
                                </div>
                                <div className="col logo">
                                    <a href="#">
                                        <img src="assets/images/logo(1).jpg" alt="logo" />
                                    </a>
                                </div>
                                <div className="col element">
                                    <div className="c-elements">
                                        <div className="c-user">
                                            <a href="#">
                                                <i className="fa-regular fa-user"></i>
                                            </a>
                                        </div>
                                        <div className="c-wishlist">
                                            <a href="#">
                                                <i className="fa-regular fa-heart"></i>
                                                <span>0</span>
                                            </a>
                                        </div>
                                        <div className="c-cart">
                                            <a href="#">
                                                <i className="fa-solid fa-bag-shopping"></i>
                                                <span>0</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-bottom">
                        <div className="container">
                            <div className="b-inner">
                                <div className="col-menu">
                                    <ul>
                                        <li className="i-menu">
                                            <a href="#" className="select">home</a>
                                        </li>
                                        <li className="i-menu">
                                            <a href="#" className="select">shop</a>
                                            <span>
                                                <a href="#" className="select">
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                            </span>
                                            <ul className="sub-menu">
                                                <li><a href="#">cake</a></li>
                                                <li><a href="#">donuts</a></li>
                                                <li><a href="#">cookies</a></li>
                                                <li><a href="#">cupcake</a></li>
                                                <li><a href="#">pie</a></li>
                                                <li><a href="#">sandwish</a></li>
                                            </ul>
                                        </li>
                                        <li className="i-menu">
                                            <a href="#" className="select">collection</a>
                                            <span>
                                                <a href="#" className="select">
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                            </span>
                                            <ul className="sub-menu">
                                                <li><a href="#">best seller</a></li>
                                                <li><a href="#">special product</a></li>
                                                <li><a href="#">featured product</a></li>
                                            </ul>
                                        </li>
                                        <li className="i-menu">
                                            <a href="#" className="select">pages</a>
                                            <span>
                                                <a href="#" className="select">
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                            </span>
                                            <ul className="sub-menu">
                                                <li><a href="#">about us</a></li>
                                                <li><a href="#">contact us</a></li> 
                                                <li><a href="#">faq's</a></li>
                                                <li><a href="#">terms & conditions</a></li>
                                            </ul>
                                        </li>
                                        <li className="i-menu"><a href="#" className="select">blogs</a></li>
                                        <li className="i-menu"><a href="#" className="select">buy vegist</a></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <div className="searchbar">
                                        <input type="text" />
                                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header; 
