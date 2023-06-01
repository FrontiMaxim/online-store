import React, { useState } from 'react';

import styles from './InputNumberBankCard.module.scss';
import InputError from '../InputError/InputError';

import cn from 'classnames';

const InputNumberBankCard = ({name, register, error, placeholder='XXXX XXXX XXXX XXXX'}) => {

    const [value, setValue] = useState('');
    
    return (
        <div>
            <input 
                type='text' 
                placeholder={placeholder} 
                className={cn(styles.input, {
                    [styles.input_error]: error
                })}
                value={ 
                    value
                        .replace(/\s/g, '')
                        .replace(/\D/g, '')
                        .replace(/(\d{4})/g, '$1 ')
                        .trim()
                } 
                maxLength={19}

                {...register(
                    name, 
                    {
                        required: {
                            value: true,
                            message: 'Заполните поле'
                        },
                        minLength: {
                            value: 19,
                            message: 'Недостаточно количество символов'
                        },
                        onChange: (e) => setValue(e.target.value),
                    })
                } 
                
            />
            {
                error && 
                <div className={styles.wrapper_error}>
                    <InputError message={error.message}/>
                </div>   
            }
        </div>
        
    )
}

export default InputNumberBankCard;