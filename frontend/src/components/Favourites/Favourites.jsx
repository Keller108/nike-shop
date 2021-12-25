import React from 'react';

import { Link } from 'react-router-dom';
import './Favourites.scss';
import Card from '../Card/Card.jsx';
import AppContext from '../../utils/context';
import EmptyFavourites from '../Favourites/EmptyFavourites/EmptyFavourites';

function Favourites({ 
    onAddToFavourite,
    onCardDelete,
    onDislikeCard,
    onPlus,

}) {

    const {favourites} = React.useContext(AppContext);

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
                {
                    favourites == 0 ? <EmptyFavourites /> :
                    <ul className="cards">{
                        favourites.map((card) => 
                            <Card
                                {...card}
                                key={card.id}
                                onCardPlus={onPlus}
                                onCardDelete={onCardDelete}
                                onDislikeCard={onDislikeCard}
                                onAddToFavourite={onAddToFavourite}
                            />
                        )}
                    </ul>
                }
            </main>
        </div>
    )
};

export default Favourites;
