import React from "react";
import { Header, Footer } from "./../../../components/";
import GiftCardCustomizeForm from "./GiftCardCustomize.form";

class GiftCardCustomize extends React.Component {
    render() {
        return (
            <section className="giftCard-customize">
                <h1 className="giftCard-customize__title">
                    <span className="block">Customize Your Gift Card</span>
                </h1>
                <GiftCardCustomizeForm { ...this.props } />
            </section>
        );
    }
}

export default GiftCardCustomize;
