import React from 'react';

import { Link } from 'react-router-dom';
import AppContext from '../../utils/context';
import EmptyFavourites from '../../components/EmptyFavourites/EmptyFavourites';
import Card from '../../shared/Card/Card';
import './Favourites.scss';

function Favourites({ 
    onCardAdd,
    onCardDelete,
    onAddToFavourite,
    onDislikeCard,
    isLoading,
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
                    favourites.length === 0 ? <EmptyFavourites /> :
                    <ul className="cards">{
                        favourites.map((card) => 
                            <Card
                                {...card}
                                key={card.id}
                                onCardAdd={onCardAdd}
                                onCardDelete={onCardDelete}
                                onDislikeCard={onDislikeCard}
                                onAddToFavourite={onAddToFavourite}
                                isLoading={isLoading}
                            />
                        )}
                    </ul>
                }      
            </main>
        </div>
    )
};

export default Favourites;
