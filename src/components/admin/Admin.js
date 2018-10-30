import React, {Component} from 'react';
import './Admin.css';
import axios from "axios";
import {connect} from "react-redux";
import {getUser} from '../../redux/reducer';

class Admin extends Component{
    constructor(){
        super();
        this.state={
            hero_img: "",
            blog_about_text: "",
            user_logo: ""
        };
    }
    componentDidMount(){
        this.props.getUser()
    }

    heroImgHandler(input){
        this.setState({hero_img: input})
    }
    
    blogAboutHandler(input){
        this.setState({blog_about_text: input})
    }
    logoHandler(input){
        this.setState({user_logo: input})
    }
    
    submitAbout(){
        const {user_logo, hero_img, blog_about_text} = this.state
        axios.post('/api/user', {user_logo, hero_img, blog_about_text})
        .then( () => {
            this.setState({ 
            hero_img: "",
            blog_about_text: "",
            user_logo: "" })
            this.props.getUser()
        })
    }
    
    
    
    render(){
        const {user} = this.props.state
        const homeBlog =user[user.length -1] && user[user.length -1].blog_about_text
        const heroImg =user[user.length -1] && user[user.length -1].hero_img
        const logo =user[user.length -1] && user[user.length -1].user_logo
        return(
            <div> 
                <div className="center">

                <div>
                    Add your logo here!
                    <br></br>
                    <input type="text" value={this.state.user_logo} onChange={e => this.logoHandler(e.target.value)}/>
                    {/* <button onClick={()=> this.submitLogo()}>submit dis bich</button> */}
                    <div>
                        <br></br>
                    Preview: {logo}
                    
                    </div>
                    <br></br>
                </div>
                
                <div>
                    Add an image on your home page here!
                    <br></br>
                <input type="text" value={this.state.hero_img} onChange={e => this.heroImgHandler(e.target.value)}/>
                {/* <button onClick={() =>this.submitHeroImg()}>Submit dis bich</button> */}
                </div>
            <div>
                <br></br>
               Preview: {heroImg}
            </div>
            <br></br>
            <div>
                Tell us about yourself!
                <br></br>
                <input type="text" value={this.state.blog_about_text} onChange={e => this.blogAboutHandler(e.target.value)}/>
                <br></br>
                <button onClick={() =>this.submitAbout()}>Submit dis bich</button>
                </div>
                <div>
                <br></br>
                    Preview: {homeBlog} 
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
    )(Admin);
    
    
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
                    // this.logo = this.props.state.user.map((e,i)=>{
                        //     return (
                            //         <div key={i}>
                            //         {e.user_logo}
                            //         </div>
                            //     )
                            // })
                            
                            
                            // submitHeroImg(){
                                //     const {hero_img} = this.state
                                //     axios.post('/api/user', {hero_img})
                                //     .then( () => {
                                    //         this.setState({ user_logo: ""})
                                    //         this.props.getUser()
                                    // })
                                    // }
                                    
                                    // submitLogo(){
                                        //     const {user_logo} = this.state
                                        //     axios.post('/api/userlogo', {user_logo})
                                        //     .then( () => {
                                            //         this.setState({ user_logo: ""})
                                            //         this.props.getUser()
                                            // })
                                            // }

















                                    
                                    
                                    
                                    