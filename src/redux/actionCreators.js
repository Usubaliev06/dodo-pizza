
import Api from '../api/Api';
import { SET_PENDING, SET_PIZZAS, SET_NEW_PIZZA, SET_PIZZA, AUTH_SUCCESS } from './ActionTypes';


export const ACsetPizza = (data) => ({
    type: SET_PIZZA,
    payload:data
})

export const ACsetAuth = (data) => ({
    type:AUTH_SUCCESS,
    payload:data,
})

export const ACsetPizzas = (data) => ({
    type: SET_PIZZAS,
    data: data
})

export const ACsetPending = () => ({
    type: SET_PENDING,

})

export const ACsetBasket = (data) => ({
    type: SET_NEW_PIZZA,
    data: data
})


export const getPizzaAC = () => {
    return async (dispatch) => {
        const res = await Api.getPizzas()
        dispatch(ACsetPending())
        if (res.status === 200) {
            dispatch(ACsetPizzas(res.data.data.data))
        }
    }
}


export const authAC = (data) => {
    return async (distpach) => {
        Api.auth(data)
            .then((res) => {
                if (res.data?.token) {
                    distpach(ACsetAuth(res.data))
                }
            })
    }
}


