import React from 'react';
import { useDispatch } from 'react-redux';
import { ACsetBasket } from '../../redux/actionCreators';
import css from './Card_3.module.css';


export default function Card_3({name,info,file,isAdmin, ...props}) {

const distpach = useDispatch()

const imgUrl="http://solid.lol/public/"+ file

  const onBasket= () => {
    distpach(
      ACsetBasket(name,info,file,isAdmin, ...props)
    )
  }


  return (

    <div className={css.card_3}>
      <div className={css.card_3_block1}>
        <img src={imgUrl} alt="" />
        <p id={css.card_3_block1_p1}>{name}</p>
        <p id={css.card_3_block1_p2}>
          {info}
        </p>
      </div>

      <div className={css.card_3_block2}>
        <p>{props.price}</p>
       
       { isAdmin
       ?  <button onClick={onHeandleDelite}>Удалить</button>
       : <button onClick={onBasket}>Bыбрать</button>

       }
      </div>

    </div>

  )
}
