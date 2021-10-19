import React from 'react'
import './Card.scss';

function Card({imgPath}) {
    return (
        <li className="card">
            <img src={imgPath} alt="Фото товара"/>
            <h2>
                Мужские Кроссовки Nike Blazer Mid Suede
            </h2>
            <div className="price-container">
                <div className="price-wrapper">
                    <span> Цена:</span>
                    <b> 
                        12 999 руб.
                    </b>
                </div>
                <button className="card__btn-plus" type="button" aria-label="button add"/>
            </div>
        </li>
    )
}

export default Card
