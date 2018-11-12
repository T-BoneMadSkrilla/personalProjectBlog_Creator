import React, {Component} from 'react';
import { connect } from "react-redux";
import { getBlog} from '../../redux/reducer';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
import './DisplayEditorTwo.css'

class DisplayEditorTwo extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            editorState: EditorState.createEmpty()
        };
      };
    componentDidMount(){
      this.props.getBlog().then(() => {
        var contentState = EditorState.createWithContent(convertFromRaw(this.props.state.blogPost[this.props.state.blogPost.length -2].blog_text))
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

        return (
          <div className="editDisplayTwo">
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

export default connect(
    mapStatetoProps, 
    { getBlog }
    )(DisplayEditorTwo);