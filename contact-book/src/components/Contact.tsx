import React from 'react'

interface ContactProps{
    id: string;
    city: string;
    handleDelete: ()=>void;
}

const Contact: React.FC<ContactProps> = ({id, city, handleDelete})=>{
    return (
    <div className="card bg-white dark:bg-base-100 text-primary-content w-96 card-xs shadow-sm">
        <div className="card-body">
            <h2 className="card-title text-black dark: text-white">{id}</h2>
            <p className="text-gray-700 dark:text-gray-300">Location is {city}</p>
            <div className="card-actions justify-end">
                <button className="btn bg-white-200">Edit</button>
                <button className="btn bg-error" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
    );
}

export default Contact;