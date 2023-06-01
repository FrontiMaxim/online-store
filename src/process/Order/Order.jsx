import React from 'react';

import styles from './Order.module.scss';

import FormWithBankCard from '../../widgets/FormWithBankCard/FormWithBankCard';
import { useState } from 'react';

const Order = () => {

    const [stage, setStage] = useState(1);


    return (
        <div className={styles.order}>
            {
                stage === 1 && <FormWithBankCard setStage={setStage}/>
            }
            {
                stage === 2 && <div>Данные пользователя</div>
            }
        </div>
    )
}

export default Order;