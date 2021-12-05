import React from 'react';
import { Link } from 'react-router-dom';
import './Favourites.scss';
import Card from '../Card/Card.jsx';
import AppContext from '../../utils/context';

function Favourites({ onAddToFavourite }) {

    const onFavouriteAdd = obj => {
        onAddToFavourite(obj);
    };

    const state = React.useContext(AppContext);

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
                        [].map((card, index) => 
                            <Card
                                {...card}
                                key={index}
                                isFavourited={true}
                                // onCardPlus={onCardAdd}
                                // onCardDelete={onCardDelete}
                                onAddFavourite={onFavouriteAdd}
                            />
                        )}
                    </ul>
            </main>
        </div>
    )
};

export default Favourites;
