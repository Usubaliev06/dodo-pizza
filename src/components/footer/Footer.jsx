import React from 'react'
import css from './Footer.module.css'

export default function Footer() {


  return (
    <div className={css.wrapper}>
      <footer>

        <div className={css.f1}>
          <p>Додо Пицца</p>

          <a href="">О нас</a>
          <br />
          <a href="">Додо-книга</a>
          <br />
          <a href="">Блог «Сила ума»</a>
          <br />
          <a href="">Додо ИС</a>
          <br />
        </div>

        <div className={css.f2}>
          <p>Работа</p>
          <a href="">В пиццерии</a>
        </div>

        <div className={css.f3}>
          <p>Партнерам</p>
          <a href="">Предложить помещение</a>
        </div>

        <div className={css.f4}>
          <p>Это интересно</p>
          <a href="">Почему мы готовим без перчаток?</a>
          <br />
          <a href="">Экскурсии и мастер-классы</a>
        </div>


        <div className={css.f5}>
          <div className={css.f5_1}>

            <p>Звонок по</p>

            <img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/35a3090c0e41458086520f78ab9f892f.svg" />
            <img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/092d276870e24dacaeb098fb1768d585.svg" />
            <img src="https://dodopizza-a.akamaihd.net/static/Img/CallCenterIcons/d2a8e028a02042b6b72ff780d9fdbdd8.svg" />
          </div>

          <p>0 (505) 545-467</p>

          <a href="">feedback@dodopizza.kg</a>


          <div className={css.f5_2}>
            <p>Принимаем к оплате</p>
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/aec84a569e79a4696301.png" alt="Принимаем к оплате" />
          </div>

        </div>
        <hr />
       <div className={css.f6}>
       
       </div>
        
       

      </footer>
    </div>
  )
}
