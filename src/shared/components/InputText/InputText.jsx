import React from 'react';

import styles from './InputText.module.scss';

import cn from 'classnames';

import InputError from '../InputError/InputError';

const InputText = ({name, register, error, placeholder='текст'}) => {

  return (
    <div>
      <input 
        type='text' 
        
        placeholder={placeholder}

        className={cn(styles.input, {
          [styles.input_error]: error
        })}

        {...register(name, {
              required: {
                value: true,
                message: 'Заполните поле'
              },
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

export default InputText;