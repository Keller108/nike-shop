import React from 'react';
import './CartItem.scss';

function CartItem({
    img,
    name,
    price,
    onDelete
}) {
    return (
        <li className="drawer__item">
            <img className="drawer__item-img" src={img} alt={name}/>
            <div className="drawer__item-text-wrapper">
                <p className="drawer__item-title">
                    {name}
                </p>
                <p className="drawer__item-price">
                    {price} руб.
                 </p>
            </div>
            <button 
                onClick={onDelete}
                className="drawer__remove-item-btn"
                type="button"
                aria-label="remove item from drawer"/>
        </li>
    )
}

export default CartItem;
