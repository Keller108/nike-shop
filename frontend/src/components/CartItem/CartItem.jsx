import React from 'react';
import './CartItem.scss';

function CartItem({itemImage, itemTitle, itemPrice}) {
    return (
        <li className="drawer__item">
            <img className="drawer__item-img" src={itemImage} alt={itemTitle}/>
            <div className="drawer__item-text-wrapper">
                <p className="drawer__item-title">
                    {itemTitle}
                </p>
                <p className="drawer__item-price">
                    {itemPrice} руб.
                 </p>
            </div>
            <button className="drawer__remove-item-btn" type="button" aria-label="remove item from drawer"/>
        </li>
    )
}

export default CartItem;
