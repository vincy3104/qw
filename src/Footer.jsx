import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="f-top" style={{backgroundImage: 'url(assets/images/f.jpg)'}}>
                    <div className="container">
                        <div className="f-inner">
                            <div className="f-title">
                                <h2>Get the latest deal</h2>
                                <p>Receive 20% off coupon for first shopping</p>
                            </div>
                            <div className="f-contant">
                                <div className="f-block">
                                    <input type="email" placeholder="enter your email address here" />
                                    <button>subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-middle">
                    <div className="container">
                        <div className="m-inner">
                            <div className="m-col">
                                <div className="logo">
                                    <a href="#">
                                        <img src="assets/images/logo(1).jpg" alt="logo" />
                                    </a>
                                </div>
                                <p>Tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                            </div>
                            <div className="m-col">
                                <div className="m-contant">
                                    <div className="m-title">
                                        <h2>services</h2>
                                    </div>
                                    <ul className="m-txt">
                                        <li><a href="#">about vegist</a></li>
                                        <li><a href="#">faq's</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">news</a></li>
                                        <li><a href="#">store location</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-col">
                                <div className="m-contant">
                                    <div className="m-title">
                                        <h2>privacy & terms</h2>
                                    </div>
                                    <ul className="m-txt">
                                        <li><a href="#">payment policy</a></li>
                                        <li><a href="#">privacy policy</a></li>
                                        <li><a href="#">return polick</a></li>
                                        <li><a href="#">shipping policy</a></li>
                                        <li><a href="#">terms & condititons</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-col">
                                <div className="m-contant">
                                    <div className="m-title">
                                        <h2>my account</h2>
                                    </div>
                                    <ul className="m-txt">
                                        <li><a href="#">my account </a></li>
                                        <li><a href="#">my cart</a></li>
                                        <li><a href="#">order history</a></li>
                                        <li><a href="#">my wishlist</a></li>
                                        <li><a href="#">my address</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-col">
                                <div className="m-contant">
                                    <div className="m-title">
                                        <h2>location</h2>
                                    </div>
                                    <div className="m-txt">
                                        <div className="s-location s-col">
                                            <div className="icon">
                                                <span>

                                                </span>
                                            </div>
                                            <div className="address">
                                                <p>7882 Longbranch rd wooster parck lbans, australia</p>
                                            </div>
                                        </div>
                                        <div className="s-contact s-col">
                                            <div className="icon">
                                                <span>

                                                </span>
                                            </div>
                                            <div className="number">
                                                <a href="tel:+14 5254555">556545555</a>
                                                <a href="#">
                                                    suppot@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-bottom">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="copyright">
                                <a href="#">
                                    © 2023 - Ecommerce software by PrestaShop™
                                </a>
                            </div>
                            <div className="payment">
                                <span><a href="https://www.visa.co.in/" target="_blank"><i
                                    className="fa-brands fa-cc-visa"></i></a></span>
                                <span><a href="https://www.paypal.com/in/home" target="_blank"><i
                                    className="fa-brands fa-cc-paypal"></i></a></span>
                                <span> <a href="https://www.discover.com/" target="_blank"><i
                                    className="fa-brands fa-cc-discover"></i></a></span>
                                <span><a href="https://www.discover.com/" target="_blank">
                                    <i
                                        className="fa-brands fa-cc-amex"></i></a></span>
                                <span><a href="https://www.mastercard.co.in/en-in.html" target="_blank"> <i
                                    className="fa-brands fa-cc-mastercard"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;