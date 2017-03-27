import React from "react";
import classNames from "classnames";

/**
 * ReviewDesignImage
 * Review design image component.
 */
const ReviewDesignImage = (props) => {
    // Design review image placeholder for no design selected
    let component = (
        <div className="giftCard-customize__review-design-image giftCard-customize__review-design-image--none">
            <span className="giftCard-customize__review-design-image-text">No design selected</span>
        </div>
    );

    // If there is a design selected, show that image instead
    if (props.design.code >= 0) {
        component = (
            <img className="giftCard-customize__review-design-image" alt="Design review" src={ props.design.imgSrc } />
        );
    }

    return component;
};

ReviewDesignImage.propTypes = {
    design: React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        imgSrc: React.PropTypes.string.isRequired
    })
};


/**
 * ReviewInfoBlock
 * Review info block component.
 */
const ReviewInfoBlock = (props) => {
    const [blockClassNames, labelClassNames, dataClassNames] = [
        classNames([
            "giftCard-customize__review-info-block",
            (props.flex) ? "giftCard-customize__review-info-block--flex" : ""
        ]),

        classNames([
            "giftCard-customize__review-info-block-label",
            (props.marginBottom) ? "giftCard-customize__review-info-block-label--marginBottom" : ""
        ]),

        classNames([
            "giftCard-customize__review-info-block-data",
            (props.prewrap) ? "giftCard-customize__review-info-block-data--prewrap" : ""
        ])
    ];

    return (
        <div className={ blockClassNames }>
            <span className={ labelClassNames }>{ props.label }</span>
            <span className={ dataClassNames }>{ props.data }</span>
        </div>
    );
};

ReviewInfoBlock.propTypes = {
    flex: React.PropTypes.bool,
    marginBottom: React.PropTypes.bool,
    prewrap: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.any.isRequired
};


/**
 * GiftCardCustomizeReview
 * The main React component.
 */
class GiftCardCustomizeReview extends React.Component {
    render() {
        return (
            <div className="giftCard-customize__section giftCard-customize__review">
                <div className="giftCard-customize__section-title giftCard-customize__review-title">Review the gift card</div>

                <div className="giftCard-customize__section-flex giftCard-customize__review-flex">
                    <div className="giftCard-customize__review-info">
                        <ReviewInfoBlock label="To" data={ [this.props.giftCard.recipient.name, " (" + this.props.giftCard.recipient.email + ")"]  } flex />
                        <ReviewInfoBlock label="From" data={ this.props.giftCard.sender.name } flex />
                        <ReviewInfoBlock label="Amount" data={ "$" + this.props.giftCard.amount } flex />
                        <ReviewInfoBlock label="Message" data={ this.props.giftCard.recipient.message } marginBottom prewrap />
                    </div>

                    <div className="giftCard-customize__review-design">
                        <ReviewDesignImage design={ this.props.giftCard.design } />
                    </div>
                </div>
            </div>
        );
    }
}

GiftCardCustomizeReview.propTypes = {
    giftCard: React.PropTypes.shape({
        amount: React.PropTypes.number.isRequired,
        design: React.PropTypes.object.isRequired,
        recipient: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            email: React.PropTypes.string.isRequired,
            message: React.PropTypes.string.isRequired
        }),
        sender: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        })
    })
};

export default GiftCardCustomizeReview;
