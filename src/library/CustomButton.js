import React from 'react';
import Button from './Button.styles';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        <Button buttonWidth={props.buttonWidth} buttonHeight={props.buttonHeight}>
            {props.children}
        </Button>
    )
};

Button.propTypes = {
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string
}

export default CustomButton;