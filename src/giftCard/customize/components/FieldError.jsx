import React from "react";
import classNames from "classnames";

const FieldError = (props) => (
    <span className={ classNames(["giftCard-customize__section-error", (props.errorFlag) ? "" : "hide"]) }>
        { props.errorMessage }
    </span>
);

FieldError.propTypes = {
    errorFlag: React.PropTypes.bool,
    errorMessage: React.PropTypes.string
};

export default FieldError;
