import React from 'react';

import styles from './InputEmail.module.scss';

import cn from 'classnames';

import InputError from '../InputError/InputError';

const InputEmail = ({name, register, error, placeholder='email@address.com'}) => {

  return (
    <div>
      <input 
        type='email' 
        
        placeholder={placeholder}

        className={cn(styles.input, {
          [styles.input_error]: error
        })}

        {...register(name, {
              required: {
                value: true,
                message: 'Заполните поле'
              },
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                message: 'Неверный формат почты'
              }
        })} 
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

export default InputEmail;