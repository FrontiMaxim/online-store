import React from 'react';

import styles from './GridBooks.module.scss';

import BookCardWithCartAndCategory from '../BookCardWithCartAndCategory/BookCardWithCartAndCategory';

const GridBooks = ({ books }) => {
  return (
    <div className={styles.grid}>
      {
        !books.length ?
        <div className={styles.grid_empty}>Ничего нет...</div>
        :
        books.map(book => 
          <div className={styles.grid_item}  key={book.id}>
            <BookCardWithCartAndCategory 
              id={book.id}
              name={book.name}
              author={book.author}
              category={book.category}
              image={book.image}
              price={book.price}
              isAvailable={book.isAvailable}
            />
          </div>
        )
      }
    </div>
  )
}

export default GridBooks;