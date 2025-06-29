import React from 'react'
function SearchBar({setquery}) {
    return (
        <div className="searchBar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e) => setquery(e.target.value.toLowerCase())} type="text" className="search" placeholder="Search a Country..." />
        </div>
    )
}

export default SearchBar
