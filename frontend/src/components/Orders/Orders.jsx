import React from 'react';

import {Link} from 'react-router-dom';
import AppContext from '../../utils/context.js';
import Card from '../Card/Card.jsx';
import EmptyOrders from './EmptyOrders/EmptyOrders';

function Orders({
        onPlus,
        onCardDelete,
        onAddToFavourite,
        onDislikeCard,
    }) {
    const { cartItems, favourites } = React.useContext(AppContext);

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
                        Мои покупки
                    </h1>
                </div>
                {cartItems == 0 ? <EmptyOrders /> : 
                    <ul className="cards">{
                        cartItems.map((card) => 
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
}

export default Orders
