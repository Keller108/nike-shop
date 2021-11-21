import React from 'react'
import './Card.scss';

function Card({ imgPath, cardName, cardPrice, onCardPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleAddCardToDrawer = () => {
        onCardPlus({ cardName, cardPrice, imgPath});
        setIsAdded(!isAdded);
    };

    return (
        <li className="card">
            <button className="card__like-btn" type="button" aria-label="like button" />
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
                <button onClick={handleAddCardToDrawer} className={isAdded ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`} type="button" aria-label="button add"/>
            </div>
        </li>
    )
}

export default Card
