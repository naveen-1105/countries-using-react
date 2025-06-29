import React from 'react'

function Filter() {
    return (
        <select name="Filter" className="filter" id="">
            <option value="filter" style={{display: 'none'}}>Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
        
        </select>
    )
}

export default Filter
