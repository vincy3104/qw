import React from "react";

const Blogp = (props) => {
    return (
        <>
            <div className="n-item">
                <a href="#">
                    <img src={props.path} alt="blog1" />
                </a>
                <div className="n-txt">
                    <h2>
                        {props.head}
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus voluptates obcaecati
                        adipisci. Magni quod id culpa quos libero aliquam.
                    </p>
                    <div className="btn">
                        <a href="#">read more...
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blogp;