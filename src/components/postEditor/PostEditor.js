import React from 'react';

import {Editor, EditorState, RichUtils} from 'draft-js';
import './PostEditor.css'
import BlockStyleToolbar, {getBlockStyle} from "../BlockStyleToolbar";

class PostEditor extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    onChange = (editorState) => {
        this.setState({
            editorState
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
                <div className="editCenter">
                <BlockStyleToolbar
                editorState={this.state.editorState}
                onToggle={this.toggleBlockType}
                />

                <button onClick={this.onUnderlineClick}>U</button>
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onItalicClick}><em>I</em></button>

                <Editor 
                blockStyleFn={getBlockStyle}
                editorState={this.state.editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange= { this.onChange }
                />
                </div>

                <br></br>
                <div className="bottomButton">
                <button type="button" class="button">POST</button>
                </div>

            </div>
        )
    }
}

export default PostEditor;