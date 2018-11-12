import React from 'react';
import Nav from '../nav/Nav'
import { RichUtils, convertToRaw} from 'draft-js';
import './PostEditor.css'
import BlockStyleToolbar, {getBlockStyle} from "../BlockStyleToolbar";

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createImagePlugin from 'draft-js-image-plugin';

import ImageAdd from './ImageAdd';

import axios from 'axios';

import DisplayEditor from '../postEditor/DisplayEditor';
import DisplayEditorTwo from '../postEditor/DisplayEditorTwo';
import DisplayEditorThree from '../postEditor/DisplayEditorThree';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

const text = `Click on the add button to add images, and don't forget to delete this text before posting`;

class PostEditor extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            editorState: createEditorStateWithText(text),
            blog_text: ""
          };
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        })
    }


    sumbitPost = () => {
        let contentState = this.state.editorState.getCurrentContent();
        let note = { content: convertToRaw(contentState)};
        let blog_text = JSON.stringify(note.content);
        
        axios.post('/api/blog', {blog_text}).then(()=>{
            // this.setState({editorState})
            console.log(blog_text)
        })
    }


    handleKeyCommand = (command) => {
        const newState = 
        RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState){
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    toggleBlockType = (blockType) => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
        };

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
      }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
      }

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
         }
         
         
         
         
         render(){
        return(
            <div>
                <Nav />
                <div className="tryingToCenter">

                <div className="editCenter">
                <BlockStyleToolbar
                editorState={this.state.editorState}
                onToggle={this.toggleBlockType}
                />

                <button onClick={this.onUnderlineClick}>U</button>
                
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onItalicClick}><em>I</em></button>

                <ImageAdd
                   editorState={this.state.editorState}
                   onChange={this.onChange}
                   modifier={imagePlugin.addImage}
                   />
                <Editor 
                blockStyleFn={getBlockStyle}
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange= { this.onChange }
                plugins={plugins}
                ref={(element) => { this.editor = element; }}
                />
                    
                </div>
                </div>
            


                <br></br>
                <div className="bottomButton">
                <button onClick={this.sumbitPost}type="button" className="button">POST</button>
                </div>
                {/* <div className="preview"> */}
                {/* <h3>
                    Preview:
                    </h3>
                <DisplayEditor/>
               <DisplayEditorTwo/>
               <DisplayEditorThree/>
                </div> */}
            </div>
        )
    }
}

export default PostEditor;