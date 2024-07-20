import React from "react";

const Pshop = (props) => {
    return (
        <>
            <div className="item">
                <a href="#">
                    <img src={props.path} alt="bread" />
                </a>
                <div className="i-text">
                    <div className="text-inner">
                        <p>{props.para}</p>
                        <h3>{props.head}</h3>
                    </div>
                    <span>
                        <a href="#">shop now <i className="fa-solid fa-chevron-right"></i> </a>
                    </span>
                </div>
            </div>
        </>
    );
}
export default Pshop;