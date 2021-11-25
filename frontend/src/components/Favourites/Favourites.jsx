import React from 'react'
import { Link } from 'react-router-dom';
import './Favourites.scss';
import Card from '../Card/Card.jsx';

function Favourites({ items, onDeleteFromFavourite }) {

    return (
        <div>
            <main className="main">
                <div className="main__top main__top_left">
                    <Link to="/">
                        <button
                            className="main__btn-back"
                            type="button"
                        >
                        </button>   
                    </Link>
                    <h1>
                        Мои закладки
                    </h1>
                </div>
                <ul className="cards">{
                        items.map((card, index) => 
                            <Card
                                card={card}
                                name={card.name}
                                price={card.price}
                                img={card.img}
                                key={index}
                                isFavourited={true}
                                // onCardPlus={onCardAdd}
                                // onCardDelete={onCardDelete}
                                // onAddFavourite={onFavouriteAdd}
                            />
                        )}
                    </ul>
            </main>
        </div>
    )
};

export default Favourites;
