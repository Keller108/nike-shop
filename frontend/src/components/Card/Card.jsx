import React from 'react'
import './Card.scss';

function Card({ imgPath, cardName, cardPrice, onCardPlus, onCardDelete, onAddFavourite }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavourite, setIsFavourite] = React.useState(false)

    const handleAddCardToDrawer = () => {
        onCardPlus({ cardName, cardPrice, imgPath});
        setIsAdded(!isAdded);
    };

    const setCardState = (evt) => {
        onCardDelete(evt);
        setIsAdded(!isAdded);
    }

    const handleLikeCard = () => {
        onAddFavourite({ cardName, cardPrice, imgPath});
        setIsFavourite(!isFavourite)
    };

    return (
        <li className="card">
            <button
                onClick={handleLikeCard}
                className={isFavourite ? `card__like-btn card__like-btn_liked` : `card__like-btn`}
                type="button"
                aria-label="like card button"
            />
            <img src={imgPath} alt="Фото товара"/>
            <h2>
                {cardName}
            </h2>
            <div className="price-container">
                <div className="price-wrapper">
                    <span> Цена:</span>
                    <b> 
                        {cardPrice} руб.
                    </b>
                </div>
                <button onClick={!isAdded ? handleAddCardToDrawer : setCardState} className={isAdded ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`} type="button" aria-label="button add"/>
            </div>
        </li>
    )
}

export default Card
