import React from "react";
import classNames from "classnames";
import { Link } from "react-router";

/**
 * NavMenuLink
 * A link in the nav menu.
 */
const NavMenuLink = (props) => {
    return (
        <li className="header__nav-menu-item">
            <Link className="header__nav-menu-link" to={ props.to } onClick={ props.action } activeClassName={ "header__nav-menu-link--active" }>{ props.title }</Link>
        </li>
    );
};

NavMenuLink.propTypes = {
    to: React.PropTypes.string,
    action: React.PropTypes.func,
    title: React.PropTypes.string.isRequired
};


/**
 * Nav
 * Navigation component.
 */
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set nav menu initial state
            showMenu: false
        };

        this.toggleNavMenu = this.toggleNavMenu.bind(this);
    }

    /**
     * toggleNavMenu()
     * On mobile, toggle nav menu when it is clicked.
     */
    toggleNavMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    render() {
        return (
            <nav className="header__nav row">
                <Link className="header__nav-logo" to="/">MY GIFT CARD COMPANY</Link>

                <ul className={ classNames(["header__nav-menu horizontal-list", { "header__nav-menu--show": this.state.showMenu }]) }>
                    <NavMenuLink title="Home" to="/" />
                    <NavMenuLink title="About Us" action={ this.props.comingSoon } />
                    <NavMenuLink title="Purchase" to="/customize" />
                    <NavMenuLink title="Sign In" action={ this.props.comingSoon } />
                </ul>

                <button type="button" className="header__nav-toggle" onClick={ this.toggleNavMenu }>
                    <span className="header__nav-toggle-icon fa fa-navicon"></span>
                </button>
            </nav>
        );
    }
}

Nav.propTypes = {
    comingSoon: React.PropTypes.func.isRequired
};


/**
 * Header
 * The header component.
 */
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Nav {...this.props } />
            </header>
        );
    }
}

export default Header;
