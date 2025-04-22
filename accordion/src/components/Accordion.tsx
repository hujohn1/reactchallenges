import React, {useState} from 'react';

interface query{
    title: string;
    content: string;
  }

const Accordion:React.FC<query>=({title, content})=>{
    const [isopen, setIsopen]=useState(false);
    const handleClick=()=>{setIsopen(!isopen)};
    return (
        <div className="accordion">
            <div className="accordion-item">
                <button className="accordion-header" onClick={handleClick}>{title}</button>
                {isopen && <div className="accordion-content">{content}</div>}
            </div>
        </div>
    )
}

export default Accordion;