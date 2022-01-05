import React from 'react';

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
    const { totalCount } = React.useContext(AppContext);
    const [completed, setCompleted] = React.useState(false);

    function handlePlaceAnOrder() {
        setCompleted(!completed);
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
                                <PlaceAnOrder onCartClose={onCartClose} setCompleted={setCompleted} />
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
