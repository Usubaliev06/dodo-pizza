import React from 'react';
import css from './Card.module.css'

const Card = () => {
    return (
        <div className={css.card}>
            <img src="https://sun9-22.userapi.com/impg/siWhuXBnKnYxwETNOgTe_q3JaHz4hh4UvwwiDA/W7NcBGz7eME.jpg?size=520x0&quality=95&sign=a967005fb005f7bf5ebc84d7010518d8" alt="" />
            {/* <p>Как получить кешбэк 5%</p> */}
        </div>
    );
}

export default Card;
