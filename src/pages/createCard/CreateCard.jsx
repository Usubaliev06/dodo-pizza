
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './CreateCard.module.css'
import Api from "../../api/Api.js"
import { useDispatch } from 'react-redux';
import { SET_PIZZA } from '../../redux/ActionTypes';
import { ACsetPizza } from '../../redux/actionCreators';


export default function CreateCard() {

    const [name, setName] = useState("")
    const [compounde, setCompaunde] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [description, setDescription] = useState("")

const dispatch =useDispatch

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        const fromData = new FormData()
        fromData.append("name", name)
        fromData.append("price", price)
        fromData.append("info", compounde)
        fromData.append("image", image)
        //     ferch(baseUrl + pizzaApi, {
        //         method: "POST",
        //         body: FromData
        //     })
        // .finally(() => {
        //     navigate("/dashboard")
        // })
        Api.craetePizza(fromData)
            .finally(() => {
                navigate("/dashboard")
            })
            .then((res) =>{
                dispatch(ACsetPizza(res.data))
            })

    }

    const nameChange = (e) => {
        setName(e.target.value)
    }


    const compaundeChange = (e) => {
        setCompaunde(e.target.value)
    }

    const priceChange = (e) => {
        setPrice(e.target.value)
    }

    const imageChange = (e) => {
        const image = e.target.files[0]
        setImage(image)
        console.log(image);

        const reader = new FileReader()
        reader.readAsDataURL(image);
        reader.onload = (e) => {

            setImageURL(e.target.result)
        }
    }
    const urlDowload = "https://cdn-icons-png.flaticon.com/128/685/685670.png"
    return (
        <div>

            <form onSubmit={submit} className={css.card_3}>
                <div className={css.card_3_block1}>
                    <div className={css.img}>
                        <label className={css.label_img}>
                            <img src={imageURL || urlDowload} alt="" />

                            <input
                                id={css.img}
                                type="file"
                                placeholder='pizza'
                                onChange={imageChange}
                            />

                        </label>
                    </div>

                    <p id={css.card_3_block1_p1}>

                        <input
                            type="text"
                            placeholder='Pizza name'
                            value={name}
                            onChange={nameChange}
                        />
                    </p>

                    <div id={css.card_3_block1_p2}>

                        <input
                            type="text"
                            placeholder='Compound'
                            value={compounde}
                            onChange={compaundeChange}
                        />
                    </div>

                    


                </div>

                <div className={css.card_3_block2}>
                    <p>
                        <input
                            type="number"
                            placeholder='Price'
                            value={price}
                            onChange={priceChange}
                        />

                    </p>


                </div>


                <button type='submit'>Save</button>
            </form>

        </div>


    )
}

