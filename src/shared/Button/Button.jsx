import React from 'react';

import styles from './Button.module.scss';

import cn from 'classnames';

function Button({value, mode = 'default', handlerClick}) {
  return (
    <button 
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