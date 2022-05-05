// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import css from './Navbar.module.css'
import { useState } from 'react';

export default function Navbar() {

  const basket = useSelector((state) => state.basket.data)
  const [modal, setModal] = useState(false);
  const onModal = () => setModal(!modal)

  const getAllPrice = () => {
    let price = 0;
    basket.forEach((item) => {
      price = Number(item.price) + price
    })
    return price


  }
  return (
    <>
      <div className={css.wrapper}>
        <nav>
          <div className={css.link}>

            <a href="">Пицца</a>
            <a href="">Комбо</a>
            <a href="">Закуски</a>
            <a href="">Десерты</a>
            <a href="">Напитки</a>
            <a href="">Другие товары</a>
            <a href="">Акции</a>
            <a href="">Контакты</a>
            <a href="">О нас</a>
            <a href="">Прямой эфир</a>

          </div>

          <button onClick={(onModal)}>Корзинa | {basket.length}</button>

        </nav>

      </div>

      <div className={`${css.modal} ${modal ? css.activeModal : ""}`}>
        <div className={css.basketWrapper}>
          <img
            onClick={(onModal)}
            className={css.closeModal}
            src="https://cdn-icons-png.flaticon.com/512/17/17047.png"
            alt="Close"
          />



          <div className={css.test}>

            <h2 id={css.h2}> {basket.length} товара на {getAllPrice()} сом</h2>

            <div className={css.basket1}>

              <div className={css.basket1_1}>

                <div className={css.basket1_1_1}>
                  <p></p>
                  <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/a5fbe87430b943b7833e632e94807355_760x760.jpeg" alt="" />
                </div>

                <div className={css.basket1_1_2}>

                  <p>599 сом</p>

                  <p>-1+</p>

                </div>

              </div>




              <input type="text" placeholder='промокод' />

            </div>

            <div className={css.basket2}>

              <div>

                <p id={css.p1_basket}>1 товар</p>

                <p>599 сом</p>

              </div>

              <div>
                <p id={css.p2_basket}>Начислим додокоины</p>

                <p>+30</p>
              </div>
            </div>

            <div className={css.basket3}>
              <p> Сумма заказа </p>
              <p>{getAllPrice()} сом</p>
            </div>

            <button>К оформлению заказа</button>


          </div>


        </div>

      </div>
    </>
  )
}
