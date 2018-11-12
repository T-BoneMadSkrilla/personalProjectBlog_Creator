import React from "react";
import HeaderStyleDropdown from "./HeaderStyleDropdown";
import BlockStyleButton from "./BlockStyleButton";

class BlockStyleToolbar extends React.Component {
  render() {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div>
        <span className="RichEditor-controls">
          <HeaderStyleDropdown
            headerOptions={HEADER_TYPES}
            active={blockType}
            onToggle={this.props.onToggle}
          />
          <br></br>
          {BLOCK_TYPES.map(type => {
            return (
              <BlockStyleButton
                active={type.style === blockType}
                label={type.label}
                onToggle={this.props.onToggle}
                style={type.style}
                key={type.label}
                type={type}
              />
            );
          })}
        </span>
      </div>
    );
  }
}

export const BLOCK_TYPES = [
  
  { label: "Bullet List", style: "unordered-list-item" },
  { label: "Ordered List", style: "ordered-list-item" }
  //   { label: "{ }", style: "code-block" }
];
export const HEADER_TYPES = [
  { label: "Biggest", style: "header-one" },
  { label: "just a hair larger than medium", style: "header-two" },
  { label: "Medium", style: "header-three" },
  { label: "slightly smaller than medium", style: "header-four" },
  { label: "a little bigger than the smallest", style: "header-five" },
  { label: "smallest", style: "header-six" }
];

export function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

export default BlockStyleToolbar;