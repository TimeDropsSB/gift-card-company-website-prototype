export function checkInput(input, fieldName) {
    return {
        type: "CHECK_INPUT",
        input,
        fieldName
    };
}

export function updateAmount(amount) {
    amount = parseInt(amount) || 0;

    return {
        type: "UPDATE_AMOUNT",
        amount
    };
}

export function updateDesign(code, imgSrc) {
    code = parseInt(code) || -1;

    return {
        type: "UPDATE_DESIGN",
        design: {
            code,
            imgSrc
        }
    };
}

export function updateSenderName(name) {
    return {
        type: "UPDATE_SENDER_NAME",
        name
    };
}

export function updateRecipientName(name) {
    return {
        type: "UPDATE_RECIPIENT_NAME",
        name
    };
}

export function updateRecipientEmail(email) {
    return {
        type: "UPDATE_RECIPIENT_EMAIL",
        email
    };
}

export function updateRecipientMessage(message) {
    return {
        type: "UPDATE_RECIPIENT_MESSAGE",
        message
    };
}
