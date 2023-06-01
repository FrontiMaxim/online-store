import React from 'react';

import styles from './InputError.module.scss';

const InputError = ({ message }) => {
  return (
    <div className={styles.error}>
        { message }
    </div>
  )
}

export default InputError;