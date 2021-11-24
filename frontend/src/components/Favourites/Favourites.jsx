import React from 'react'
import './Favourites.scss';

function Favourites() {
    return (
        <div>
            <main className="main">
                <div className="main__top main__top_left">
                    <button
                        className="main__btn-back"
                        type="button"
                    >
                    </button>    
                    <h1>
                        Мои закладки
                    </h1>
                </div>
            </main>
        </div>
    )
};

export default Favourites;
