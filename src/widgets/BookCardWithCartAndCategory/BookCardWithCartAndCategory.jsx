import React from 'react';

import BookCard from '../../entities/book/ui/BookCard/BookCard';

import styles from './BookCardWithCartAndCategory.module.scss';
import Button from '../../shared/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../store/cartSlice';
import checkBookInCart from '../../features/checkBookInCart';

function BookCardWithCartAndCategory({id, name, author, category, image, price, isAvailable}) {

    const dispatch = useDispatch();
    const { books } = useSelector(state => state.cart);

    const inCart = checkBookInCart(books, id);

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
                    isAvailable && !inCart &&
                    <Button 
                        value={inCart ? 'В корзине' : 'Добавить в корзину'} 
                        mode='primary'
                        handlerClick={() =>  dispatch(addBook({id, image, name, author, price}))}
                    />
                }
                {
                    !isAvailable &&
                    <div className={styles.card_not_available}>Нет в наличии</div>
                }
                {
                    inCart &&
                    <div className={styles.card_in_cart}>В корзине</div>
                }
               
            </div>
        </div>
    )
}


export default BookCardWithCartAndCategory;