import React, {Component} from 'react';
import './Products.css';
import axios from "axios";
import {connect} from "react-redux";
import {getProducts} from '../redux/reducer';
import{Link, withRouter} from 'react-router-dom';


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
    
    submitProducts(){
        const {product_title, product_text, product_img, product_price} = this.state
        console.log(this.state)
        axios.post(`/api/store`, {product_title, product_text, product_img, product_price})
        .then( () => {
            this.setState({ 
            product_title: "",
            product_text: "",
            product_img: "",
            product_price: "" })
            this.props.getProducts()
        })
    }

    deleteProduct = (product_id) =>{
        axios.delete(`/api/store/${product_id}`)
        .then( (res)=>{
        this.setState({
        product_title: res.data,
        product_text: res.data,
        product_img: res.data,
        product_price: res.data})
        this.props.getProducts()
        })
    }
    
    render(){
        
        console.log(this.props.params)
        const {products} = this.props.state
        console.log(products)


        const productz = products.map((e,i)=>{
            return (
                    <div key={i}>

                    <div>
                    {e.product_title}
                    </div>

                    <div>
                    <img src={e.product_img}/>
                    </div>

                    <div>
                    {e.product_text}
                   </div>

                   <div>
                    {"$"}{e.product_price}
                   </div>
                   <button onClick={()=>this.deleteProduct(e.product_id)}>Delete</button>
                   </div>
                )
            })


        return(
            <div> 
                <Link to={"/"}>Back to home</Link>
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

                    <br></br>
                    <button onClick={() =>this.submitProducts()}>Submit</button>
                    
                    Quick Preview:
                    {productz}

                    <Link to="/editblog">Click here to go back and edit your blog</Link>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {state};
}

export default withRouter(connect(
    mapStatetoProps, 
    { getProducts }
    )(Products));