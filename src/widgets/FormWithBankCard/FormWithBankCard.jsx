import React from 'react';

import styles from './FormWithBankCard.module.scss';

import BankCard from '../BankCard/BankCard';
import Button from '../../shared/components/Button/Button';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBankCard } from '../../store/orderSlice';

const FormWithBankCard = ({ setStage, numberStage }) => {

    const dispatch = useDispatch();
    
    const { register, handleSubmit, formState : { errors, isValid} } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onBlur'
    });

    const onSubmit= (data) => {
       
        if(isValid) {
            setStage(numberStage);
            dispatch(addBankCard(data));
        }   
    }

    return (
        <form className={styles.form}>
            <div className={styles.form_bank}>
                <BankCard 
                    register={register} 
                    nameFieldNumber='number'
                    nameFieldDate='date'
                    nameFieldCVV='cvv'
                    errors={errors}
                />
            </div>
            <div className={styles.form_btn}>
                <Button 
                    value='Оплатить заказ' 
                    mode='primary' 
                    handlerClick={handleSubmit(onSubmit)}
                    borderRadius={false}
                />
            </div>
        </form>
    )
}

export default FormWithBankCard;