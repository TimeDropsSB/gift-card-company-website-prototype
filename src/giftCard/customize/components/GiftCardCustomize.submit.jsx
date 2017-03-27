import React from "react";

/**
 * GiftCardCustomizeSubmit
 * The main React component.  Submit button.
 */
class GiftCardCustomizeSubmit extends React.Component {
    render() {
        const errors = this.props.giftCard.errors;

        // Button is enabled if and only if all errors are false (meaning no errors)
        const isDisabled = !((errors.design.error === false)
                        && (errors.amount.error === false)
                        && (errors.senderName.error === false)
                        && (errors.recipientName.error === false)
                        && (errors.recipientEmail.error === false));

        return (
            <input type="submit"
                   className="giftCard-customize__submit button large" 
                   value="Next step"
                   disabled={ isDisabled } />
        );
    }
}

export default GiftCardCustomizeSubmit;
