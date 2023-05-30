import React from 'react';

import BookCard from '../../entities/book/ui/BookCard/BookCard';

import styles from './BookCardWithCartAndCategory.module.scss';
import Button from '../../shared/Button/Button';

import { useDispatch } from 'react-redux';
import { addBook } from '../../store/cartSlice';

function BookCardWithCartAndCategory({id, name, author, category, image, price, isAvailable}) {

    const dispatch = useDispatch();

    return (
        <div className={styles.card}>
            <div className={styles.card_category}>
                { category }
            </div> 
            <BookCard 
                name={name} 
                author={author} 
                image={image} 
                price={price}
            />
            <div className={styles.card_cart}>
                {
                    isAvailable ? 
                    <Button 
                        value='Добавить в корзину' 
                        mode='primary'
                        handlerClick={() =>  dispatch(addBook({id, image, name, author, price}))}
                    />
                    :
                    <div className={styles.card_not_available}>Нет в наличии</div>
                }
               
            </div>
        </div>
    )
}


export default BookCardWithCartAndCategory;