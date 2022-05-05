
import css from './Main.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../../components/card/Card';
import Card_2 from '../../components/card/Card_2';
import Card_3 from '../../components/card/Card_3';
import { useSelector } from 'react-redux';



export default function Main() {

    const pizzas =useSelector( (state) => state.pizza.data) 

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1

    }

    const settings_2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2

    }



    return (



        <div >

            <div className={css.slider}>
                <Slider  {...settings} className={css.container}>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </Slider>
            </div>



            <div className={css.oftenOrdered}>

                <p>Часто заказывают</p>

                <div className={css.slider_2}>

                    <Slider  {...settings_2} className={css.container}>
                        <div>
                            <Card_2 />
                        </div>
                        <div>
                            <Card_2 />
                        </div>
                        <div>
                            <Card_2 />
                        </div>
                        <div>
                            <Card_2 />
                        </div>
                        <div>
                            <Card_2 />
                        </div>
                        <div>
                            <Card_2 />
                        </div>
                    </Slider>

                </div>

            </div>

            <div className={css.cooking}>
                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="" />
                <div>
                    <p id={css.cooking_p1}>Без свинины</p>
                    <p id={css.cooking_p2}>Мы готовим из цыпленка и говядины</p>
                </div>
            </div>

            <h1>Пицца</h1>
            <div className={"сard_3"}>
                {
                    pizzas?.map((item) => <Card_3 key={item.id}  {...item} />)
                }

            </div>

            <div className={css.delivery}>

                <div className={css.delivery_block1}>
                    <h1>Доставка и оплата</h1>

                    <p id={css.delivery_block1_p1}>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</p>

                    <p id={css.delivery_block1_p2}>Если мы не успеем доставить любые продукты, кроме
                        сувенирной продукции и соусов, в течение 60 минут,
                        курьер подарит вам сертификат на большую пиццу.</p>
                </div>

                <div className={css.delivery_block2}>
                    <p id={css.delivery_block2_p1}>365 СОМ</p>
                    <p id={css.delivery_block2_p2}>Минимальная сумма доставки без учета
                        товаров из категории «Другие товары»</p>
                    <p id={css.delivery_block2_p3}>25 000 СОМ</p>
                    <p id={css.delivery_block2_p4}>Максимальная сумма при оплате наличными</p>
                    <p id={css.delivery_block2_p5}>Изображения продуктов могут отличаться от продуктов в заказе.</p>

                </div>

                <div className={css.delivery_block3}>
                    <p>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</p>

                </div>

            </div>

        </div>

    )
}
