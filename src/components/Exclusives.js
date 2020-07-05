import React , {Component} from 'react'

// IMPORT CONFIG & DEPENDENCIES
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


//IMPORT ACTIONS
// import { foodServices } from '../actions/foods/foods'


//IMPORT ASSETS
import defaultImg from '../assets/images/food_item/food_item_1.png'

class Exclusives  extends Component {
    



    render() {

        let food = this.props.foods
      
        
        return (
            <section id="exclusive">
                <div className="container">
                    <h1>Nos Plats Exclusifs</h1>
                    
                    
                    <div className="box-items">
                    <div className="row">
                    {  food.map((item,index)=> {
                        return (
                            
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" key={index}>
                                <div className="card-items">
                                    <div style={{height:300 + 'px',width:100 +'%',backgroundImage: 'url('+ `${item.image ||  defaultImg}`+')',backgroundPosition : 'center', backgroundRepeat : 'no repeat', backgroundSize: 'cover',borderTopLeftRadius: 10 + 'px',borderTopRightRadius: 10 + 'px'}}></div>
                                    <div className="items-info">
                                    <h3>{item.name}</h3>
                                        <p> { item.description } </p>
                                        <Link to={`/details/${index}`}>Plus de détails <i class="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )

                    }  )   }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Exclusives


