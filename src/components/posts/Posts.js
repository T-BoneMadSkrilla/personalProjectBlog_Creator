import React, {Component} from 'react';
import './Posts.css';
import { connect } from "react-redux";
import {getUser} from '../../redux/reducer';

class Posts extends Component{
 
    componentDidMount(){
        this.props.getUser()
    }

    render(){

        this.blogHeroImg = this.props.state.user.map((e,i)=>{
            return (
                <div key={i}>
                {e.hero_blog_img}
                </div>
            )
        })

        this.blogText = this.props.state.user.map((e,i)=>{
            return (
                <div key={i}>
                {e.blog_post}
                </div>
            )
        })

        return(
            <div className="center">
                Posts
                <div>
               {this.blogHeroImg}
               </div>
               <div>
                {this.blogText}
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
    )(Posts);