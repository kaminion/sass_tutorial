import React from 'react';
import classNames from 'classnames';
import './button.scss';

// large medium small
// color : blue, pink, gray
function Button({ children, size, color, outline, fullWidth })
{
    return (
        <button className={classNames('Button', size, color, {
            outline, // undefined면 classNames에서 처리 X
            fullWidth
        })}>
        {children}
    </button>)
}

Button.defaultProps = 
{
    size: "medium",
    color: "blue",
}

export default Button;