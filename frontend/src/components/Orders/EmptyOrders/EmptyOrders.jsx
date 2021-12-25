import React from 'react';

import './EmptyOrders.scss';
import smilePath from '../../../images/smile-down.svg';

function EmptyOrders() {
    return (
        <div className="empty-orders">
            <div>
                <img src={smilePath} alt="Грустный смайл"/>
                <h2>
                    У вас нет заказов
                </h2>
                <p>
                    Ваша корзина пуста. 
                    Оформите хотя бы один заказ.
                </p>
            </div>
        </div>
    )
}

export default EmptyOrders
