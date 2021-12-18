import React from 'react';

import './Card.scss';
import AppContext from '../../utils/context';

function Card({
    id,
    img,
    name,
    price,
    onCardPlus,
    onCardDelete,
    onAddFavourite,
    isFavourited,
}) {
    const [isFavourite, setIsFavourite] = React.useState(false);
    const {isItemAdded} = React.useContext(AppContext);

    const handleAddCardToDrawer = () => {
        onCardPlus({ name, price, img, id});
        isItemAdded(id);
    };

    console.log(name, isItemAdded(id))

    const setCardState = () => {
        onCardDelete({ id });  
    };

    const handleLikeCard = () => {
        onAddFavourite({ name, price, img, id});
        setIsFavourite(!isFavourite);
    };
    
    return ( 
        <li className="card">
            <button
                onClick={handleLikeCard}
                className={ isFavourited ? `card__like-btn card__like-btn_liked` : isFavourite ? `card__like-btn card__like-btn_liked` : `card__like-btn`}
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
                <button onClick={false ? setCardState : handleAddCardToDrawer} className={false ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`} type="button" aria-label="button add"/>
            </div>
        </li> )
};

export default Card;
