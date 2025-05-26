export interface Language{
    language: string;
    version: string;
}

interface SelectProps{
    data: Language[];
    selectedLanguage: Language;
    setSelectedLanguage : (language: Language)=>void;
}

export function Select({data, selectedLanguage, setSelectedLanguage}: SelectProps){
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const selected = data.find(lang => lang.language === event.target.value);
        if (selected) {
            setSelectedLanguage(selected);
            console.log("Language changed to ", selected.language, selected.version);
        }
    }
    return (
        <div>
        <label>Language</label>
        <select id="languageselect" value={selectedLanguage.language} onChange={handleChange}>
            {data.map((language)=>{return <option key={language.language+language.version} value={language.language}>{language.language}{language.version}</option>})}
        </select>
        </div>
    )
}