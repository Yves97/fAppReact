import React, { Component } from 'react'

//IMPORT CONFIG & DEPENDENCIES
import {Link} from 'react-router-dom'
import {foodServices, food} from '../actions/foods/foods'
import {connect} from 'react-redux'

//IMPORT COMPONENTS
import  Exclusives  from '../components/Exclusives'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Home extends Component {

    componentDidMount(){
        this.props.allFoods();
        // console.log(this.props.food)
        
    }
    render() {

      
      let Food = this.props.food.map((foods,index)=>{ 
          return{
            name : foods.name,
            price : foods.price,
            image : foods.image,
            description : foods.description
            }
        }
      )
    //   console.log(Food)


        return (
            <>
            <Navbar/>
        {/* {Food}  */}
                <section id="expensive">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div className="box-welcome">
                                    <p>Moins Coûteux et Meilleurs Plats</p>
                                    <h3>Nous vous offrons les plats de qualité !</h3>
                                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus natus placeat dicta impedit earum quis deleniti id minima et nisi, error magni ducimus quibusdam deserunt itaque maxime totam repellendus omnis!</small>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div style={{height: 300 + 'px',width: 100 + '%',backgroundImage: 'url('+ '../../images/banner_bg.png'+')',backgroundPosition: 'center', backgroundRepeat: 'no repeat',backgroundSize:'cover'}}></div>
                            </div>
                        </div>
                        <Link to="/orders" tag="button" className="btn-reserve">Commander un plat <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
                    </div>
                </section>
                <Exclusives  foods={Food} />
           <Footer />
            </>
        )
    }
}


const mapStateToProps = state => { 
    return {
        food : state.FoodReducer.foods,
        loading : state.FoodReducer.loading,
        error : state.FoodReducer.error
    } 
}


const mapDispatchToProps = dispatch => {
    return {
        allFoods : ()=> {
            dispatch(foodServices())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);


