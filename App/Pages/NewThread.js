import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import newThreadStyle from '../Styling/NewThreadStyle'


const NewThread = (props) => {
  const {classes} = props
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  return (
    <div className={classes.editorContainer}>
      <Editor editorState={editorState} onChange={setEditorState} handleKeyCommand={handleKeyCommand}  placeholder="Enter some text..." />
    </div>
  )
}


export default withStyles(newThreadStyle)(NewThread)
