import React from 'react'

const CountryList = ({ countries, setSearchCountry }) => {

    const handleOnClick = (countryName) => {
        //console.log(event.target.value)
        setSearchCountry(countryName)
    }


    return (
        countries.map(country => <p key={country.name} >{country.name} <button onClick={() => {
            handleOnClick(country.name);
        }}> show </button></p>
        )

    )
}
export default CountryList