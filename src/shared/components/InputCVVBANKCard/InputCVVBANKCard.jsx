import React, { useState } from 'react';

import styles from './InputCVVBANKCard.module.scss';
import InputError from '../InputError/InputError';

import cn from 'classnames';

const InputCVVBANKCard = ({name, register, error, placeholder='XXX'}) => {

    const [value, setValue] = useState('');
    
    return (
        <>
            <input 
                type='password' 
                placeholder={placeholder} 
                className={cn(styles.input, {
                    [styles.input_error]: error
                })}
                value={ 
                    value
                        .replace(/\s/g, '')
                        .replace(/\D/g, '')
                        .trim()
                } 
                maxLength={3}

                {...register(
                    name, 
                    {
                        required: {
                            value: true,
                            message: 'Заполните поле'
                        },
                        minLength: {
                            value: 3,
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
        </>
    )
}

export default InputCVVBANKCard;