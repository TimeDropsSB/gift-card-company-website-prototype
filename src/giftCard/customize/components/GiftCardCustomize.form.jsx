import React from "react";
import GiftCardCustomizeDesign from "./GiftCardCustomize.design";
import GiftCardCustomizeAmount from "./GiftCardCustomize.amount";
import GiftCardCustomizeRecipient from "./GiftCardCustomize.recipient";
import GiftCardCustomizeReview from "./GiftCardCustomize.review";
import GiftCardCustomizeSubmit from "./GiftCardCustomize.submit";

class GiftCardCustomizeForm extends React.Component {
    /**
     * checkForm()
     * Check the form to make sure there is no error just yet.
     * @param {obj} evt: The input event.
     */
    checkForm(evt) {
        // Do not allow form to submit just yet
        evt.preventDefault();

        const form = evt.target;

        // Get the main input elements
        const inputEles = {
            design: Array.prototype.filter.call(form.elements, (ele) => (ele.name === "design" && ele.checked)),
            amount: Array.prototype.filter.call(form.elements, (ele) => (ele.name === "amount")),
            recipientName: Array.prototype.filter.call(form.elements, (ele) => (ele.name === "recipientName")),
            recipientEmail: Array.prototype.filter.call(form.elements, (ele) => (ele.name === "recipientEmail")),
            senderName: Array.prototype.filter.call(form.elements, (ele) => (ele.name === "senderName"))
        };

        // Trigger their respective onBlur handler so that it runs validation
        // This is necessary due to "Enter" button being allowed to submit and does not blur.
        for (const eleArr in inputEles) {
            inputEles[eleArr][0].dispatchEvent(new Event("blur", { bubbles: true }));
        }

        // Check for any errors one more time
        const errors = this.props.giftCard.errors;
        const formHasNoErrors = ((errors.design.error === false)
                        && (errors.amount.error === false)
                        && (errors.senderName.error === false)
                        && (errors.recipientName.error === false)
                        && (errors.recipientEmail.error === false));

        // If there is no form error, alert.
        if (formHasNoErrors) {
            alert("This is a prototype so submitting is not possible.  However, if you are seeing this, it means the form was filled out correctly and passed.");
        }
    }

    render() {
        return (
            <form className="giftCard-customize__form row" onSubmit={ this.checkForm.bind(this) }>
                <GiftCardCustomizeDesign {...this.props } />
                <GiftCardCustomizeAmount {...this.props } />
                <GiftCardCustomizeRecipient {...this.props } />
                <GiftCardCustomizeReview {...this.props } />
                <GiftCardCustomizeSubmit {...this.props } />
            </form>
        );
    }
}

export default GiftCardCustomizeForm;
