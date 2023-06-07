import React, { useState, useEffect } from 'react';

import styles from './Order.module.scss';

import FormWithBankCard from '../../widgets/FormWithBankCard/FormWithBankCard';
import FormGeolacation from '../../widgets/FormGeolacation/FormGeolacation';
import FormPersonalData from '../../widgets/FormPersonalData/FormPersonalData';
import Alert from '../../shared/components/Alert/Alert';
import Dialog from '../../shared/components/Dialog/Dialog';
import Loader from '../../shared/components/Loader/Loader';

import cn from 'classnames';

import useBuy from '../../entities/order/hooks/useBuy';

import { BASE_URL } from '../../environment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../store/cartSlice';

const Order = () => {

    const [stage, setStage] = useState(1);

    const navigate = useNavigate();

    const [isOpenDialog, setIsOpenDialog] = useState(false);

    const stages = [1, 2, 3];

    const { buy, isLoading, isSuccessfully } = useBuy();

    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (stage === 0) {
            setIsOpenDialog(true);
            buy(`${BASE_URL}/orders`, order);
        }
    }, [stage]);

    useEffect(() => {
        if(isSuccessfully) {
            dispatch(clearCart());
        }
    }, [isSuccessfully])

    return (
        <div className={styles.order}>

            <Dialog 
                open={isOpenDialog}
                onClose={() => navigate('/')}    
            >
                <div>
                    {
                        isLoading ?
                        <Loader />
                        :
                        <Alert 
                            isSuccessfully={isSuccessfully} 
                            messageSuccessfully='Покупка прошла успешно'
                            messageNotSuccessfully='Произошла ошибка'
                        />
                    }
                </div>
            </Dialog>
            
            <h1>Оформление заказа</h1>

            <div className={styles.stages}>
                {
                    stages.map(s => 
                        <div className={cn(styles.stage, {
                            [styles.stage_active]: s === stage
                        })}
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