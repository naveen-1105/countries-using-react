import React, { useEffect, useState } from 'react'
import './countryDetail.css'
import { Link, useLocation, useParams } from 'react-router';
function CoutryDetails() {
    const params = useParams()

    const {state} = useLocation();
    const countryName = params.country
    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    function updateCountryCon(data){
        setCountryData({
                    flags : data.flags.svg,
                    name : data.name.common,
                    nativeName : Object.values(data.name.nativeName)[0].common,
                    population : data.population.toLocaleString('en-IN'),
                    region : data.region,
                    subregion : data.subregion,
                    capital : Object.values(data.capital).join(', '),
                    domain : data.tld[0],
                    currencies : Object.values(data.currencies).map((currency) => currency.name).join(', '),
                    symbol : Object.values(data.currencies)[0].symbol,
                    language : Object.values(data.languages).map((languages) => languages).join(', '),
                    borders : []
                })
                if(!data.borders){
                    data.borders = [];
                }
                Promise.all(data.borders.map((border) => {
                    return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((res) => res.json())
                    .then(([borderCountry]) => borderCountry.name.common)
                })).then((borders) =>{
                    setTimeout(() => setCountryData((prevState) => ({...prevState,borders})));  
                })
    }
    useEffect(() => {

        if(state){
            console.log(state);
            updateCountryCon(state)
            return
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then((res) => res.json())
            .then(([data]) => {
                updateCountryCon(data)
            }).catch( err =>{
                setNotFound(true);
            })
    }, [countryName]);
    if(notFound){
        return(
            <div> COUNTRY NOT FOUND </div>
        )
    }
    return (
        countryData === null? 'loading...':
        <> 
            <div className="Contain"><div className='main'>
        <Link className="back"><i className="fa fa-long-arrow-left" aria-hidden="true" onClick={() => history.back()}></i>&nbsp; Back</Link>
        <div className="container">
            <div className="country">
                <div className="flag">
                    <img className="flagimg" alt="" src={countryData.flags}/>
                </div>
                <div className="left">
                    <h1 className="title">{countryData.name}</h1>
                    <div className="detail">
                        <div className="detail1">
                            <p><b>Native name: </b>{countryData.nativeName}<span className="nativeName"></span></p>
                            <p><b>Population: </b>{countryData.population}<span className="population"></span></p>
                            <p><b>Region: </b>{countryData.region}<span className="region"></span></p>
                            <p><b>Sub Region: </b>{countryData.subregion}<span className="subregion"></span></p>
                            <p><b>Capital: </b>{countryData.capital}<span className="capital"></span></p>
                        </div>
                        <div className="detail2">
                            <p><b>Top Level Domain: </b>{countryData.domain}<span className="domain"></span></p>
                            <p><b>Currencies: </b>{countryData.currencies}<span className="currency"></span>(<span className="symbol">{countryData.symbol}</span>)</p>
                            <p><b>Languages: </b>{countryData.language}<span className="language"></span></p>
                        </div>
                    </div>
                    { countryData.borders.length !== 0 && <div className="nativeCountries">
                    <p><b>Border Countries:</b></p>
                    {
                        countryData.borders.map((border) => <Link key={border} to = {`/${border}`}>{border}</Link>)
                    }
                </div>}
            </div>
        </div>
        </div>
    </div></div> 
        </>
    )
}

export default CoutryDetails
