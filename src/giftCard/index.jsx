import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./giftCard.store";
import GiftCardRoutes from "./giftCard.routes";

ReactDOM.render(
    <Provider store={ store }>
        <GiftCardRoutes />
    </Provider>,
    document.getElementById("giftCard")
);
