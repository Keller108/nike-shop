import React from "react";
import './Main.scss';
import Card from '../Card/Card.jsx';
import AppContext from '../../utils/context';
import searchClear from '../../images/btn-remove.svg';
import ContentLoader from "react-content-loader";

function Main ({
        onPlus,
        cartItems,
        setItems,
        items,
        onCardDelete,
        onAddToFavourite,
        isLoading,
    }) {
    const [searchValue, setSearchValue] = React.useState('');
    
    const {isItemAdded} = React.useContext(AppContext);

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const clearInput = (event) => {
        setSearchValue(event.target.value = '');
    };

    const onCardAdd = obj => {
        onPlus(obj);
        isItemAdded(obj.id);
    };

    const onFavouriteAdd = obj => {
        onAddToFavourite(obj);
    };

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue));

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
            <ul className="cards">{ isLoading ? ([...Array(8)].map((item, index) => 
                <ContentLoader 
                    speed={2}
                    width={150}
                    height={200}
                    viewBox="0 0 155 260"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    key={index }
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="108" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="0" y="132" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="114" y="165" rx="10" ry="10" width="32" height="32" /> 
                    <rect x="0" y="171" rx="10" ry="10" width="60" height="24" />
                </ContentLoader>
            )): (
                    filteredItems.map((card, index) => 
                    <Card
                        {...card}
                        key={index}
                        onCardPlus={onCardAdd}
                        onCardDelete={onCardDelete}
                        onAddFavourite={onFavouriteAdd}
                        isLoading={isLoading}
                        isAdded={isItemAdded}
                    />
                ))}
            </ul>
        </main>
    )
};

export default Main;