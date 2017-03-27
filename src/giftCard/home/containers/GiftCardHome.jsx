import React from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import GiftCardHome from "./../components/GiftCardHome";

class GiftCardHomeCtn extends React.Component {
    render() {
        return (
            <DocumentTitle title="Gift Card - Home">
                <GiftCardHome />
            </DocumentTitle>
        );
    }
}

export default connect()(GiftCardHomeCtn);
