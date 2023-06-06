import React from 'react';

import styles from './Button.module.scss';

import cn from 'classnames';

function Button({value, 
                 handlerClick, 
                 type='button', 
                 mode = 'default', 
                 borderRadius = true
                }) {
  return (
    <button 
        type={type}
        onClick={handlerClick}
        className={cn(styles.button, {
            [styles.primary]: mode === 'primary',
            [styles.default]: mode === 'default',
            [styles.border_radius]: borderRadius
        })}
    >
        {value}
    </button>
  )
}

export default Button;