import React from "react";
import { Header, Footer } from "./../components";

class GiftCard extends React.Component {
    comingSoon(evt) {
        evt.preventDefault();

        alert("This is a prototype.  The link you clicked does nothing.");
    }

    render() {
        return (
            <div>
                <Header comingSoon={ this.comingSoon.bind(this) } />
                { this.props.children }
                <Footer comingSoon={ this.comingSoon.bind(this) } />
            </div>
        );
    }
}

export default GiftCard;
