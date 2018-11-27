import React, {Component} from 'react';
import { connect, } from "react-redux";
import {withRouter} from 'react-router-dom';
import { getBlog} from '../../redux/reducer';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
import './DisplayEditor.css'

class DisplayEditor extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            editorState: EditorState.createEmpty()
        };
      };
          componentDidMount(){
            this.props.getBlog().then(() => {
              
              const {blogPost} = this.props.state
              let find = blogPost && blogPost.filter(e => e.user_id === +this.props.match.params.user_id)
              const blogInfo = find && find[find.length -1] 
              
              var contentState = blogInfo && EditorState.createWithContent(convertFromRaw(JSON.parse(blogInfo.blog_text)))
              this.setState({
              editorState: contentState
              })
            })
          }
    

    onChange = (editorState) => {
        this.setState({
          editorState: editorState
        });
      };

      render() {

        console.log(this.props.match.params)
        const {blogPost} = this.props.state 
        console.log(blogPost)

        return (
          <div className="editDisplay">
              <Editor
              readOnly={true}
              toolbarHidden={true}
              editorState={this.state.editorState}
              /> 
            
          </div>
        );
      }
    }
  

function mapStatetoProps(state){
    return {state};
}

export default withRouter(connect(
    mapStatetoProps, 
    { getBlog }
    )(DisplayEditor));
