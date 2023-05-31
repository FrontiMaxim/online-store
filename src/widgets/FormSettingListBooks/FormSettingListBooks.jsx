import React from 'react';

import styles from './FormSettingListBooks.module.scss';

import { useForm } from 'react-hook-form';

import Button from '../../shared/Button/Button';
import Label from '../../shared/Label/Label';
import Select from '../../shared/Select/Select';
import Checkbox from '../../shared/Checkbox/Checkbox';

import { dataCheckbox, dataSelectSort, dataSelectAvailable } from './data';


const FormSettingListBooks = ({handlerSetting, handlerReset}) => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = (settings) => handlerSetting(settings);

    return (
        <form className={styles.form}>

           <Label text='Сортировка списка:'>
                <Select register={register} name='typeSort' data={dataSelectSort} />
           </Label>

           <Label text='Фильтр по наличию:'>
                <Select register={register} name='available' data={dataSelectAvailable} />
           </Label>

            <div>
                <div>Фильтр категорий:</div>
                {
                    dataCheckbox.map(({key, value}) => 
                        <Label text={key} key={key}>
                            <Checkbox register={register} name='categories' value={value} />
                        </Label>
                    )
                }
            </div>
          
            <Button 
                value='Применить' 
                handlerClick={handleSubmit(onSubmit)} 
                mode='primary'
            />

            <Button 
                value='Сбросить настройки' 
                handlerClick={() => {
                    reset();
                    handlerReset();
                }} 
                mode='default'
                type='reset'
            />
        </form>
    )
}

export default FormSettingListBooks