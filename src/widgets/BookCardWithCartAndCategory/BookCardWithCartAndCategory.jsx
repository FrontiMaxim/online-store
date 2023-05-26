import React from 'react';

import BookCard from '../../entities/book/ui/BookCard/BookCard';

import styles from './BookCardWithCartAndCategory.module.scss';
import Button from '../../shared/Button/Button';

function BookCardWithCartAndCategory({
    id,
    name,
    author,
    category,
    image, 
    price
}) {
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
            <Button value='Добавить в корзину' mode='primary'/>
        </div>
        
    </div>
  )
}

export default BookCardWithCartAndCategory;