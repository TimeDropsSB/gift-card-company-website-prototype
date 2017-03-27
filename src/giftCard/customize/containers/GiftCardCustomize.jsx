import React from "react";
import DocumentTitle from "react-document-title";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import axios from "axios";
import * as actionCreators from "./../actions/giftCardCustomize.actionCreators";
import GiftCardCustomize from "./../components/GiftCardCustomize";

class GiftCardCustomizeCtn extends React.Component {
    constructor() {
        super();

        this.state = {
            designs: []
        };
    }

    componentDidMount() {
        // This sets placeholder images for the design step
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((resp) => {
                let designsArr = resp.data.slice(0, 8);

                designsArr.forEach((design, index) => {
                    design.thumbnailUrl = design.url;
                    design.thumbnailUrl = design.thumbnailUrl.replace(/\/600\//, "/350x250/");
                    design.url = design.url.replace(/\/600\//, "/700x500/");
                });

                this.setState({
                    designs: designsArr
                });
            });
    }

    render() {
        return (
            <DocumentTitle title="Gift Card - Customize">
                <GiftCardCustomize { ...this.props } { ...this.state } />
            </DocumentTitle>
        );
    }
}

/**
 * Map state to props.
 */
function mapStateToProps(state) {
    return {
        giftCard: state.giftCard
    };
}

/**
 * Map dispatch events to props.
 */
function mapDispatchToProps(dispatch) {
    // Bind all action creators to dispatch
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftCardCustomizeCtn);

