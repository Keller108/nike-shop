import React from "react";
import './Main.scss';
import Card from '../Card/Card.jsx';
import searchClear from '../../images/btn-remove.svg';

function Main ({
        onPlus,
        cartItems,
        setItems,
        items,
        onCardDelete,
        onAddToFavourite,
    }) {
    const [searchValue, setSearchValue] = React.useState('');

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
                        {...card}
                        key={index}
                        onCardPlus={onCardAdd}
                        onCardDelete={onCardDelete}
                        onAddFavourite={onFavouriteAdd}
                        added={cartItems.some(item => Number(item.id) === Number(card.id))}
                    />
                )}
            </ul>
        </main>
    )
};

export default Main;