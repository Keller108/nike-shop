import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.scss';
import Card from '../Card/Card.jsx';
import AppContext from '../../utils/context';

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
                <ul className="cards">{
                        favourites.map((card, index) => 
                            <Card
                                {...card}
                                key={index}
                                onCardPlus={onPlus}
                                onCardDelete={onCardDelete}
                                onDislikeCard={onDislikeCard}
                                onAddToFavourite={onAddToFavourite}
                            />
                        )}
                    </ul>
            </main>
        </div>
    )
};

export default Favourites;
