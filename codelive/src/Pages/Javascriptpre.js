import React ,{ useState,useEffect } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import useLocalStorage from '../hooks/useLocalStorage'

import { Controlled as ControlledEditor } from 'react-codemirror2'
function Javascriptpre() {
    const [html, setHtml] = useLocalStorage('html','')
    const [css, setCss] = useLocalStorage('css','')
    const [js, setJs] = useLocalStorage('js','')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrcDoc(`
                <html>
                <body>
                ${html}
                </body>
                <style>
                ${css}
                </style>
                <script>
                ${js}
                </script>
            </html>`
            )
        },250)

        return () => clearTimeout(timeout)

    },[html,css,js])

   
    function handleChange(editor, data,value){
        setJs(value)
    }
    return (
        <div className="javascript">
            <div className="editor-title">
                <h2>JavaScript Editor</h2>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value = {js}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode: "javascript",
                    theme:'material',
                    lineNumbers:true
                }}
            />
            <div className="pane">
                <iframe 
                srcDoc = {srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width = "100%"
                height = "100%"
                />
            </div>
        </div>
    )
}

export default Javascriptpre

