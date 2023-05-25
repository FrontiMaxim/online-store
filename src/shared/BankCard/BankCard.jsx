import React from 'react';
import styles from './BankCard.module.scss';

function BankCard({inputNumber, inputDate, inputCVV}) {
  return (
    <div className={styles.card}>
        <div className={styles.head}>
            <span>BANK</span>
            <span>CARD</span>
        </div>
        <div className={styles.card_wrapper_input}>
            <div className={styles.card_input_number}>
                <span className={styles.card_input_title}>Номер карты</span>
                {
                    inputNumber
                }
            </div>
            <div className={styles.card_input_date}>
                <span className={styles.card_input_title}>Истечение срока</span>
                {
                    inputDate
                }
            </div>
            <div className={styles.card_input_cvv}>
                <span className={styles.card_input_title}>CVV</span>
                {
                    inputCVV
                }
            </div>
        </div>
    </div>
  )
}

export default BankCard;