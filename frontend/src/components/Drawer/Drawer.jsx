import React from 'react'
import './Drawer.scss';
import CardItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart';
import PlaceAnOrder from '../../features/PlaceAnOrder/PlaceAnOrder';
import AppContext from '../../utils/context';

function Drawer({ isOpen, onCartClose, onCardDelete }) {

    const [isCompleted, setIsCompleted] = React.useState(false);
    const { cartItems } = React.useContext(AppContext);

    const handleComplete = () => {
        setIsCompleted(true);
    };

    return (
        <div className={isOpen ? `drawer-overlay drawer-overlay_visible` : `drawer-overlay`}>
            <div className="drawer">
                <button onClick={onCartClose} className="drawer__close-btn" aria-label="close cart" type="button"/>
                    { cartItems ? (
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <ul className="drawer__list">
                                    {
                                        cartItems.map((card, index) => 
                                            <CardItem
                                                {...card}
                                                key={index}
                                                onDelete={() => onCardDelete(card.id)}
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
                                        21 432 руб.
                                    </p>
                                </div>
                                <div className="drawer__amount-content">
                                    <p className="drawer__amount-title">
                                        Налог 5%
                                    </p>
                                    <div className="drawer__dots"></div>
                                    <p className="drawer__amout-price">
                                        1074 руб.
                                    </p>
                                </div>
                                <button 
                                    type="button"
                                    className="drawer__pay-btn"
                                    onClick={handleComplete}
                                >
                                    Оформить заказ    
                                </button>    
                            </div>
                        </>
                        ) : isCompleted ? (
                            <>
                                <div className="drawer__top-content-wrapper">
                                    <h2 className="drawer__title">
                                        Корзина
                                    </h2>
                                    <PlaceAnOrder 
                                        onCartClose={onCartClose}
                                        isCompleted={isCompleted}
                                    />
                                </div>
                            </>
                        ) : (
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
