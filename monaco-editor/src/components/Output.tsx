import { useState, useEffect } from 'react'
import axios from 'axios'
import * as monaco from '@monaco-editor/react'

interface Output{
    name: string;
    content: string;
}
interface OutputProps{
    language: string;
    editorRef: any; 
    shouldRun: boolean;
    resetShouldRun: ()=>void
    version: string
}

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
})

export function Output({language, version, shouldRun, resetShouldRun, editorRef}: OutputProps){
    const [codeOutput, setCodeOutput] = useState<string | null>(null)

    useEffect(()=>{
        if(shouldRun){
            console.log("API request sent") 
            console.log(language)
            console.log(version)
            console.log(editorRef.current.getValue())  
            const POST = async ()=>{
                try{
                    const response = await API.post('/execute', {
                        language: language,
                        version : version,
                        files: [
                            {
                                content: editorRef.current.getValue()
                            },
                        ],
                        stdin: '', 
                    })
                    setCodeOutput(response.data.run.output)
                }
                catch(error){
                    console.error("API error:", error)
                    setCodeOutput("Error executing code")
                }
                finally {
                    resetShouldRun()
                }
            }
            POST()
        }
    }, [shouldRun, resetShouldRun, language, version])

    return (
        <div className="bg-vscode border-2 text-white rounded border-solid border-gray-700 w-96 h-[60vh] overflow-auto">
            <h1 className="bg-vscode2 font-bold text-xs font-custom">TERMINAL</h1>
            <div className="text-white">
                {codeOutput || "No output yet"}
            </div>
        </div>
    )
}