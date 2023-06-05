import React from 'react';

import styles from './FormSettingListBooks.module.scss';

import { useForm } from 'react-hook-form';

import Button from '../../shared/components/Button/Button';
import Label from '../../shared/components/Label/Label';
import Select from '../../shared/components/Select/Select';
import Checkbox from '../../shared/components/Checkbox/Checkbox';

import { dataCheckbox, dataSelectSort, dataSelectAvailable } from './data';


const FormSettingListBooks = ({handlerSetting, handlerReset}) => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = (settings) => handlerSetting(settings);

    return (
        <form className={styles.form}>

            <div className={styles.from_input_group}>
                <Label text='Сортировка списка:'>
                    <Select register={register} name='typeSort' data={dataSelectSort} />
                </Label>
            </div>
            
            <div className={styles.from_input_group}>
                <Label text='Фильтр по наличию:'>
                    <Select register={register} name='available' data={dataSelectAvailable} />
                </Label>
            </div>

            <div className={styles.from_input_group}>
                <Label text='Фильтр категорий:' />
                {
                    dataCheckbox.map(({key, value}) => 
                        <div key={key} className={styles.from_input_group_checkbox}>
                            <Checkbox register={register} name='categories' value={value} />
                            <span>{key}</span>
                        </div>
                    )
                }
            </div>

            <div className={styles.from_button}>
                <Button 
                    value='Применить' 
                    handlerClick={handleSubmit(onSubmit)} 
                    mode='primary'
                />
            </div>
          
            
            <div className={styles.from_button}>
                <Button 
                    value='Сбросить настройки' 
                    handlerClick={() => {
                        reset();
                        handlerReset();
                    }} 
                    mode='default'
                    type='reset'
                />
            </div>
           
        </form>
    )
}

export default FormSettingListBooks