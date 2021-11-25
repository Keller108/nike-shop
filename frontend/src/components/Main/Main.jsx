import React from "react";
import axios from 'axios';
import './Main.scss';
import Card from '../Card/Card.jsx';
import searchClear from '../../images/btn-remove.svg';

function Main ({
        onPlus,
        setItems,
        items,
        onCardDelete,
        onAddToFavourite,
        onDeleteFromFavourite,
    }) {
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        // fetch('https://61822cb784c2020017d89ce5.mockapi.io/items')
        //     .then(res => {
        //         return res.json();
        //         })
        //     .then(json => {
        //         setItems(json);
        //     })
        //     .catch(err => console.log(err));

        axios.get('https://61822cb784c2020017d89ce5.mockapi.io/items')
            .then((res) => {
                setItems(res.data)
            });

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

    const onFavouriteAdd = obj => {
        onAddToFavourite(obj);
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
                        name={card.name}
                        price={card.price}
                        img={card.img}
                        key={index}
                        onCardPlus={onCardAdd}
                        onCardDelete={onCardDelete}
                        onAddFavourite={onFavouriteAdd}
                        onDeleteFromFavourite={onDeleteFromFavourite}
                    />
                )}
            </ul>
        </main>
    )
};

export default Main;