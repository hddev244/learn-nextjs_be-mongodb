// components/custom-editor.js

import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build';
import CustomUploadAdapter from '@/server/libs/helpers/CustomUploadAdapter';



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

function CustomEditor({ initialData, onChange}
: { initialData?: string, onChange: (data: string) => void}
) {
    function uploadPlugin(editor: any) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
            return new CustomUploadAdapter(loader);
        };
    }


    return (
        <CKEditor
            editor={Editor}
            config={{extraPlugins: [uploadPlugin]}}
              data={ initialData }
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
                console.log({ event, editor, data });
            }}
        />
    )
}

export default CustomEditor;
