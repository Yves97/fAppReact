import React , {Component} from 'react'

//IMPORT CONFIG & DEPENDENCIES
import {Link} from 'react-router-dom'

class Error extends Component{
    render(){
        return (
            <section class="container">
                    <Link to="/" >
                        <button class="btn-reserve">
                            Go Home
                        </button>
                    </Link>
                <h3 class="error-text">Page Not Found</h3>
            </section>
        )
    }
}

export default Error