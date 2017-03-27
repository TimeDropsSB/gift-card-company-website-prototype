import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createHistory, useBasename } from "history";
import { syncHistoryWithStore } from "react-router-redux";
import store from "./giftCard.store";
import GiftCard from "./GiftCard";
import GiftCardHomeCtn from "./home/containers/GiftCardHome";
import GiftCardCustomizeCtn from "./customize/containers/GiftCardCustomize";

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(useBasename(() => browserHistory)({
    // Define the public path base
    basename: process.env.PUBLIC_URL || "/"
}), store);

// Set the scrollbar to the top on route change
const setScrollToTop = () => {
    document.body.scrollTop = 0;
};

const GiftCardRoutes = () => {
    return (
        <Router history={ history }>
            <Route component={ GiftCard } onChange={ setScrollToTop }>
                <Route path="/" component={ GiftCardHomeCtn } />
                <Route path="/customize" component={ GiftCardCustomizeCtn } />
            </Route>
        </Router>
    );
};

export default GiftCardRoutes;



