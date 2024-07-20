import React from "react";
import Blogp from "./props/Blogp";

const Blog =()=>{
    return(
        <>
        <div className="n-main main" >
        {/* <div className="n-main main" data-aos="zoom-in"> */}

            <div className="container">
                <div className="title">
                    <p>resent news</p>
                </div>
                <div className="n-inner">
                    <Blogp head="Baker cleaning hands off from flour"  path="assets/images/a2.jpg"/>
                    <Blogp head="Top view of cut bread and knife"  path="assets/images/a3.jpg"/>
                    <Blogp head="Family are preparing bakery together"  path="assets/images/a4.jpg"/>
                </div>
                <div className="all-b">
                    <a href="#">
                        view all news
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Blog;