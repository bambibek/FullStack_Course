import React from 'react'


const Country = ({ singleCountry }) => {

    return (
        <div>
            <h1> {singleCountry.name}</h1>
capital: {singleCountry.capital}<br></br>
population: {singleCountry.population}<br></br>
            <h1>Languages</h1>
            <ul>
                {singleCountry.languages.map(language => <li key={language.name} >{language.name}</li>)}
            </ul>
            <img alt='No flag' src={singleCountry.flag} height='80' width='80' />
        </div>
    )


}
export default Country