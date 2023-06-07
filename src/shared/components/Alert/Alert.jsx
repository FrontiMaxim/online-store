import React from 'react';
import styles from './Alert.module.scss';

import { BiError } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Alert = ({ isSuccessfully, messageSuccessfully, messageNotSuccessfully }) => {
  return (
    <div className={styles.alert}>
        <div className={styles.alert_icon}>
        {
            isSuccessfully ?
            <AiOutlineCheckCircle className={styles.alert_icon_successfully} />
            :
            <BiError className={styles.alert_icon_not_successfully} />
        }
        </div>
       
        <div className={styles.alert_message}>
        {
            isSuccessfully ?
            messageSuccessfully
            :
            messageNotSuccessfully
        }
        </div>
    </div>
  )
}

export default Alert;