import React from "react";
import { Link } from "react-router";
import "./../../../assets/images/gift_card_hand.png";

const GiftCardHomeAttention = () => (
    <section className="giftCard-home__section giftCard-home__section--rtl">
        <div className="row">
            <div className="giftCard-home__section-textWrap">
                <h2 className="giftCard-home__section-title">The perfect gift</h2>
                <p className="giftCard-home__section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className="giftCard-home__section-btn button" to="/customize">Purchase now!</Link>
            </div>
            
            <div className="giftCard-home__section-imgWrap">
                <img className="giftCard-home__section-img giftCard-home__section-img--borderBottom" src="assets/images/gift_card_hand.png" alt="Some image here" />
            </div>
        </div>
    </section>
);

export default GiftCardHomeAttention;
