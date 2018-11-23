import React, {Component} from 'react';
import './Products.css';
import axios from "axios";
import {connect} from "react-redux";
import {getProducts} from '../redux/reducer';
import{Link} from 'react-router-dom';


class Products extends Component{
    constructor(){
        super();
        this.state={
            product_title: "",
            product_text: "",
            product_img: "",
            product_price: ""
        };
    }
    componentDidMount(){
        this.props.getProducts()
    }

    titleHandler(input){
        this.setState({product_title: input})
    }
    
    textHandler(input){
        this.setState({product_text: input})
    }
    imgHandler(input){
        this.setState({product_img: input})
    }

    priceHandler(input){
        this.setState({product_price: input})
    }
    
    submitAbout(){
        const {} = this.state
        console.log(this.state)
        axios.post(`/api/user`, {})
        .then( () => {
            this.setState({ 
            product_title: "",
            product_text: "",
            product_img: "",
            product_price: "" })
            this.props.getProducts()
        })
    }
    
    render(){
        console.log(this.props.match.params.user_id)
        return(
            <div> 
                <br></br>
                    <input type="text" value={this.state.product_title} onChange={e => this.titleHandler(e.target.value)} placeholder="Add your product title here"/>
                    <br></br>
                    <br></br>
                    <input type="text" value={this.state.product_text} onChange={e => this.textHandler(e.target.value)} placeholder="Add your product description here"/>
                    <br></br>
                    <br></br>
                    <input type="text" value={this.state.product_img} onChange={e => this.imgHandler(e.target.value)} placeholder="Add your product img here"/>
                    <br></br>
                    <br></br>
                    <input type="number" value={this.state.price} onChange={e => this.priceHandler(e.target.value)} placeholder="Add your product price here"/>
                    <br></br>

                    <Link to="/editblog">Click here to edit your blog</Link>
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
    )(Products);