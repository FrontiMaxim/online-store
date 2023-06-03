import React, { useState, useEffect } from 'react';

import styles from './InputPhone.module.scss';

import cn from 'classnames';

import InputError from '../InputError/InputError';

import formatPhone from '../../features/formatPhone';

const InputPhone = ({name, register, error, placeholder='+7(xxx)-xxx-xxxx'}) => {

  const [value, setValue] = useState('');

  const [selectionStart, setSelectionStart] = useState(0);

  
  useEffect(() => {

    const input = document.getElementById('inputPhone');

    const handlerBackspace = (e) => {
      if(e.code === 'Backspace') {
        e.selectionStart = selectionStart;
        e.selectionEnd =  selectionStart;
      }
    }

    input.addEventListener('keydown', handlerBackspace);

    return () => {
      input.removeEventListener('keydown', handlerBackspace);
    } 
  }, []);

  
  return (
    <> 
      <input 
        type='tel' 
        id='inputPhone'

        placeholder={placeholder}

        className={cn(styles.input, {
          [styles.input_error]: error
        })}

        value={ 
          value
        } 

        maxLength={16}

        {...register(name, {
              required: {
                value: true,
                message: 'Заполните поле'
              },

              minLength: {
                value: 16,
                message: 'Недостаточно количество символов'
              },

              onChange: (e) => {
                setValue(formatPhone(e.target.value));  
                setSelectionStart(e.target.selectionStart);              
              },
        })} 
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

export default InputPhone;