import React from 'react';

import styles from './FormPersonalData.module.scss';
import { useForm } from 'react-hook-form';
import Label from '../../shared/components/Label/Label';
import InputText from '../../shared/components/InputText/InputText';
import InputPhone from '../../shared/components/InputPhone/InputPhone';
import InputEmail from '../../shared/components/InputEmail/InputEmail';
import Button from '../../shared/components/Button/Button';
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
        <form className={styles.form}> 

            <div className={styles.form_input_group}>
                <Label text='ФИО'>
                    <InputText 
                        name='name'
                        register={register}
                        error={errors['name']}
                        placeholder='Иванов Иван Иванович'
                    />
                </Label>
            </div>
            
            <div className={styles.form_input_group}>
                <Label text='Номер телефона'>
                    <InputPhone 
                        name='phone'
                        register={register}
                        error={errors['phone']}
                    />
                </Label>
            </div>
           
            <div className={styles.form_input_group}>
                <Label text='Электронная почта'>
                    <InputEmail
                        name='email'
                        register={register}
                        error={errors['email']}
                    />
                </Label>
            </div>
            
            <div className={styles.form_btn}>
                <Button 
                    value='Сохранить и продолжить'
                    mode='primary'
                    handlerClick={handleSubmit(onSubmit)}
                    borderRadius={false}
                />
            </div>
            
        </form>
    )
}

export default FormPersonalData;