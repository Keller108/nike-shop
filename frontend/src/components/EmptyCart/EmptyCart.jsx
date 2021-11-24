import React from 'react';
import './EmptyCart.scss';
import box from '../../images/empty-cart.jpg';

function EmptyCart({ onCartClose }) {
    return (
        <div className="drawer__empty-wrapper">
            <img width="120" height="120" src={box} alt="empty box"/>
            <h2>
            Ваша корзина пуста
            </h2>
            <p>
            Чтобы оставить заказ, необходимо добавить товар в корзину
            </p>
            <button onClick={onCartClose} type="button">
            Вернуться назад
            </button>
        </div>
    )
}

export default EmptyCart;