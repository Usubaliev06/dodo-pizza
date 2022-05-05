import React from 'react';
import css from './Card_2.module.css';

const Card2 = () => {

    return (
        <div className={css.card_2}>
            <img src="	https://dodopizza-a.akamaihd.net/static/Img/Products/aa24adaceff241b0a2eb292b7c677526_366x366.jpeg" alt="" />
            <div  className={css.card_2_block_2} >
                <p id={css.p1}>Пеперони</p>
                <p id={css.p2}>от 365</p>
            </div>
        </div>
    );
}

export default Card2;
