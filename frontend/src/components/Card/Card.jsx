import React from 'react';
import './Card.scss';

function Card({
    id,
    img,
    name,
    price,
    onCardPlus,
    onCardDelete,
    onAddFavourite,
    isFavourited,
    added = false,
}) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavourite, setIsFavourite] = React.useState(false)

    const handleAddCardToDrawer = () => {
        onCardPlus({ name, price, img, id});
        setIsAdded(!isAdded);
    };

    const setCardState = (evt) => {
        onCardDelete(evt);  
        setIsAdded(!isAdded);
    };

    const handleLikeCard = () => {
        onAddFavourite({ name, price, img, id});
        setIsFavourite(!isFavourite);
    };
    
    return ( <li className="card">
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
                    <button onClick={!isAdded ? handleAddCardToDrawer : setCardState} className={isAdded ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`} type="button" aria-label="button add"/>
                </div>
            </li>
        )
}

export default Card
