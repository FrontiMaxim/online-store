import React from 'react';

import styles from './Button.module.scss';

import cn from 'classnames';

function Button({value, handlerClick, type='button', mode = 'default'}) {
  return (
    <button 
        type={type}
        onClick={handlerClick}
        className={cn(styles.button, {
            [styles.primary]: mode === 'primary',
            [styles.default]: mode === 'default'
        })}
    >
        {value}
    </button>
  )
}

export default Button;