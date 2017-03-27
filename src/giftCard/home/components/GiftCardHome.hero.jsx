import React from "react";
import { Link } from "react-router";

const GiftCardHomeHero = () => (
    <section className="giftCard-home__section giftCard-home__hero">
        <h1 className="giftCard-home__hero-title">Send a gift that will last a lifetime</h1>
        <p className="giftCard-home__hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Link className="giftCard-home__hero-btn button" to="/customize">Purchase now!</Link>
    </section>
);

export default GiftCardHomeHero;
