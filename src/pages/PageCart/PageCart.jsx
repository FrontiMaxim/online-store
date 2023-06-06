import React from 'react';

import styles from './PageCart.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import calculateTotal from '../../features/calculateTotal';

import Button from '../../shared/components/Button/Button';
import BookCardWithDelete from '../../widgets/BookCardWithDelete/BookCardWithDelete';
import { useNavigate } from 'react-router-dom';
import { addBooks } from '../../store/orderSlice';

const PageCart = () => {

    const { books } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h1 className={styles.page_head}>Корзина</h1>

            <div className={styles.page_sum}>
                <h3>Итоговая сумма:</h3>
                <span>{` ${calculateTotal(books)} `}&#8381;</span>
                
            </div>

            <div className={styles.page_list}>
                {
                    books.map(({id, name, author, image, price}) => 
                    <div className={styles.page_list_item}>
                        <BookCardWithDelete 
                            key={id}
                            id={id}
                            name={name}
                            author ={author}
                            image={image}
                            price={price} 
                        />
                    </div> 
                    )
                } 
            </div>
           
            {
                books.length !== 0 && 

                <div className={styles.page_btn}>
                    <Button 
                        value='Оформить заказ' 
                        mode='primary' 
                        handlerClick={() => {
                            dispatch(addBooks(books))
                            navigate('/order'); 
                        }}
                        borderRadius={false}
                    />
                </div>
            }
            
        </div>
    )
}

export default PageCart;