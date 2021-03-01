import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import axios from 'axios'
import RenderingCountries from './components/RenderingCountries'


const App = () => {


  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState([])

  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])


  return (

    <div>
      < Search searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
      <RenderingCountries searchCountry={searchCountry} setSearchCountry={setSearchCountry} countries={countries} />
    </div>


  )


}
export default App;
