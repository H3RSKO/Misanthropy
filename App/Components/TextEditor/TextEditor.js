import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextEditorStyles from './TextEditorStyles'
import { withStyles } from "@material-ui/core/styles";
import './TextEditorStyles.css'
import threads from '../../store/threads';

const TextEditor = (props) => {
  const {setThread, thread} = props
    const [text, setText] = useState('')

    useEffect(() => {
      setThread({...thread, text: text})
    }, [text])

    const {classes} = props
        return (
            <div className="App">
                <CKEditor
                    className={classes.CKEditor}
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setText(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
}

export default withStyles(TextEditorStyles)(TextEditor);
