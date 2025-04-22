import { useState } from 'react'
import './App.css'
import Contact from './components/Contact.tsx'

const predef = [
  { "id": "1", "name": "Alice Johnson", "city": "New York" },
  { "id": "2", "name": "Bob Smith", "city": "Los Angeles" },
  { "id": "3", "name": "Charlie Brown", "city": "Chicago" },
  { "id": "4", "name": "David Williams", "city": "Houston" },
  { "id": "5", "name": "Emma Davis", "city": "Phoenix" },
  { "id": "6", "name": "Frank Miller", "city": "Philadelphia" },
  { "id": "7", "name": "Grace Wilson", "city": "San Antonio" },
  { "id": "8", "name": "Henry Moore", "city": "San Diego" },
  { "id": "9", "name": "Isabella Garcia", "city": "Dallas" },
  { "id": "10", "name": "Jack Martinez", "city": "San Jose" }
]

function App() {
  const [contacts, setContacts] = useState(predef)
  const [name, setName] = useState("")
  const [city, setCity] = useState("")

  const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  }
  const handleChange2=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCity(event.target.value);
  }
  const handleSubmit=()=>{
    const newcontact = {id: (contacts.length+1).toString(), name: name, city: city};
    setContacts((prev)=>[...prev, newcontact])
    setName("")
    setCity("")
  }
  const handleDelete=(id: string)=>{
    setContacts((prev)=>prev.filter((contact)=>contact.id!=id))
  }

  return (
    <>
      <h1 className="text-2xl font-bold">
        Contact Book
      </h1><br></br>
      <div className="enclosing-box bg-gray-700 p-4 shadow-md max-w-2xl mx-auto">
        <input type="text" placeholder="Name" className="input input-md mb-4" onChange={handleChange}/>
        <input type="text" placeholder="City" className="input input-md mb-4" onChange={handleChange2}/>
        <button className="btn btn-sm btn-primary" onClick={handleSubmit}>Add Contact</button>
      </div>
      {contacts.map((contact) => {
        return <Contact key={contact.id} id={contact.name} city={contact.city} handleDelete={()=>handleDelete(contact.id)} />
      })}

    </>
  )
}

export default App
