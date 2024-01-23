import { Editor } from '@tinymce/tinymce-react'
import React from 'react'

function RTE({ label, defaultValue = '', name, control }) {
    return (
        <div>
            {label && <label className='text-white text-xl inline-block mb-1 pl-1'>{label}</label>}
            <Editor
                initialValue={defaultValue}
                init={
                    {
                        branding: false,
                        height: 500, // in px
                        menubar: true,
                        plugins: [
                            "image", "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "code", "help", "wordcount", "anchor",
                        ],
                        toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }
                }
                // onEditorChange={onChange} // onchange of line 14
            />
        </div>
    )
}

export default RTE