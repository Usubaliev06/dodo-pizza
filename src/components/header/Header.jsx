import React from 'react'
import { useSelector } from 'react-redux'
import css from './Header.module.css'

export default function Header() {

    const auth =useSelector( (state) => state.auth.data)

    return (
        <div className={css.wrapper}>
            <header>
                <img src="https://live.staticflickr.com/4326/35167255714_671b6ed037_c.jpg" alt="" />

                <div className={css.h1}>
                    <p id={css.delivery}>Доставка пицы Бишкек</p>

                    <div className={css.h1_1}>
                        <p>35 минут · 4.75 </p>
                        <img src="https://pngimg.com/uploads/star/star_PNG41474.png" alt="" />
                    </div>
                </div>


                <div className={css.h2}>
                    <p id={css.number}>0 (505) 545-476</p>
                    <p id={css.call}>Звонок по телефону</p>
                </div>

               

                <div className={css.h3}>
                   
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z" fill="#000"></path></svg> */}
                    <p>Додокоины</p>
                </div>

                <button>Войти</button>
                
            </header>
        </div>
    )
}
