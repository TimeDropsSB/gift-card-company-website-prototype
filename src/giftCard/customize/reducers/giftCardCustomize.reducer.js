import { LOCATION_CHANGE } from "react-router-redux";
import inputValidate from "./utils/inputValidate";

/**
 * Initial state of the form.
 * {obj} design: The design with a code number and image src URL.
 * {num} amount: The amount to put on card.
 * {obj} sender: Sender info.
 * {obj} recipient: Recipient info.
 * {obj} errors: List of errors, for each field.
 */
const initialState = {
    design: {
        code: -1,
        imgSrc: "",
    },
    amount: 0,
    sender: {
        name: "",
    },
    recipient: {
        name: "",
        email: "",
        message: ""
    },
    errors: {
        design: {},
        amount: {},
        senderName: {},
        recipientName: {},
        recipientEmail: {}
    }
};

/**
 * giftCard()
 * Gift card reducer.
 * @param {obj} state = initialState: The state of the app.
 * @param {obj} action: The action dispatched.
 * @return {obj}: The new state.
 */
function giftCard(state = initialState, action) {
    switch (action.type) {
        case "CHECK_INPUT": {
            const results = inputValidate(action.input, action.fieldName);

            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.fieldName]: results
                }
            };
        }

        case "UPDATE_DESIGN": {
            return {
                ...state,
                design: action.design
            };
        }

        case "UPDATE_AMOUNT": {
            return {
                ...state,
                amount: action.amount
            };
        }

        case "UPDATE_SENDER_NAME": {
            return {
                ...state,
                sender: {
                    ...state.sender,
                    name: action.name
                }
            };
        }

        case "UPDATE_RECIPIENT_NAME": {
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    name: action.name
                }
            };
        }

        case "UPDATE_RECIPIENT_EMAIL": {
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    email: action.email
                }
            };
        }

        case "UPDATE_RECIPIENT_MESSAGE": {
            return {
                ...state,
                recipient: {
                    ...state.recipient,
                    message: action.message
                }
            };
        }

        // On route change, reset the form state
        case LOCATION_CHANGE: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export default {
    giftCard
};
