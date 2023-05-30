import React from 'react';
import styles from './Select.module.scss';

const Select = ({name, register, data}) =>  {

    return (
        <select className={styles.select} {...register(name)}>
            {
                data.map(({key, value}) => 
                    <option 
                        key={key} 
                        value={value}
                        className={styles.option}
                    >
                        { key }
                    </option>)
            }
        </select>
    )
}

export default Select;