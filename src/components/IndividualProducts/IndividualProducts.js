import React, {Component} from 'react';
import './IndividualProducts.css';
import {connect} from "react-redux";
import {getProducts} from '../../redux/reducer';

import Nav from '../nav/Nav';

import {Elements, StripeProvider} from 'react-stripe-elements';


import Checkout from '../Checkout/Checkout';

class IndividualProducts extends Component{

    constructor(){
        super()
        this.state={
            email: "",
            address: ""
        }
    }


    componentDidMount(){
        this.props.getProducts()
    }

    render(){
        const {products} = this.props.state
        console.log(products)
        console.log(this.props.match.params)

        // const find = product

        let find = products.filter(e => e.product_id === +this.props.match.params.product_id)
        // console.log(find) 

        const productz = find.map((e,i)=>{
            return (
                    <div key={i} className="prodContainer">

                    <div className="productContainer">
                    {e.product_title}
                    <img src={e.product_img} className="containProdImg"/>

                    <div >
                        {e.product_text}
                    </div>

                   <div>
                    {'$'}{e.product_price}
                   </div>

                    </div>
                   
                   </div>
                )
            })

        return(
            <div className="center">
            <Nav />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
               {productz}
                 <StripeProvider apiKey={process.env.REACT_APP_PUBLIC}>
            <div className="example">
            <Elements>
                <Checkout />
          </Elements>
        </div>
      </StripeProvider>


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
    )(IndividualProducts);