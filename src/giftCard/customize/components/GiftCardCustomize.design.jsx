import React from "react";
import classNames from "classnames";
import dispatchAction from "./utils/dispatchAction";
import FieldError from "./FieldError";

/**
 * DesignOption
 * A design option radio button component.
 */ 
const DesignOption = (props) => { 
    const labelClassNames = classNames([
        "giftCard-customize__design-option",
        (props.design.code === props.option.id) ? "giftCard-customize__design-option--selected" : ""
    ]);

    return (
        <label className={ labelClassNames } key={ props.option.id }>
            <input className="giftCard-customize__design-option-input" 
                   name="design" 
                   type="radio" 
                   value={ props.option.id } 
                   onChange={ props.action.bind(this, props.option.id, props.option.url) }
                   onBlur={ dispatchAction.bind(this, props.validate) }
                   required />

            <img className="giftCard-customize__design-option-img" 
                 alt={ props.option.title } 
                 src={ props.option.thumbnailUrl } />
        </label>
    );
};

DesignOption.propTypes = {
    design: React.PropTypes.shape({
        code: React.PropTypes.number.isRequired
    }),
    option: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        thumbnailUrl: React.PropTypes.string.isRequired
    }),
    action: React.PropTypes.func.isRequired,
    validate: React.PropTypes.func.isRequired
};


/**
 * GiftCardCustomizeDesign
 * The main React component.
 */
class GiftCardCustomizeDesign extends React.Component {
    render() {
        const designsArr = this.props.designs;

        // If there are no designs, display a message
        let designOpts = "No designs available";

        // If there are designs, show them
        if (designsArr.length > 0) {
            designOpts = designsArr.map((option) => (
                <DesignOption design={ this.props.giftCard.design } 
                              option={ option } 
                              action={ this.props.updateDesign }
                              validate={ this.props.checkInput }
                              key={ option.id } />
            ));
        }

        return (
            <fieldset className="giftCard-customize__section giftCard-customize__design">
                <legend className="giftCard-customize__section-title giftCard-customize__design-title">Select a design</legend>
                <div className="giftCard-customize__design-options">
                    { designOpts }
                </div>
                <FieldError errorFlag={ this.props.giftCard.errors.design.error }
                            errorMessage={ this.props.giftCard.errors.design.message } />
            </fieldset>
        );
    }
}

GiftCardCustomizeDesign.propTypes = {
    designs: React.PropTypes.arrayOf(React.PropTypes.object),
    updateDesign: React.PropTypes.func.isRequired,
    checkInput: React.PropTypes.func.isRequired,
    giftCard: React.PropTypes.shape({
        errors: React.PropTypes.shape({
            design: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            })
        })
    })
};

export default GiftCardCustomizeDesign;
