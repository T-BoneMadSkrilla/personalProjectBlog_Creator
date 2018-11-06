import React, {Component} from 'react';
import { connect } from "react-redux";
import { getBlog} from '../../redux/reducer';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';


class DisplayEditor extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            editorState: EditorState.createEmpty()
        };
      };
    componentDidMount(){
      this.props.getBlog().then(() => {
        var contentState = EditorState.createWithContent(convertFromRaw(this.props.state.blogPost[1].blog_text))
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
          <div>
              <Editor
              readOnly={true}
              toolbarHidden={true}
              editorState={this.state.editorState}
              /> 
            <div>
            </div>
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
    )(DisplayEditor);
