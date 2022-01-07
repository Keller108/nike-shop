import React from 'react';

import AppContext from '../../utils/context';
import {Link} from 'react-router-dom';
import Card from '../../shared/Card/Card';
import EmptyOrders from '../../components/EmptyOrders/EmptyOrders';

function Orders({
    onCardAdd,
    onCardDelete,
    onAddToFavourite,
    onDislikeCard,
    isLoading,
}) {
    const { cartItems, orders } = React.useContext(AppContext);
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
                {
                    orders.length === 0 ? <EmptyOrders /> :
                    <ul className="cards">{
                        orders.map((card) => 
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
}

export default Orders
