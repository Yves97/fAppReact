//IMPORT URLS 
import {FOOD_URL, SINGLE_FOOD_URL} from '../../urls/foods/foods'

//IMPORT TYPES
import {FOOD, FOOD_SUCCESS,  FOOD_ERROR,
        } from '../../types/foods/foods'

export const food = () => {
    return{
        type: FOOD
    }
}

export const foodSuccess = (foods) =>{
    return{
        type : FOOD_SUCCESS,
        foods
    }
}

export const foodError = (error) =>{
    return{
        type : FOOD_ERROR,
        error
    }
}

// export const singleFood = (id) =>{
//     return {
//         type : SINGLE_FOOD,
//         id
//     }
// }




export const foodServices = () => {
    return dispatch => {
       dispatch(food());

        fetch(FOOD_URL,{
            method: 'GET'
        })
            .then(response => response.json())
            .then(response =>{
             
                    
                    dispatch(foodSuccess(response));
                
                
            })
            .catch(error => {
                console.log(error)
                dispatch(foodError(error))
            })
    }
}






