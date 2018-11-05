import React, {Component} from 'react';
import './Posts.css';
import { connect } from "react-redux";
import {getUser, getBlog} from '../../redux/reducer';
// import {stateToHTML} from 'draft-js-export-html';

import DisplayEditor from '../postEditor/DisplayEditor';


class Posts extends Component{
         
    render(){
        return(
            <div className="center">
               <div> 
                <DisplayEditor/>
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
                                                        