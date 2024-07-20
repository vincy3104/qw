import React from "react";

const Catp = (props) => {
    return (
        <>
            <div className="cat-col">
                <div className="cat-item">
                    <a href="#">
                        <img src={"assets/images/"+props.path} alt="cake" />
                        <span>{props.head}</span>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Catp;