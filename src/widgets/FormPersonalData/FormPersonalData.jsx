import React from 'react';

import style from './FormPersonalData.module.scss';
import { useForm } from 'react-hook-form';
import Label from '../../shared/Label/Label';
import InputText from '../../shared/InputText/InputText';
import InputPhone from '../../shared/InputPhone/InputPhone';
import InputEmail from '../../shared/InputEmail/InputEmail';
import Button from '../../shared/Button/Button';
import { useDispatch } from 'react-redux';
import { addPersonalData } from '../../store/orderSlice';

const FormPersonalData = ({ setStage, numberStage }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { isValid, errors }} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onBlur'
    });

    const onSubmit = (data) => {
        if(isValid) {
            dispatch(addPersonalData(data));
            setStage(numberStage);
        }
    }

    return (
        <form className={style.form}> 
            <Label text='ФИО'>
                <InputText 
                    name='name'
                    register={register}
                    error={errors['name']}
                    placeholder='Иванов Иван Иванович'
                />
            </Label>

            <Label text='Номер телефона'>
                <InputPhone 
                    name='phone'
                    register={register}
                    error={errors['phone']}
                />
            </Label>

            <Label text='Электронная почта'>
                <InputEmail
                    name='email'
                    register={register}
                    error={errors['email']}
                />
            </Label>

            <Button 
                value='Перейти к следующему пункту'
                mode='primary'
                handlerClick={handleSubmit(onSubmit)}
            />
        </form>
    )
}

export default FormPersonalData;