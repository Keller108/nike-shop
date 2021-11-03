import React from "react";
import './Main.scss';
import Card from '../Card/Card.jsx';
import {cardsArray} from '../../utils/products.js';

function Main () {
    
    return (
        <main className="main">
            <div className="main__top">
                <h1>
                    Все кроссовки
                </h1>
                <input type="text" placeholder="Поиск..."/>
            </div>    
            <ul className="cards">{cardsArray.map((obj) => 
                    <Card cardName={obj.name} cardPrice={obj.price} imgPath={obj.img}/>
                )}
            </ul>
        </main>
    )
};

export default Main;