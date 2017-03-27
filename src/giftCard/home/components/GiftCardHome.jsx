import React from "react";
import { Header, Footer } from "./../../../components/";
import GiftCardHomeHero from "./GiftCardHome.hero";
import GiftCardHomeAbout from "./GiftCardHome.about";
import GiftCardHomeStats from "./GiftCardHome.stats";
import GiftCardHomeAttention from "./GiftCardHome.attention";

const GiftCardHome = () => (
    <div>
        <GiftCardHomeHero />
        <GiftCardHomeAbout />
        <GiftCardHomeStats />
        <GiftCardHomeAttention />
    </div>
);

export default GiftCardHome;
