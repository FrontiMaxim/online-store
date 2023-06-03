import React from 'react';

import styles from './PageCart.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import calculateTotal from '../../features/calculateTotal';

import Button from '../../shared/Button/Button';
import BookCardWithDelete from '../../widgets/BookCardWithDelete/BookCardWithDelete';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../../store/orderSlice';

const PageCart = () => {

    const { books } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div>Корзина</div>
            {
                books.map(({id, name, author, image, price}) => 
                    <BookCardWithDelete 
                        key={id}
                        id={id}
                        name={name}
                        author ={author}
                        image={image}
                        price={price} 
                    />
                )
            } 
            <div>Итоговая сумма: {calculateTotal(books)}</div>
            <Button 
                value='Оформить заказ' 
                mode='primary' 
                handlerClick={() => {
                    dispatch(addBooks(books))
                    navigate('/order');
                }}
            />
        </div>
    )
}

export default PageCart;