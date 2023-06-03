import React from 'react';

import styles from './FormWithBankCard.module.scss';

import BankCard from '../BankCard/BankCard';
import Button from '../../shared/Button/Button';

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
        <form className={styles.from}>
            <BankCard 
                register={register} 
                nameFieldNumber='number'
                nameFieldDate='date'
                nameFieldCVV='cvv'
                errors={errors}
            />
            <Button 
                value='Оплатить заказ' 
                mode='primary' 
                handlerClick={handleSubmit(onSubmit)}
            />
        </form>
    )
}

export default FormWithBankCard;