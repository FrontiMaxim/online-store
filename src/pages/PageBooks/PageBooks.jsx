import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BASE_URL } from '../../environment';

import { setconstantListBooks, updateListBooks } from '../../store/booksSlice';

import GridBooks from '../../widgets/GridBooks/GridBooks';

import styles from './PageBooks.module.scss';

import useBooks from '../../entities/book/hooks/useBooks';

import FormSettingListBooks from '../../widgets/FormSettingListBooks/FormSettingListBooks';
import editListBySettings from '../../features/editListBySettings';

import Cart from '../../widgets/Cart/Cart';

const PageBooks = () => {

    const dispatch = useDispatch();
    const { list, constantList } = useSelector(state => state.books);
    
    const [books, error] = useBooks(`${BASE_URL}/books`);

    useEffect(() => {
        if(books) {
            dispatch(updateListBooks(books));
            dispatch(setconstantListBooks(books));
        }
    }, [books]);

    return (
        <div className={styles.page}>   
            <FormSettingListBooks 
                handlerSetting={(settings) => dispatch(updateListBooks(editListBySettings(constantList, settings)))}
                handlerReset={() => dispatch(updateListBooks(constantList))}
            />

            <div className={styles.cart}>
                <Cart />
            </div>

            <div className={styles.grid}>
                <GridBooks books={list}/>
            </div>
        </div>
    )
}

export default PageBooks;