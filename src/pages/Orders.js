import React, { Component } from 'react'


import {connect} from 'react-redux'
import {foodServices} from '../actions/foods/foods'
import {orderService} from '../actions/orders/orders'

//IMPORT COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Orders extends Component {
    state = {
        order : {
            username : '',
            phone : '',
            numberOfFood : 0,
            nameOfFood : '',
            precision : ''
        }
    }


    componentDidMount(){
        this.props.allFoods()
        // console.log(this.props.orders())
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.orders(this.state.order)

    }
    render() {

        let foodName = this.props.food.map((item,index)=>{
            return <option key={index} value={item.name}>{item.name} </option>
        })

        return (
        <>
        <Navbar/>
        <div class="container">
            <div class="handler-box">
                <div class="form-add">
                    <form  onSubmit={this.submitHandler}>
                        <h3>Commandes</h3>
                        <div class="form-group">
                            <label htmlFor="title">Votre Nom</label>
                            <input type="text" class="form-input" id="title" name="order"  value={this.state.order.username} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="num">Votre Numéro de téléphone</label>
                            <input type="tel" class="form-input" id="num"  value={this.state.order.phone} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="tit">Nombre de plat</label>
                            <input type="number" class="form-input" id="tit" value={this.state.order.numberOfFood} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="nameFood">Choix de votre plat</label>
                            <select  id="foodName" class="form-input" value={this.state.order.nameOfFood}>
                                {foodName}
                            </select>
                        </div>
                        <div class="form-group">
                            <label htmlFor="content">Des Précisons ?</label>
                            <textarea  class="form-input" id="content" cols="30" rows="5" value={this.state.order.precision}  ></textarea>
                        </div>
                        <button type="submit" class="btn-reserve">Commander</button>
                    </form>
                </div>
                <div class="bg-image">
                    <h3>Merci pour Votre Commande</h3>
                </div>
            </div>
        </div>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.FoodReducer)
    return {
        food : state.FoodReducer.foods,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allFoods : ()=> {
            dispatch(foodServices())
        },
        orders : (orders) => {
            dispatch(orderService(orders))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders)
