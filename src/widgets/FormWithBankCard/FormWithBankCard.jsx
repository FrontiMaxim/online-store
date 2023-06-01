import React from 'react';

import styles from './FormWithBankCard.module.scss';

import BankCard from '../BankCard/BankCard';
import Button from '../../shared/Button/Button';

import { useForm } from 'react-hook-form';

const FormWithBankCard = ({ setStage }) => {

    const { register, handleSubmit, formState : { errors, isValid} } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onBlur'
    });

    const onSubmit= (data) => {
        console.log(data);

        if(isValid) {
            setStage(2);
        }   
    }

    return (
        <form className={styles.from}>
            <BankCard 
                register={register} 
                nameFieldNumber='numberBankCard'
                nameFieldDate='dateBankCard'
                nameFieldCVV='cvvBankCard'
                errors={errors}
            />
            <Button 
                value='Перейти к следующему пункту' 
                mode='primary' 
                handlerClick={handleSubmit(onSubmit)}
            />
        </form>
    )
}

export default FormWithBankCard;