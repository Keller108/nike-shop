import React from 'react';

import './Card.scss';
import AppContext from '../../utils/context';

function Card({
    id,
    img,
    name,
    price,
    object_id,
    onCardPlus,
    onCardDelete,
    onAddToFavourite,
    onDislikeCard,
}) {
    
    const {isItemAdded, isItemLiked} = React.useContext(AppContext);

    const handleAddCardToDrawer = () => {
        onCardPlus({ name, price, img, id, object_id});
    };

    const handleDeleteCardFromDrawer = () => {
        onCardDelete({ id });  
    };

    const handleLikeCard = () => {
        onAddToFavourite({ name, price, img, id, object_id});
    };

    const handleDislikeCard = () => {
        onDislikeCard({ id });
    };
    
    return ( 
        <li className="card">
            <button
                onClick={isItemLiked(id) ? handleDislikeCard : handleLikeCard}
                className={ isItemLiked(id) ? `card__like-btn card__like-btn_liked` : `card__like-btn`}
                type="button"
                aria-label="like card button"
            />
            <img src={img} alt="Фото товара"/>
            <h2>
                {name}
            </h2>
            <div className="price-container">
                <div className="price-wrapper">
                    <span> Цена:</span>
                    <b> 
                        {price} руб.
                    </b>
                </div>
                <button 
                    onClick={isItemAdded(id) ? handleDeleteCardFromDrawer : handleAddCardToDrawer}
                    className={isItemAdded(id) ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`}
                    type="button"
                    aria-label="button add"
                />
            </div>
        </li> )
};

export default Card;
