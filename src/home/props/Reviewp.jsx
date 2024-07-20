import React from "react";

const Reviewp = (props) => {
    return (
        <>
            <div className="r-item">
                <div className="t-contant">
                    <div className="a-review">
                        <span className="r-icon">
                            <i className="fa-solid fa-quote-left"></i>
                        </span>
                        <h4>
                            {props.head}
                        </h4>
                    </div>
                    <div className="c-review">
                        <p>
                            {props.para}
                        </p>
                    </div>
                    <div className="a-detail">
                        <div className="a-name">
                            <h6>{props.name}</h6>
                        </div>
                        <div className="a-rating">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Reviewp;