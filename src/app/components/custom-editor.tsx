'use client';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import type { NextPage } from "next";

const editorConfiguration = {
  toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo'
  ]
};

const CustomTextEditor: NextPage = (props) => {
    return (
        <div className="App">
        <CKEditor
                editor={ Editor }
                config={ editorConfiguration }
                // data={ props.initialData }
                onChange={ (event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
            />
        </div>
  )
}

export default CustomTextEditor;