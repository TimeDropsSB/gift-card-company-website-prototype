import React from "react";
import classNames from "classnames";
import dispatchAction from "./utils/dispatchAction";
import FieldError from "./FieldError";

/**
 * PresetAmtBtn
 * Buttons with preset amounts.
 */
const PresetAmtBtn = (props) => {
    return (
        <button type="button" 
                className="giftCard-customize__amount-preset-btn button"
                value={ props.amt }
                onClick={ props.action }>
            { "$" + props.amt }
        </button>
    );
};

PresetAmtBtn.propTypes = {
    amt: React.PropTypes.number.isRequired,
    action: React.PropTypes.func.isRequired
};


/**
 * GiftCardCustomizeAmount
 * The main React component.
 */
class GiftCardCustomizeAmount extends React.Component {
    /**
     * allowedInput()
     * Allow only certain keys to be used.
     * @param {obj} evt: The event (from the input element).
     */
    allowedInput(evt) {
        const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
            "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Backspace", "Delete", "Tab", "Home", "End", "Shift"];
        // NOTE: event.keyCode is deprecated so that's why it is not used here

        // Do not allow any keys except allowed keys listed
        if (!allowedKeys.includes(evt.key)) {
           evt.preventDefault();
        }
    }

    componentWillMount() {
        this.presetAmts = [
            25, 50, 100, 200, 500, 1000
        ].map((amt) => (
            <PresetAmtBtn amt={ amt } action={ this.setAmount.bind(this) } key={ amt } />
        ));
    }

    componentDidMount() {
        // Native event on input element to control its allowed input
        this.amountInput.addEventListener("keypress", this.allowedInput);
    }

    componentWillUnmount() {
        this.amountInput.removeEventListener("keypress", this.allowedInput);
    }

    /**
     * setAmount()
     * Set amount in the input box (from a preset amount button clicked).
     * @param {obj} evt: The event (from the button element).
     */
    setAmount(evt) {
        this.amountInput.value = evt.target.value;

        // Dispatch the action
        dispatchAction(this.props.updateAmount, evt);

        // Manually trigger the blur event to also dispatch the action on the input element
        this.amountInput.dispatchEvent(new Event("blur", { bubbles: true }));
    }

    render() {
        return (
            <fieldset className="giftCard-customize__section giftCard-customize__amount">
                <legend className="giftCard-customize__section-title giftCard-customize__amount-title">Place an amount</legend>
                <div className="giftCard-customize__section-flex giftCard-customize__amount-flex">
                    <div className="giftCard-customize__amount-main">
                        <label className="giftCard-customize__amount-field">
                            <span className="giftCard-customize__amount-field-prefix">$</span>
                            <input className="giftCard-customize__section-input giftCard-customize__amount-field-input" 
                                   name="amount"
                                   type="text" 
                                   placeholder="Amount (whole numbers only)" 
                                   onChange={ dispatchAction.bind(this, this.props.updateAmount) }
                                   onBlur={ dispatchAction.bind(this, this.props.checkInput) }
                                   maxLength="4"
                                   ref={ (input) => (this.amountInput = input) }
                                   required />
                        </label>

                        <FieldError errorFlag={ this.props.giftCard.errors.amount.error }
                                    errorMessage={ this.props.giftCard.errors.amount.message } />
                    </div>

                    <div className="giftCard-customize__amount-preset">
                        { this.presetAmts }
                    </div>
                </div>
            </fieldset>
        );
    }
}

GiftCardCustomizeAmount.propTypes = {
    updateAmount: React.PropTypes.func.isRequired,
    checkInput: React.PropTypes.func.isRequired,
    giftCard: React.PropTypes.shape({
        errors: React.PropTypes.shape({
            amount: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            })
        })
    })
};

export default GiftCardCustomizeAmount;
