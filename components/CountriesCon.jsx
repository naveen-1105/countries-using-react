import React, { useEffect, useState } from "react";
import '../App.css'
import Card from "./Card";
import ShimmerEffect from "./ShimmerEffect";

function CountriesCon({query}) {
  const [Alldata, setAlldata] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,borders,currencies,languages')
    .then((res) => res.json())
    .then((data) => {
      setAlldata(data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <div className="Contain">
        <main>
          {!Alldata.length ? (
            <ShimmerEffect/>
          ): (<div className="cardContainer">
            {Alldata.filter(
              (data) => data.name.common.
              toLowerCase().includes(query)
            ).map((data) => {
              return(
                <Card
                key={data.name.common}
                flag={data.flags.svg}
                name={data.name.common}
                population={data.population.toLocaleString("en-IN")}
                region={data.region}
                capital={data.capital?.[0]}
                info = {data}
              />
              )
            })}
          </div>)}
          
          
        </main>
      </div>
    </>
  );
}

export default CountriesCon;
