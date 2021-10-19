import React from "react";
import './Main.scss';
import Card from '../Card/Card';

function Main () {
    return (
        <main className="main">
            <div className="main__top">
                <h1>
                    Все кроссовки
                </h1>
                <input type="text" placeholder="Поиск..."/>
            </div>    
            <ul className="cards">
                <Card />
                <Card />
                <Card />
            </ul>
        </main>
    )
};

export default Main;