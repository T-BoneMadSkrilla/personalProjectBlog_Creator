import React, {Component} from 'react';
import './Posts.css';
import { connect } from "react-redux";
import {getUser, getBlog} from '../../redux/reducer';
import Nav from '../nav/Nav'

import DisplayEditor from '../postEditor/DisplayEditor';
import DisplayEditorTwo from '../postEditor/DisplayEditorTwo';
import DisplayEditorThree from '../postEditor/DisplayEditorThree';

class Posts extends Component{

    componentDidMount(){
        this.props.getBlog()
    }
         
    render(){
        console.log(this.props.match.params.user_id)

        const {blogPost} = this.props.state 
        console.log(blogPost)
        return(
            <div>
            <Nav />
            <div className="postCenter">
            
                <DisplayEditor/>
                <DisplayEditorTwo/>
               <DisplayEditorThree/> 
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
    { getUser, getBlog }
    )(Posts);
                                                        