import React from 'react';

import styles from './Cart.module.scss';

import { BsCart } from 'react-icons/bs';
import Badge from '../../shared/Badge/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { countBooks }  = useSelector(state => state.cart);
    const navigate = useNavigate();

    return (
        <div 
            className={styles.cart}
            onClick={() => navigate('/cart')}
        >
             <Badge value={countBooks}>
                <BsCart className={styles.cart_icon}/>    
            </Badge>
            <span className={styles.cart_title}>Корзина</span>
        </div>
    )
}

export default Cart;