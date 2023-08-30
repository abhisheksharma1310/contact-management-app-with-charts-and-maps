import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCountryData } from "../api";

//define interface for CountryData
interface CountryData {
  "updated": number,
        "country": string,
        "countryInfo": {
            "_id": number,
            "iso2": string,
            "iso3": string,
            "lat": number,
            "long": number,
            "flag": string
        },
        "cases": number,
        "todayCases": number,
        "deaths": number,
        "todayDeaths": number,
        "recovered": number,
        "todayRecovered": number,
        "active": number,
        "critical": number,
        "casesPerOneMillion": number,
        "deathsPerOneMillion": number,
        "tests": number,
        "testsPerOneMillion": number,
        "population": number,
        "continent": string,
        "oneCasePerPeople": number,
        "oneDeathPerPeople": number,
        "oneTestPerPeople": number,
        "activePerOneMillion": number,
        "recoveredPerOneMillion": number,
        "criticalPerOneMillion": number
}

const Map: React.FC = () => {
  const { isLoading,  data: countryData } = useCountryData();

  if (isLoading) {
    return <h3 className="text-xl mt-8">Loading...</h3>; // Handle loading or error state
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">COVID-19 Map</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countryData.map((country: CountryData) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <img
                  src={country.countryInfo.flag}
                  alt={country.country}
                  width="20"
                  height="20"
                />
                <h3 className="text-xl">{country.country}</h3>
                <p>Cases: {country.cases}</p>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
