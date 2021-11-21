import React from "react";
import './Main.scss';
import Card from '../Card/Card.jsx';
import searchClear from '../../images/btn-remove.svg';

function Main ({ onPlus }) {
    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [isAdded, setIsAdded] = React.useState(false);

    React.useEffect(() => {
        fetch('https://61822cb784c2020017d89ce5.mockapi.io/items')
            .then(res => {
                return res.json();
                })
            .then(json => {
                setItems(json);
            })
            .catch(err => console.log(err));
    }, []);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const clearInput = (event) => {
        setSearchValue(event.target.value = '');
    }

    const onCardAdd = obj => {
        onPlus(obj);
    }

    return (
        <main className="main">
            <div className="main__top">
                <h1>
                    {searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кросовки'}
                </h1>
                {searchValue && <img onClick={clearInput} src={searchClear} className="main__clear-btn" alt="clear btn"/>}
                <input
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    type="text"
                    placeholder="Поиск..."
                />
            </div>    
            <ul className="cards">{items
                .filter((item) => item.name.toLowerCase().includes(searchValue))
                .map((card, index) => 
                    <Card
                        cardName={card.name}
                        cardPrice={card.price}
                        imgPath={card.img}
                        key={index}
                        onCardPlus={onCardAdd}
                    />
                )}
            </ul>
        </main>
    )
};

export default Main;