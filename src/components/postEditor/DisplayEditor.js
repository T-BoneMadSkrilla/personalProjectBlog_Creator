import React, {Component} from 'react';
import { connect } from "react-redux";
import { getBlog} from '../../redux/reducer';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
import {convertToHTML} from 'draft-js-export-html';

class DisplayEditor extends Component{

    constructor(props) {
        super(props);
        // let editorState = EditorState.createWithContent(convertFromRaw(this.props.content));
        this.state = {
            editorState: EditorState.createEmpty()
        };
      };
    componentDidMount(){
        // const rawEditorData = this.props.getBlog()
        // if (rawEditorData !== null){
        //   var contentState = convertFromRaw(rawEditorData);
        //   this.setState({
        //     editorState: EditorState.createWithContent(contentState)
        //   })
        // }
        this.props.getBlog()
    }

    onChange = (editorState) => {
        this.setState({
          editorState: this.props.state.blogPost
        });
      };

      render() {
        console.log(this.state.editorState)
        // const html = convertToHTML(editorState.getCurrentContent())

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

    // import {
    //     convertFromRaw,
    //     EditorState,
    //   } from 'draft-js';
      
    //   const rawContent = /* get this value from db */;
      
    //   const contentState = convertFromRaw(JSON.parse(rawContent));
      
    //   const editorState = EditorState.createWithContent(blocks);

    // handleEditorChange = (editorState) => {
    //   // Your Redux action
    //   this.props.updateEditor({
    //     content: convertToRaw(editorState.getCurrentContent())
    //   })
    // }
    
    // render () {
    //   return (
    //     <Editor
    //       editorState={this.props.editorState}
    //       onChange={this.handleEditorChange} />
    //   )
    // }