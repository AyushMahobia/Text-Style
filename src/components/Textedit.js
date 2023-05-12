// App.jsx / App.tsx

import React, { Component, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Textedit = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <button type='button' className='btn btn-warning my-2' onClick={()=>setShow(!show)}>Text editor</button>
            <div className={`form-control my-4 ${show ? "d-block": "d-none"}`} style={{
                background: props.mode === "light" ? "white" : "#06112e",

            }}>
                <h2 style={{
                    color: props.mode === "light" ? "black" : "white"
                }}>Text Editor</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Start your project</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </>

    )
}

export default Textedit;
