import React from 'react';
import axios from 'axios';

import AppContext from '../../utils/context';
import CartItem from '../../shared/CartItem/CartItem';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import PlaceAnOrder from '../PlaceAnOrder/PlaceAnOrder';
import './Drawer.scss';

function Drawer({
    isOpen,
    onCartClose,
    items,
    onCardDelete,
}) {
    const { totalCount, setTotalCount, cartItems, setCartItems, } = React.useContext(AppContext);
    const [completed, setCompleted] = React.useState(false);
    const [orderID, setOrderID] = React.useState(null);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handlePlaceAnOrder = async () => {
        try {
            const { data } = await axios.post('https://61822cb784c2020017d89ce5.mockapi.io/orders/', {
                items: cartItems,
            });

            setOrderID(data.id);
            setCompleted(!completed);
            setCartItems([]);
            setTotalCount(0);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://61822cb784c2020017d89ce5.mockapi.io/cart/'+item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Ошибка при создании заказа :(')
        }
        
    }

    return (
        <div className={isOpen ? `drawer-overlay drawer-overlay_visible` : `drawer-overlay`}>
            <div className="drawer">
                <button onClick={onCartClose} className="drawer__close-btn" aria-label="close cart" type="button"/>
                    { items.length > 0 && !completed ? (
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <ul className="drawer__list">
                                    {
                                        items.map((card) => 
                                            <CartItem
                                                {...card}
                                                key={card.id}
                                                onDelete={() => onCardDelete(card)}
                                            />
                                        )
                                    }        
                                </ul>
                            </div>
                            <div className="drawer__amount-wrapper">
                                <div className="drawer__amount-content">
                                    <p className="drawer__amount-title">
                                        Итого
                                    </p>
                                    <div className="drawer__dots"></div>
                                    <p className="drawer__amout-price">
                                        {totalCount} руб.
                                    </p>
                                </div>
                                <div className="drawer__amount-content">
                                    <p className="drawer__amount-title">
                                        Налог 5%
                                    </p>
                                    <div className="drawer__dots"></div>
                                    <p className="drawer__amout-price">
                                        {totalCount / 100 * 5} руб.
                                    </p>
                                </div>
                                <button 
                                    onClick={handlePlaceAnOrder}
                                    type="button"
                                    className="drawer__pay-btn"
                                >
                                    Оформить заказ    
                                </button>    
                            </div>
                        </>
                        ) : completed ? 
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <PlaceAnOrder orderID={orderID} onCartClose={onCartClose} setCompleted={setCompleted} />
                            </div>
                        </> : (
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <EmptyCart 
                                    onCartClose={onCartClose}
                                />
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
    )
}

export default Drawer
