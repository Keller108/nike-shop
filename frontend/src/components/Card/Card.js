import React from 'react'
import './Card.scss';

function Card({imgPath, cardName, cardPrice}) {
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
                <button className="card__btn-plus" type="button" aria-label="button add"/>
            </div>
        </li>
    )
}

export default Card
