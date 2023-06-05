import React from 'react';

import styles from './Label.module.scss';

const Label = ({ children, text }) => {
  return (
    <label className={styles.label}>
        <div className={styles.text}>{ text }</div>
        <div className={styles.children}>
        {
            children
        }
        </div>
    </label>
  )
}

export default Label;