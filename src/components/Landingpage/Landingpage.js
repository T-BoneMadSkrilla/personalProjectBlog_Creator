import React, {Component} from 'react';
import './Landingpage.css';
import { connect } from "react-redux";
import {getUser} from '../../redux/reducer';
import {Link} from 'react-router-dom'


class Landingpage extends Component{
         
componentDidMount(){
    this.props.getUser()
}

    render(){
        const {user} = this.props.state
        const heroImg =user[user.length -1] && user[user.length -1].hero_img
        const homeBlog =user[user.length -1] && user[user.length -1].blog_about_text

        return(
        <div>
            <div className="first">
            
                <img src="https://i.postimg.cc/dtKpMthd/antique-backdrop-background-733853.jpg"/>
           
                <div className="createUser">
                <a href={process.env.REACT_APP_LOGIN}>  get started  </a>
                </div>
            </div>

            <div className="divider">

            <Link to="/home"className="antherContainer">


            <div className="landingpagecontainer">

                <div>
                <img className="containImg"src={heroImg}/>
                </div>

                <div className="containText">
                {homeBlog}
                </div>

              
            </div>

            </Link>
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
    )(Landingpage);