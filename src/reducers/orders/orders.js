//IMPORT TYPES
import * as actionTypes from '../../types/orders/orders'

const initialState = {
    order : {
        username : null,
        phone : null,
        numberOfFood : 0,
        nameOfFood : null,
        precision : null
    },
    loading : false,
    error : null
}


const OrderReducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.ORDER:
            return {
                ...state,
                loading : true
            }
        case actionTypes.ORDER_SUCCESS:
            return{
                ...state,
                order : {
                    username : action.username,
                    phone : action.phone,
                    numberOfFood : action.numberOfFood,
                    nameOfFood : action.nameOfFood,
                    precision : action.precision
                },
                loading : false,
            }
        case actionTypes.ORDER_ERROR:
            return{
                ...state,
                error : action.error
            }
        default:
            return state
    }

}

export default OrderReducer