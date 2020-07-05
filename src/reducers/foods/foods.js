//IMPORT ACTIONS
import * as actionTypes from '../../types/foods/foods'


const initialState = {
    foods : [],
    loading : false,
    error : null
}


const FoodReducer = (state = initialState ,action) =>{
    switch(action.type){
        case actionTypes.FOOD:
            return   {
                ...state,
                loading : true
            }
        case actionTypes.FOOD_SUCCESS:
            return {
                ...state,
                foods : action.foods,
                loading : false
            
            }
        case actionTypes.FOOD_ERROR:
            return {
                ...state,
                error : action.error,
                loading : false,
            }
        // case actionTypes.SINGLE_FOOD:
        //     return{
        //         ...state,
        //         foodId : action.id
        //     }
        default:
            return state

    }
}

export default FoodReducer;