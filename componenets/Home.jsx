import SearchBar from './searchBar'
import Filter from './FilterFeature'
import CountriesCon from './CountriesCon'
import { useState } from 'react';
import Header from './header';
function Home() {
    const [query, setQuery] = useState('');
    return (
        <>
                    <div className="searchContainer">
            <SearchBar setquery ={setQuery}/>
            <Filter/>
        </div>
        {query === 'unmount' ? '' : <CountriesCon query={query} />}
        

        </>
        
    )
}

export default Home
