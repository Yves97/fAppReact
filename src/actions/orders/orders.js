//IMPORT URL
import {ORDER_URL} from '../../urls/orders/orders'

//IMPORT TYPES 
import {ORDER,ORDER_SUCCESS,ORDER_ERROR} from '../../types/orders/orders'


//actions

export const orders = () => {
    return{
        type : ORDER
    }
}

export const orderSuccess = (phone,numberOfFood ,nameOfFood ,precision ) => {
    return {
        type : ORDER_SUCCESS,
        order : {
            phone,numberOfFood ,nameOfFood ,precision
        }
    }
}

export const orderError = (error) => {
    return {
        type : ORDER_ERROR,
        error
    }
}


export const orderService = (order) => {
    return dispatch => {
        dispatch(orders())

        fetch(ORDER_URL,{
            method : 'POST',
            body : JSON.stringify({
                order
            })
        })
            .then((response)=> response.json())
            .then((responseJson)=>{
                console.log(responseJson)
                return dispatch(orderSuccess(responseJson.success))
            } )
            .catch((error)=> dispatch(orderError(error)) )
    }

}