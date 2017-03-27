import React from "react";
import classNames from "classnames";
import dispatchAction from "./utils/dispatchAction";
import FieldError from "./FieldError";

/**
 * fieldClassNames()
 * Class names place on the field elements.
 * @param {str} type: The element type (text, email, textarea, etc.).
 * @return {arr}: Array of class names ([0] is for block, [1] is for the input).
 */
const fieldClassNames = (type) => {
    return [
        classNames([
            "giftCard-customize__recipient-block",
            "giftCard-customize__recipient-block--" + type
        ]),

        classNames([
            "giftCard-customize__recipient-field",
            "giftCard-customize__recipient-field--" + type
        ]),

        classNames([
            "giftCard-customize__section-input",
            "giftCard-customize__recipient-field-input",
            "giftCard-customize__recipient-field-input--" + type
        ])
    ];
};


/**
 * TextFieldBlock
 * Component text field blocks.
 */
const TextFieldBlock = (props) => {
    const [blockClassNames, labelClassNames, inputClassNames] = fieldClassNames(props.type);

    // Textarea
    if (props.type === "textarea") {
        return (
          <div className={ blockClassNames }>
              <label className={ labelClassNames }>
                  <textarea className={ inputClassNames }
                            name={ props.name }
                            placeholder={ props.placeholder }
                            onChange={ dispatchAction.bind(this, props.action) }
                            onBlur={ dispatchAction.bind(this, props.validate) }
                            required={ props.required ? "required" : ""} >
                  </textarea>
              </label>
              <FieldError errorFlag={ props.errorFlag }
                          errorMessage={ props.errorMessage } />
          </div>
        );
    }

    // All other types
    return (
        <div className={ blockClassNames }>
            <label className={ labelClassNames }>
                <input className={ inputClassNames }
                       name={ props.name }
                       type={ props.type }
                       placeholder={ props.placeholder }
                       onChange={ dispatchAction.bind(this, props.action) }
                       onBlur={ dispatchAction.bind(this, props.validate) }
                       required={ props.required ? "required" : ""} />
            </label>
            <FieldError errorFlag={ props.errorFlag }
                        errorMessage={ props.errorMessage } />
        </div>
    );
};

TextFieldBlock.propTypes = {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    action: React.PropTypes.func,
    validate: React.PropTypes.func,
    errorFlag: React.PropTypes.bool,
    errorMessage: React.PropTypes.string
};


/**
 * GiftCardCustomizeRecipient
 * The main React component.
 */
class GiftCardCustomizeRecipient extends React.Component {
    render() { 
        return (
            <fieldset className="giftCard-customize__section giftCard-customize__recipient">
                <legend className="giftCard-customize__section-title giftCard-customize__recipient-title">Put in recipient's information</legend>

                <div className="giftCard-customize__section-flex giftCard-customize__recipient-flex">
                    <TextFieldBlock name="recipientName"
                                    type="text" 
                                    placeholder="Recipient's name" 
                                    action={ this.props.updateRecipientName }
                                    validate={ this.props.checkInput } 
                                    errorFlag={ this.props.giftCard.errors.recipientName.error }
                                    errorMessage={ this.props.giftCard.errors.recipientName.message }
                                    required />

                    <TextFieldBlock name="recipientEmail"
                                    type="email" 
                                    placeholder="Recipient's email" 
                                    action={ this.props.updateRecipientEmail }
                                    validate={ this.props.checkInput } 
                                    errorFlag={ this.props.giftCard.errors.recipientEmail.error }
                                    errorMessage={ this.props.giftCard.errors.recipientEmail.message }
                                    required />

                    <TextFieldBlock name="senderName"
                                    type="text" 
                                    placeholder="Sender's name" 
                                    action={ this.props.updateSenderName }
                                    validate={ this.props.checkInput } 
                                    errorFlag={ this.props.giftCard.errors.senderName.error }
                                    errorMessage={ this.props.giftCard.errors.senderName.message }
                                    required />

                    <TextFieldBlock name="recipientMessage"
                                    type="textarea" 
                                    placeholder="Add a personal message (optional)" 
                                    action={ this.props.updateRecipientMessage } />
                </div>
            </fieldset>
        );
    }
}

GiftCardCustomizeRecipient.propTypes = {
    updateRecipientName: React.PropTypes.func.isRequired,
    updateRecipientEmail: React.PropTypes.func.isRequired,
    updateRecipientMessage: React.PropTypes.func.isRequired,
    updateSenderName: React.PropTypes.func.isRequired,
    checkInput: React.PropTypes.func.isRequired,
    giftCard: React.PropTypes.shape({
        errors: React.PropTypes.shape({
            recipientName: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            }),
            recipientEmail: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            }),
            recipientMessage: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            }),
            senderName: React.PropTypes.shape({
                error: React.PropTypes.bool,
                message: React.PropTypes.string,
            })
        })
    })
};

export default GiftCardCustomizeRecipient;
