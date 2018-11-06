import React, {Component} from 'react';
import './Home.css';
import { connect } from "react-redux";
import {getUser} from '../../redux/reducer';
import Nav from '../nav/Nav'

class Home extends Component{
  

    componentDidMount(){
        this.props.getUser()
    }


    render(){
        const {user} = this.props.state
        const homeBlog =user[user.length -1] && user[user.length -1].blog_about_text
        const heroImg =user[user.length -1] && user[user.length -1].hero_img
        return(
            <div>
            <Nav/>
            <div className="homeCenter">

            <div className="background1">

                <div>
                   <img src={heroImg} />
                </div>
                <br></br>
                <div className="blogText">
                    {homeBlog}
                </div>
            </div>
            </div>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return {state};
}

export default connect(
    mapStatetoProps, 
    { getUser }
    )(Home);
    
    
    
    
    // this.heroImg = this.props.state.user.map((e,i)=>{
    //     return (
    //         <div key={i}>
    //         {e.hero_img}
    //         </div>
    //     )
    // })
    
    // this.homeBlog = this.props.state.user.map((e,i)=>{
    //     return (
    //         <div key={i}>
    //         {e.blog_about_text}
    //         </div>
    //     )
    // })



//TESTING SERVER GET CONNECTION BEFORE REDUX WAS SET UP{
// constructor(){
    //     super();
    //     this.state={
    //         user: []
    //     };
    // }
    // componentDidMount(){
    //     axios.get("/api/user").then( res => {
    //         console.log(res.data)
    //         this.setState({user: res.data})
    //     });
    // }
 // const heroImg = this.state.user.map((e,i) =>{
        //     return (
        //         <div key={i}>
        //         {e.hero_img}
        //         </div>
        //     )
        // })
// {/* {heroImg} */}}