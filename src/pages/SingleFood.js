import React, { Component } from 'react'


//IMPORT CONFIG & DEPENDENCIES
import {connect} from 'react-redux'

//IMPORT ACTIONS 
import {singleFood} from '../actions/foods/foods'
//IMPORT COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//IMPORT ASSETS
import defaultImg from '../assets/images/food_item/food_item_1.png'



class SingleFood extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         id : this.props.id
    //     }
    // }




    // componentDidMount(){
    //     let id  = this.props.id
    //     let singleFood = this.props.food[id]
        
    //     // console.log(this.props.single(singleFood))
    //     // console.log(this.state.single())
    // }

    goBack = () => {
        let home = window.location.href = '/'
        return this.props.history.push('/')
    }
    render() {
        
        let id  = this.props.id
        let singleFood = this.props.food[id]
        
        // localStorage.setItem('food', singleFood)
        
        if(!singleFood){
            return (
                <>
                    <p>Loading</p>
                    <button onClick={this.goBack}>Go back</button>
                </>
            )
        }
        

        return (
            <>
            <Navbar/>
                <div class="container">
                    <div class="main-card" style={{backgroundImage : `linear-gradient(#00000059, #000000f2),url(${singleFood.image || defaultImg})`, backgroundPosition : `center`, backgroundReapet : 'no-repeat',backgroundSize: 'cover'}}>
                        <div>
                            <h1>{singleFood.name}</h1>
                            <h3>{singleFood.description}</h3>
                            <p>{singleFood.price}</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return{
        food : state.FoodReducer.foods,
        id : ownProps.match.params.id,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         single : (id) => {
//             return dispatch(singleFood(id))
//         }
//     }
// } 

export default connect(mapStateToProps,null)(SingleFood)