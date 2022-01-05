import React from 'react';

import CompleteImg from '../../images/complete-order.jpg';
import './PlaceAnOrder.scss';

function PlaceAnOrder({ onCartClose, setCompleted }) {
    return (
        <div className="drawer__complete-order">
            <img width="120" height="120" src={CompleteImg} alt="Завершенный заказ"/>
            <h2>
                Заказ оформлен!
            </h2>
            <p>
                Ваш заказ {Math.floor(Math.random() * 100 )} скоро будет передан курьерской доставке
            </p>
            <button 
                onClick={() => { 
                    onCartClose();
                    setCompleted(false)}
                }
                type="button">
                Вернуться назад
            </button>
        </div>
    )
}

export default PlaceAnOrder;
