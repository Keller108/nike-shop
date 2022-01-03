import React from 'react';

import smileSadPath from '../../../images/smile-sad.svg';
import '../../Orders/EmptyOrders/EmptyOrders.scss';

function EmptyFavourites() {
    return (
        <div className="empty-orders">
            <div>
                <img src={smileSadPath} alt="Грустный смайл"/>
                <h2>
                    У вас нет закладок :(
                </h2>
                <p>
                    Вы ничего не добавляли в закладки
                </p>
            </div>
        </div>
    )
}

export default EmptyFavourites
