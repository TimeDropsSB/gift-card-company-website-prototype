import React from "react";
import { Link } from "react-router";

class GiftCardHomeStats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amountToday: 800,
            amountTotal: 53506
        };
    }

    componentDidMount() {
        // Fake update the numbers
        this.timer = setInterval(() => {
            this.setState({
                amountToday: this.state.amountToday += 1,
                amountTotal: this.state.amountTotal += 1
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <section className="giftCard-home__section giftCard-home__section--bgBlue giftCard-home__stats">
                <h2 className="giftCard-home__section-title">It's popular!</h2>
                <p className="giftCard-home__section-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="giftCard-home__stats-info">
                    <div className="giftCard-home__stats-box">
                        <span className="giftCard-home__stats-box-number">{ this.state.amountToday }</span>
                        <span className="giftCard-home__stats-box-caption">Cards sold today</span>
                    </div>
                    <div className="giftCard-home__stats-box">
                        <span className="giftCard-home__stats-box-number">{ this.state.amountTotal }</span>
                        <span className="giftCard-home__stats-box-caption">Cards sold total</span>
                    </div>
                </div>
                <p className="giftCard-home__section-desc">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link className="giftCard-home__section-btn button button--noMarginBottom" to="/customize">Purchase now!</Link>
            </section>
        );
    }
}

export default GiftCardHomeStats;
