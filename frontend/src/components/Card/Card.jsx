import React from 'react';
import ContentLoader from "react-content-loader";
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
    isLoading,
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
    
    return ( isLoading ? 
                <ContentLoader 
                    speed={2}
                    width={150}
                    height={200}
                    viewBox="0 0 150 200"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="108" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="0" y="132" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="114" y="165" rx="10" ry="10" width="32" height="32" /> 
                    <rect x="0" y="171" rx="10" ry="10" width="60" height="24" />
                </ContentLoader> : (
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
                        <button onClick={!isAdded ? handleAddCardToDrawer : setCardState} className={isAdded ? `card__btn-plus card__btn-plus_added` : `card__btn-plus`} type="button" aria-label="button add"/>
                    </div>
                </li>
        )
    )
}

export default Card
