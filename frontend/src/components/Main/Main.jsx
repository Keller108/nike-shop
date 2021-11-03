import React from "react";
import './Main.scss';
import Card from '../Card/Card.jsx';

function Main () {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        itemsApi()
    }, [])

    function itemsApi() {
        fetch('https://61822cb784c2020017d89ce5.mockapi.io/items')
            .then(res => {
                return res.json();
                })
            .then(json => {
                setItems(json);
            })
            .catch(err => console.log(err));
    }

    return (
        <main className="main">
            <div className="main__top">
                <h1>
                    Все кроссовки
                </h1>
                <input type="text" placeholder="Поиск..."/>
            </div>    
            <ul className="cards">{items.map((card, index) => 
                    <Card
                        cardName={card.name}
                        cardPrice={card.price}
                        imgPath={card.img}
                        key={index}
                    />
                )}
            </ul>
        </main>
    )
};

export default Main;