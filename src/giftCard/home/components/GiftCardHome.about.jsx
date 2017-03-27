import React from "react";
import { Link } from "react-router";
import "./../../../assets/images/gift_card.png";

const GiftCardHomeAbout = () => (
    <section className="giftCard-home__section">
        <div className="row">
            <div className="giftCard-home__section-textWrap">
                <h2 className="giftCard-home__section-title">One card, one smile</h2>
                <p className="giftCard-home__section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link className="giftCard-home__section-btn button" to="/customize">Purchase now!</Link>
            </div>
            
            <div className="giftCard-home__section-imgWrap">
                <img className="giftCard-home__section-img" src="assets/images/gift_card.png" alt="text" />
            </div>
        </div>
    </section>
);

export default GiftCardHomeAbout;
