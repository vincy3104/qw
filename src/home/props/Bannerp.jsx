import React from "react";
const Bannerp = (props) => {
    return (
        <>
            <div className="main-banner main" >
                <div className="contant">
                    <div className="img">
                        <a href="#">
                            <img src={props.path} alt="main-banner" />
                        </a>
                    </div>
                    <div className="container">
                        <div className="text">
                            <p>{props.para}</p>
                            <h2>{props.head}</h2>
                            <a href="#" className="button">shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Bannerp;