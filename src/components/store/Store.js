import React, {Component} from 'react';
import './Store.css';
import {connect} from "react-redux";
import {getProducts} from '../../redux/reducer';
import {Link} from 'react-router-dom';

import Nav from '../nav/Nav'

class Store extends Component{

    componentDidMount(){
        this.props.getProducts()
    }

    render(){
        const {products} = this.props.state
        console.log(products)
        console.log(+this.props.match.params.user_id)

        let find = products.filter(e => e.user_id === +this.props.match.params.user_id)
        console.log(find) 

        const productz = find.map((e,i)=>{
            return (
                    <Link to={`/product/${e.user_id}/${e.product_id}`}key={i}>

                    <div>
                    {e.product_title}
                    </div>

                    <div>
                    <img src={e.product_img}/>
                    </div>

                   <div>
                    {e.product_price}
                   </div>
                   </Link>
                )
            })

        return(
            <div className="center">
            <Nav/>
              
               {productz}
            </div>
        )
    }
}
function mapStatetoProps(state){
    return {state};
}

export default connect(
    mapStatetoProps, 
    { getProducts }
    )(Store);