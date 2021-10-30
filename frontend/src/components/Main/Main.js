import React from "react";
import './Main.scss';
import Card from '../Card/Card';
import cardOneImg from '../../images/sneakers/1.jpg';
import cardTwoImg from '../../images/sneakers/2.jpg';
import cardThreeImg from '../../images/sneakers/3.jpg';
import cardFourImg from '../../images/sneakers/4.jpg';

function Main () {

    const cardsArray = [
        {
          name: 'Мужские Кроссовки Nike Blazer Mid Suede',
          price: 12999,
        },
        {
          name: 'Мужские Кроссовки Nike Air Max 270',
          price: 15600,
        }
      ]
    
    return (
        <main className="main">
            <div className="main__top">
                <h1>
                    Все кроссовки
                </h1>
                <input type="text" placeholder="Поиск..."/>
            </div>    
            <ul className="cards">{cardsArray.map((obj) => 
                    <Card/>
                )}
            </ul>
        </main>
    )
};

export default Main;

                {/* <Card 
                    imgPath={cardOneImg}
                />
                <Card 
                    imgPath={cardTwoImg}
                />
                <Card 
                    imgPath={cardThreeImg}
                /> */}