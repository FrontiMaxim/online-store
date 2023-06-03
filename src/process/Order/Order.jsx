import React from 'react';

import styles from './Order.module.scss';

import FormWithBankCard from '../../widgets/FormWithBankCard/FormWithBankCard';
import { useState } from 'react';
import FormGeolacation from '../../widgets/FormGeolacation/FormGeolacation';
import { useEffect } from 'react';
import FormPersonalData from '../../widgets/FormPersonalData/FormPersonalData';

const Order = () => {

    const [stage, setStage] = useState(1);

    useEffect(() => {
        if (stage === 0) {
            console.log('Заказ оформлен');
        }
    }, [stage]);

    return (
        <div className={styles.order}>
            
            {
                stage === 1 && <FormPersonalData setStage={setStage} numberStage={2} />
            }
            {
                stage === 2 && <FormGeolacation setStage={setStage} numberStage={3} />
            }
            {
                stage === 3 && <FormWithBankCard setStage={setStage} numberStage={0}/>
            }
            
        </div>
    )
}

export default Order;