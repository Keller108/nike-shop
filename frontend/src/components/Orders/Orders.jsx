import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../Card/Card.jsx';

function Orders({items, onFavouriteAdd}) {
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
                <ul className="cards">{
                        items.map((card, index) => 
                            <Card
                                {...card}
                                key={index}
                                isFavourited={false}
                                // onCardPlus={onCardAdd}
                                // onCardDelete={onCardDelete}
                                onAddFavourite={onFavouriteAdd}
                            />
                        )}
                    </ul>
            </main>
        </div>
    )
}

export default Orders
