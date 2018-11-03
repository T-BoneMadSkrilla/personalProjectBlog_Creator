import React, {Component} from 'react';
import './Posts.css';
import { connect } from "react-redux";
import {getUser, getBlog} from '../../redux/reducer';
// import {stateToHTML} from 'draft-js-export-html';

import DisplayEditor from '../postEditor/DisplayEditor';


class Posts extends Component{

    constructor(){
        super()
       
    }

    // componentDidMount() {
    //     // Load editor data (raw js object) from local storage
    //     const rawEditorData = this.getSavedEditorData();
    //     if (rawEditorData !== null) {
    //       const contentState = convertFromRaw(rawEditorData);
    //       this.setState({
    //         editorState: EditorState.createWithContent(contentState)
    //       });
    //     }
    //   }
 
//  componentDidMount(){
//          this.props.getBlog()
         
//         console.log(getBlog())
   
//     }
            
    render(){
        return(
            <div className="center">
                Posts
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
                                                        // this.blogHeroImg = this.props.state.user.map((e,i)=>{
                                                        //     return (
                                                        //         <div key={i}>
                                                        //         {e.hero_blog_img}
                                                        //         </div>
                                                        //     )
                                                        // })