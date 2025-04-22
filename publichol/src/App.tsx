import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './components/Country';
import Holiday from './components/Holiday';

function App() {
  const [holidays, setHolidays] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const date = new Date().getFullYear();
  let startDate = `${date}-01-01`;
  let endDate = `${date}-12-31`;

  useEffect(()=>{
    fetch("https://openholidaysapi.org/Countries")
    .then((res)=>res.json())
    .then((data)=>setCountries(data))
    .catch((err)=>console.log(err));
  }, []);

  useEffect(()=>{
    if(selectedCountry){
      fetch(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${selectedCountry}&validFrom=${startDate}&validTo=${endDate}&languageIsoCode=EN`)
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((err) => console.log(err));
    }
  }, [selectedCountry]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Public Holidays App</h1>
        <p>
          <select name="selectcountry" onChange={handleChange}> 
          {countries.map((country: Country)=>(
            <option value={country.isoCode}>{country.name[0].text}</option>
          ))}
          </select>
          <ul>
            {holidays.map((holiday: Holiday) => (
              <li key={holiday.id}>{holiday.startDate}-<span className="holtext">{holiday.name[0].text}</span></li> // Adding `key` prop for list item
            ))}
          </ul>
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
