import React, {Component} from 'react';
import './Admin.css';
import axios from "axios";
import {connect} from "react-redux";
import {getUser} from '../../redux/reducer';
import{Link} from 'react-router-dom';
import Nav from '../nav/Nav'

class Admin extends Component{
    constructor(){
        super();
        this.state={
            hero_img: "",
            blog_about_text: "",
            user_logo: "",
            edit: false,
            background: ""
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
        console.log(this.state)
        axios.post(`/api/user`, {user_logo, hero_img, blog_about_text})
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
            user_logo: "Home",
            hero_img: "https://emais.estadao.com.br/blogs/comida-de-verdade/wp-content/uploads/sites/313/2016/10/256344-dual-flush-corner-toilet-white.jpg",
            blog_about_text: "This is my blog"
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
                    <img className="adminImgContainer"src={e.hero_img}/>
                    </div>
                    <div className="adminBlogText">
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
                <Nav/>
                <div className="adminCenter">
                <div>

                Background options
                <br></br>
                <select>
                    <option value="color1">option1</option>
                    <option value="color2">option2</option>
                    <option value="colo3r">option3</option>
                    <option value="color4">option4</option>
                    <option value="color5">option5</option>
                    <option value="color6">option6</option>
                    <option value="color7">option7</option>
                    <option value="color8">option8</option>
                    <option value="color9">option9</option>
                    <option value="color10">option10</option>
                    <option value="color11">option12</option>
                </select>

                <div>
                    <br></br>
                    <input type="text" value={this.state.user_logo} onChange={e => this.logoHandler(e.target.value)} placeholder="Add your logo here!"/>
                    <br></br>
                </div>
                
                <div>
        
                    <br></br>
                <input type="text" value={this.state.hero_img} onChange={e => this.heroImgHandler(e.target.value)} placeholder="Add an image on your home page here!"/>
                </div>
            <br></br>
            <div>
                <br></br>
                <input style={{width: "500px"}}type="text" value={this.state.blog_about_text} onChange={e => this.blogAboutHandler(e.target.value)} placeholder="Tell us about yourself!"/>
                <br></br>
                <button onClick={() =>this.submitAbout()}>Submit</button>
                </div>
                <div>
                <br></br>
                    Quick Preview:
                  {about}
                </div>
                <br></br>
                <br></br>
                <div className="next">
                <Link to="/editblog">Click here to edit your blog</Link>
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