import React from "react";
import Reviewp from "./props/Reviewp";

const Review = () => {
    return (
        <>
            <div className="r-main main" style={{ backgroundImage: 'url(assets/images/bac2.jpg)' }} >
                <div className="container">
                    <div className="r-space">
                        <div className="title">
                            <p className="br">our customer say</p>
                        </div>
                        <div className="r-inner">
                            <Reviewp head="for customer support" para="Excellent customer support! I highly recommend this. I have been having many
                                            troubles
                                            making the product page look exactly as I want. the customer support was very
                                            responsive
                                            and efficient in solving my problems. thank you very much!" name="by cli" />
                            <Reviewp head="flexibility" para="I love this theme. higly customizable, easy to use and very flexible theme.
                                            great
                                            support ! excellent response times. very professional and helpful in all
                                            queries,
                                            absolutely awesome. highly recommended! the theme is really amazing. thank you
                                            spacingtech webify." name="by dishark"></Reviewp>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Review;