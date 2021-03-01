import React from 'react'
import CountryList from './CountryList'
import Country from './Country'

const RenderCountries = ({ searchCountry, countries, setSearchCountry }) => {

    const countriesToShow = searchCountry.length === 0
        ? countries
        : countries.filter(country => country.name.toLowerCase().includes(searchCountry.toLowerCase()))

    const countrySize = countriesToShow.length
    if (searchCountry.length === 0 || countrySize === 0) {
        return (
            <p>input to search.</p>
        )
    }
    else if (countrySize > 10) {
        return (<p>Too many matches. Make search more specific.</p>
        )
    }
    else if (countrySize === 1) {
        return (
            <Country singleCountry={countriesToShow[0]} />

        )

    }
    else {
        return (
            <CountryList countries={countriesToShow} setSearchCountry={setSearchCountry} />
        )
    }
}

export default RenderCountries