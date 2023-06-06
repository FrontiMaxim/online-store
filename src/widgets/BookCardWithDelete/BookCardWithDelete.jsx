import React from 'react';

import styles from './BookCardWithDelete.module.scss';

import { useDispatch } from 'react-redux';

import BookCard from '../../entities/book/ui/BookCard/BookCard';
import Button from '../../shared/components/Button/Button';

import { deleteBook } from '../../store/cartSlice';

const BookCardWithDelete = ({id, name, author, image, price}) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.card}>
            <div className={styles.card_information}>
                <BookCard 
                    name={name} 
                    author={author} 
                    image={image} 
                    price={price}
                />
            </div>

            <div className={styles.card_delete} >
                <Button value='Убрать из корзины'
                    handlerClick={() => dispatch(deleteBook(id))}
                    mode='primary'
                />
            </div>
            
           
        </div>
    )
}

export default BookCardWithDelete;