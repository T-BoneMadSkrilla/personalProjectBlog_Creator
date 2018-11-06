import React, {Component} from 'react';
import './Landingpage.css';
import { connect } from "react-redux";
import {getUser, getBlog} from '../../redux/reducer';


// import DisplayEditor from '../postEditor/DisplayEditor';


class Landingpage extends Component{
         
    render(){
        return(
            <div>
            
              aye o this is the Landingpage
               
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
    )(Landingpage);