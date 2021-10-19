import React from "react";
import './Main.scss';
import Card from '../Card/Card';
import cardOneImg from '../../images/sneakers/1.jpg';
import cardTwoImg from '../../images/sneakers/2.jpg';
import cardThreeImg from '../../images/sneakers/3.jpg';
import cardFourImg from '../../images/sneakers/4.jpg';

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
                <Card 
                    imgPath={cardOneImg}
                />
                <Card 
                    imgPath={cardTwoImg}
                />
                <Card 
                    imgPath={cardThreeImg}
                />
                <Card 
                    imgPath={cardFourImg}
                />
                <Card 
                    imgPath={cardFourImg}
                />
                <Card 
                    imgPath={cardFourImg}
                />
            </ul>
        </main>
    )
};

export default Main;