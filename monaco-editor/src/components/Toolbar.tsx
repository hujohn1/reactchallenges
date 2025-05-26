import {VscPlay, VscDesktopDownload, VscAccount } from 'react-icons/vsc'

interface ToolbarProps{
    setShouldRun: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Toolbar({setShouldRun}: ToolbarProps){
    const handleDownload = ()=>{
        const teststring ="hello world"
        const blob = new Blob([teststring], {type: 'text/plain'})
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'filename.txt'
        link.click()
        console.log(`Test file downloaded.`);
    }
    const handlePlay = ()=>{
        setShouldRun(true)
    }
    return (
        <div>
            <button><VscAccount/></button><br></br>
            <button onClick={handleDownload}><VscDesktopDownload/></button><br></br>
            <button onClick={handlePlay}><VscPlay/></button>
        </div>
    )
}