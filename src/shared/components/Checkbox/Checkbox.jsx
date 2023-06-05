import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox= ({name, register, value}) =>  {

    return (
        <input 
            className={styles.checkbox}
            type='checkbox' 
            value={value} 
            {...register(name)}
        />
    )
}

export default Checkbox;