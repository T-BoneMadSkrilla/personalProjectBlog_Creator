import React, {Component} from 'react';
import './Admin.css';
import axios from "axios";
import {connect} from "react-redux";
import {getUser} from '../../redux/reducer';
import{Link} from 'react-router-dom';

class Admin extends Component{
    constructor(){
        super();
        this.state={
            hero_img: "",
            blog_about_text: "",
            user_logo: "",
            edit: false
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

    handleDelete = (id) =>{
        axios.delete(`/api/user/${id}`)
        .then( (res)=>{
        this.setState({
        hero_img: res.data,
        blog_about_text: res.data,
        user_logo: res.data})
        this.props.getUser()
        })
    }

    handleEdit = (id) =>{
        console.log(id)
        axios.put(`/api/updateabout/${id}`,{
            user_logo: "default",
            blog_about_text: "default",
            hero_img: "default"
            }).then( () => {
            this.setState({ 
            user_logo: "",
            hero_img: "",
            blog_about_text: "" })
            this.props.getUser()
        })
    }
    
    
    
    render(){
        const about = this.props.state.user.map((e,i)=>{
            return (
                    <div key={i}>
                    <div>
                    {e.user_logo}
                    </div>
                    <div>
                    {e.hero_img}
                    </div>
                    <div>
                    {e.blog_about_text}
                    </div>
                    <button onClick={()=>this.handleDelete(e.about_id)}>Delete</button>
                    <div>
                    <button onClick={()=>this.handleEdit(e.about_id)}>resort to default</button>
                    </div>
                    </div>
                )
            })

        return(
            <div> 
                <div className="center">

                <div>
                    Add your logo here!
                    <br></br>
                    <input type="text" value={this.state.user_logo} onChange={e => this.logoHandler(e.target.value)}/>
                    <br></br>
                </div>
                
                <div>
                    Add an image on your home page here!
                    <br></br>
                <input type="text" value={this.state.hero_img} onChange={e => this.heroImgHandler(e.target.value)}/>
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
                    Preview:
                  {about}
                </div>
                <div className="next">
                <Link to="/editblog">NEXT</Link>
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
                                            
                                            
                                            
                                            
                                            
                                            
                                            // <div>
                                            // {logo}
                                            // <br></br>
                                            // {heroImg}
                                            // <br></br>
                                            // {homeBlog} 
                                            // </div>
                                            
                                            
                                            
                                            
                                            // const {user} = this.props.state
        // const homeBlog =user[user.length -1] && user[user.length -1].blog_about_text
        // const heroImg =user[user.length -1] && user[user.length -1].hero_img
        // const logo =user[user.length -1] && user[user.length -1].user_logo
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            // {/* <button onClick={() =>this.submitHeroImg()}>Submit dis bich</button> */}
                                            // {/* <button onClick={()=> this.submitLogo()}>submit dis bich</button> */}