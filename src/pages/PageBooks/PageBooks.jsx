import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BASE_URL } from '../../environment';

import { setconstantListBooks, updateListBooks } from '../../store/booksSlice';

import GridBooks from '../../widgets/GridBooks/GridBooks';

import styles from './PageBooks.module.scss';

import useBooks from '../../entities/book/hooks/useBooks';

import FormSettingListBooks from '../../widgets/FormSettingListBooks/FormSettingListBooks';
import editListBySettings from '../../features/editListBySettings';

import { LuSettings } from 'react-icons/lu';

import cn from 'classnames';

import Cart from '../../widgets/Cart/Cart';
import Loader from '../../shared/components/Loader/Loader';

const PageBooks = () => {

    const dispatch = useDispatch();
    const { list, constantList } = useSelector(state => state.books);
    
    const { books, isLoading, error } = useBooks(`${BASE_URL}/books`);

    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        if(books) {
            dispatch(updateListBooks(books));
            dispatch(setconstantListBooks(books));
        }
    }, [books]);

    return (
        <div className={styles.page}>   

            <div className={cn(styles.form, {
                [styles.form_open]: openForm
            })}>
                <FormSettingListBooks 
                    handlerSetting={(settings) => dispatch(updateListBooks(editListBySettings(constantList, settings)))}
                    handlerReset={() => dispatch(updateListBooks(constantList))}
                />
            </div>
           
            <div className={styles.head}>
                <h1>Ассортимент</h1>
                
                <div className={styles.btns}>
                    <LuSettings 
                        className={styles.mobile_btn_setting} 
                        onClick={() => { setOpenForm(prev => !prev) }}
                    />
                    <Cart />
                </div>
            </div> 

            <div className={styles.grid}>
                {
                    isLoading ?
                    <div className={styles.grid_loader}>
                        <Loader />
                    </div>
                    
                    :
                    <GridBooks books={list}/>
                }
            </div> 
        </div>
    )
}

export default PageBooks;