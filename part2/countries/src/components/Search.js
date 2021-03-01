import React from 'react'

const Search = ({ searchCountry, setSearchCountry }) => {

    const handleSearch = (event) => {

        console.log(event.target.value)
        setSearchCountry(event.target.value)
    }


    return (
        <div>
            Find Countries : <input value={searchCountry}
                onChange={handleSearch} />
        </div>
    )
}

export default Search