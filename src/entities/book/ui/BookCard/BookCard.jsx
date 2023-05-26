import React from 'react';

import styles from './BookCard.module.scss';

import { BASE_URL } from '../../../../environment';

function BookCard({name, author, image, price}) {
  return (
    <div className={styles.card}>
        <img src={`${BASE_URL}/${image}`} className={styles.card_image} />
        <div className={styles.card_name}>
            {
                name
            }
        </div>
        <div className={styles.card_author}>
            {
                author
            }
        </div>
        <div className={styles.card_price}>
            { `${price} рублей`}
        </div>
    </div>
  )
}

export default BookCard;
