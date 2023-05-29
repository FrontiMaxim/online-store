import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BASE_URL } from '../../environment';

import { setconstantListBooks, updateListBooks } from '../../store/booksSlice';

import GridBooks from '../../widgets/GridBooks/GridBooks';

import styles from './PageBooks.module.scss';

import useBooks from '../../entities/book/hooks/useBooks';
import sortBooksByPrice from '../../features/sortBooksByPrice';
import sortBooksByName from '../../features/sortBooksByName';
import filterBooksByCategory from '../../features/filterBooksByCategory';


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
            <div className={styles.grid}>
                <GridBooks books={list}/>
                
            </div>
            <button
                    onClick={() => {
                        dispatch(updateListBooks(sortBooksByPrice(list)));
                    }}
                >
                Сортировкать по цене
            </button>
            <button
                    onClick={() => {
                        dispatch(updateListBooks(sortBooksByName(list)));
                    }}
                >
                Сортировкать по названию книги
            </button>
            <button
                    onClick={() => {
                        dispatch(updateListBooks(filterBooksByCategory(list, 'Роман')));
                    }}
                >
                Фильтр на категорию Роман
            </button>
            <button
                    onClick={() => {
                        dispatch(updateListBooks(constantList));
                    }}
                >
                Сбросить настройки
            </button>
        </div>
    )
}

export default PageBooks;