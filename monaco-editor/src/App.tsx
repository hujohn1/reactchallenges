import Editor from '@monaco-editor/react'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import {Select} from './components/Select.tsx'
import {Output} from './components/Output.tsx'
import {Toolbar} from './components/Toolbar.tsx'
import axios from 'axios'
import {Language} from './components/Select.tsx'
import {Chatbot} from './components/Chatbot.tsx'
import { AppSidebar } from './components/app-sidebar.tsx'
import { ThemeProvider } from './components/theme-provider'
import { SidebarProvider } from './components/ui/sidebar'

function App() {
  const editorRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState({language: 'javascript', version: "15.10.0"})
  const [allLanguages, setAllLanguages] = useState([])
  const [shouldRun, setShouldRun] = useState(false)

  const onMount = (editor: any)=>{
    editorRef.current = editor
    editor.focus()
  }

  useEffect(()=>{
    const getLanguages = async ()=>{
      try {
        const response = await axios.get('https://emkc.org/api/v2/piston/runtimes');
        setAllLanguages(response.data);
      }
      catch(error){console.error(`Encountered error fetching languages:`, error);}
    }
    getLanguages()
  }, [])

  const handleLanguageChange=(newlang: Language)=>{
    setSelectedLanguage(newlang);
  }
  const resetShouldRun = ()=>{
    setShouldRun(false)
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <div className="flex-1">
            <h1 className="font-semibold">Currently using {selectedLanguage.language + selectedLanguage.version}</h1>
            <Select data={allLanguages} selectedLanguage={selectedLanguage} setSelectedLanguage={handleLanguageChange}/>
            <div className="flex items-start">
              <Toolbar setShouldRun={setShouldRun}/>
              <Editor 
                key={selectedLanguage.language}
                width="50%"
                height="60vh"
                theme="vs-dark"
                language={selectedLanguage.language} 
                defaultValue="// some comment"
                onMount={onMount}
              />
              <div className="h-full overflow-auto">
                <Output 
                  editorRef={editorRef} 
                  language={selectedLanguage.language} 
                  version={selectedLanguage.version} 
                  shouldRun={shouldRun} 
                  resetShouldRun={resetShouldRun}
                /> 
              </div>
            </div>
            <Chatbot/>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
