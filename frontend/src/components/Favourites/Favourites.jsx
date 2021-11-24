import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Favourites.scss';
import Card from '../Card/Card.jsx';

function Favourites({ favouries, setFavourites}) {

    React.useEffect(() => {
        axios.get('https://61822cb784c2020017d89ce5.mockapi.io/favourites')
                .then((res) => {
                    setFavourites(res.data)
                });
      },[]);

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
                    <ul className="cards">{
                        favouries.map((card, index) => 
                            <Card
                                cardName={card.name}
                                cardPrice={card.price}
                                imgPath={card.img}
                                key={index + 1}
                                // onCardPlus={onCardAdd}
                                // onCardDelete={onCardDelete}
                                // onAddFavourite={onFavouriteAdd}
                            />
                        )}
                    </ul>
                </div>
            </main>
        </div>
    )
};

export default Favourites;
