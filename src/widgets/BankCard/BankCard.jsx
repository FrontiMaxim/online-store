import React from 'react';
import styles from './BankCard.module.scss';

import InputNumberBankCard from '../../shared/components/InputNumberBankCard/InputNumberBankCard';
import InputDateBankCard from '../../shared/components/InputDateBankCard/InputDateBankCard';
import InputCVVBANKCard from '../../shared/components/InputCVVBANKCard/InputCVVBANKCard';

const BankCard = ({register, nameFieldNumber, nameFieldDate, nameFieldCVV, errors}) => {

    return (
        <div className={styles.card}>
            <div className={styles.head}>
                <span>BANK</span>
                <span>CARD</span>
            </div>
            <div className={styles.card_wrapper_input}>
                <div className={styles.card_input_number}>
                    <span className={styles.card_input_title}>Номер карты</span>
                    <InputNumberBankCard 
                        register={register} 
                        name={nameFieldNumber} 
                        error={errors[nameFieldNumber]}
                    />
                </div>

                <div className={styles.card_date_cvv}> 
                    <div className={styles.card_input_date}>
                        <span className={styles.card_input_title}>Истечение срока</span>
                        <InputDateBankCard
                            register={register} 
                            name={nameFieldDate} 
                            error={errors[nameFieldDate]}
                        />
                    </div>
                    <div className={styles.card_input_cvv}>
                        <span className={styles.card_input_title}>CVV</span>
                        <InputCVVBANKCard 
                            register={register} 
                            name={nameFieldCVV} 
                            error={errors[nameFieldCVV]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankCard;