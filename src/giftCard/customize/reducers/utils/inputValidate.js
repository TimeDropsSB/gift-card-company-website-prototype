/**
 * validateDesign()
 * Validate the design.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
const validateDesign = (input) => {
    const id = parseInt(input);
    const [minAllowedId, maxAllowedId] = [1, 8];

    // Anything out of the ordinary when selecting a design option is an invalid selection
    if (!(Number.isInteger(id)) || !(id >= minAllowedId) || !(id <= maxAllowedId)) {
        return { 
            error: true, 
            message: "Invalid selection.  Please choose another one."
        };
    }

    // No errors
    return {
        error: false
    };
};

/**
 * validateAmount()
 * Validate the amount input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
const validateAmount = (input) => {
    const num = parseInt(input);
    const [minAmt, maxAmt] = [5, 2000];

    if (!(Number.isInteger(num))) {
        return { 
            error: true, 
            message: "Please input a valid amount."
        };
    }

    if (!(num >= minAmt)) {
        return { 
            error: true, 
            message: `The minimum amount is $${minAmt}.`
        };
    }

    if (!(num <= maxAmt)) {
        return { 
            error: true, 
            message: `The maximum amount is $${maxAmt}.`
        };
    }

    // No errors
    return {
        error: false
    };
};

/**
 * validateName()
 * Validate any name input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
const validateName = (input) => {
    if (!input) {
        return {
            error: true,
            message: "Please enter a name."
        };
    }

    // Only allow alphanumeric and space characters
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(input)) {
        return {
            error: true,
            message: "Please enter a valid name."
        };
    }

    return { 
        error: false
    };
};

/**
 * validateEmail()
 * Validate any email input.
 * @param {str} input: The input value.
 * @return {obj}: Error boolean and message if there is an error.
 */
const validateEmail = (input) => {
    if (!input) {
        return {
            error: true,
            message: "Please enter an email."
        };
    }

    // Simple regex for testing anything@anything.anything
    // NOTE: 
    // This is not a good regex. This is just used for demonstrating in this prototype. 
    // In the real work, the regex standard should be used for checking instead (called RFC822).
    // More details here:
    // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(input)) {
        return {
            error: true,
            message: "Email should be in the form: anything@anything.anything"
        };
    }

    return { 
        error: false
    };
};

/**
 * inputValidate()
 * Check the input and see if it is okay.
 * @param {mixed} input: The input value.
 * @param {str} fieldName: The name of the field.
 * @return {obj} results: The results, consisting of the error boolean and, optionally, a message.
 */
export default function inputValidate(input, fieldName) {
    let results = {};

    switch (fieldName) {
        case "design":
            results = validateDesign(input);
            break;

        case "amount":
            results = validateAmount(input);
            break;

        case "recipientName":
            results = validateName(input);
            break;

        case "recipientEmail":
            results = validateEmail(input);
            break;

        case "senderName":
            results = validateName(input);
            break;
    }

    return results;
}
