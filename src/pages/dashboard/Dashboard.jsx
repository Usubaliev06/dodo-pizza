import css from './Dashboard.module.css'
import Card_3 from '../../components/card/Card_3';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Dashboard() {
  
   const pizzas =useSelector( (state) => state.pizza.data) 

    return (
        <div className={css.dash}>
            <h1>Пицца</h1>
            <div className={"сard_3"}>

                <Link to="/create_pizza" className={css.addPizza}>
                    <img src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665680.png?token=exp=1649332634~hmac=c8f54e928e4844e9a6e19d06ed3bf080" alt="" />
                </Link>
                {
                    pizzas?.map((item) => <Card_3 key={item.id}  {...item} isAdmin />)
                }

            </div>

        </div>
    )
}
