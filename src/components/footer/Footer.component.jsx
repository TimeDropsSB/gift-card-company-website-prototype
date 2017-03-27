import React from "react";
import { Link } from "react-router";

/**
 * FooterMenuLink
 * A link in the footer.
 */
const FooterMenuLink = (props) => {
    let link = (<Link className="footer__nav-menu-link" to={ props.to } onClick={ props.action }>{ props.title }</Link>);

    if (props.social) {
        link = (
            <a className="footer__nav-menu-link" href="#" onClick={ props.action }>
                <span className={ "footer__nav-menu-link-icon fa fa-" + props.social }></span>
            </a>
        );
    }

    return (
        <li className="footer__nav-menu-item">
            { link }
        </li>
    );
};

FooterMenuLink.propTypes = {
    to: React.PropTypes.string,
    action: React.PropTypes.func,
    title: React.PropTypes.string,
    social: React.PropTypes.string
};


/**
 * Footer
 * The footer component.
 */
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__nav footer__nav--site row">
                    <ul className="footer__nav-menu horizontal-list">
                        <FooterMenuLink title="Home" to="/" />
                        <FooterMenuLink title="How It Works" action={ this.props.comingSoon } />
                        <FooterMenuLink title="FAQ" action={ this.props.comingSoon } />
                        <FooterMenuLink title="About Us" action={ this.props.comingSoon } />
                        <FooterMenuLink title="Contact" action={ this.props.comingSoon } />
                    </ul>
                </div>

               <div className="footer__nav footer__nav--social row">
                    <ul className="footer__nav-menu horizontal-list">
                        <FooterMenuLink action={ this.props.comingSoon } social="facebook" />
                        <FooterMenuLink action={ this.props.comingSoon } social="twitter" />
                        <FooterMenuLink action={ this.props.comingSoon } social="linkedin" />
                        <FooterMenuLink action={ this.props.comingSoon } social="google-plus" />
                    </ul>
                </div>

                <div className="footer__info row">
                    <span className="footer__info-details">111 Somewhere St, Someplace SA 00000</span>
                    <span className="footer__info-details">(000) 111-2222</span>
                    <a className="footer__info-details footer__info-details--email">example@mail.com</a>
                </div>

                <div className="footer__copyright">
                    <span className="footer__copyright-message">Copyright © 2017 Derek Zeng</span>
                    <a className="footer__copyright-link" href="https://dzeng-web.me">My website</a>
                    <a className="footer__copyright-link" href="https://github.com/Sylphony/gift-card-company-website-prototype">Source</a>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    comingSoon: React.PropTypes.func.isRequired  
};


export default Footer;
