import React, { useState, useEffect } from 'react';

import styles from './Order.module.scss';

import FormWithBankCard from '../../widgets/FormWithBankCard/FormWithBankCard';

import FormGeolacation from '../../widgets/FormGeolacation/FormGeolacation';

import FormPersonalData from '../../widgets/FormPersonalData/FormPersonalData';

import cn from 'classnames';

const Order = () => {

    const [stage, setStage] = useState(1);

    const stages = [1, 2, 3];

    useEffect(() => {
        if (stage === 0) {
            console.log('Заказ оформлен');
        }
    }, [stage]);

    return (
        <div className={styles.order}>

            <h1>Оформление заказа</h1>

            <div className={styles.stages}>
                {
                    stages.map(s => 
                        <div className={cn(styles.stage, {
                            [styles.stage_active]: s === stage
                        })}
                            onClick={() => setStage(s)}
                            key={s}
                        >
                            {s}
                        </div>
                    )
                }
            </div>

            <div className={styles.content}>
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
            
        </div>
    )
}

export default Order;