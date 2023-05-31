import React from 'react';

import styles from './BookCardWithDelete.module.scss';

import { useDispatch } from 'react-redux';

import BookCard from '../../entities/book/ui/BookCard/BookCard';

import { MdDeleteOutline } from 'react-icons/md';
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

            <MdDeleteOutline 
                className={styles.card_delete} 
                onClick={() => dispatch(deleteBook(id))}
            />
        </div>
    )
}

export default BookCardWithDelete;