import { FaSearch } from 'react-icons/fa';
import useFetch from './useFetch';
import CountryList from './CountryList';
import { useState } from 'react';

const Home = () => {
  //  All Countries Fetch
  const allCountryUrl = 'https://restcountries.com/v2/all';
  const { data, error, isPending } = useFetch(allCountryUrl);

  // The Search Function
  const [searchTerm, setSearchTerm] = useState('');
  const getAllCountries = data => {
    const allCountries =
      data &&
      data
        .filter(country => {
          if (searchTerm == '') {
            return country;
          } else if (
            country.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return country;
          }
        })
        .map(country => {
          return country;
        });
    return allCountries;
  };
  const allCountries = getAllCountries(data);

  const [region, setRegion] = useState('');
  const regionUrl = region && 'https://restcountries.com/v2/region/' + region;

  const checkedUrl = region === 'filter by region' ? allCountryUrl : regionUrl;

  const {
    data: cont,
    error: regionError,
    isPending: regionIsPending,
  } = useFetch(checkedUrl);
  const continent = getAllCountries(cont);

  const countries = allCountries ? allCountries : continent;

  return (
    <div className="home">
      {isPending && regionIsPending && (
        <div className="loading">Loading...</div>
      )}
      {error && regionError && (
        <div className="region-error">
          {'could not fetch the data for that resource 😒'}
        </div>
      )}
      <div className="bars">
        <div className="search-bar">
          <FaSearch className="icon search-icon" />
          <input
            type="search"
            placeholder="Search for a country..."
            className="input-search"
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="region-filter"
          value={region}
          onChange={e => setRegion(e.target.value)}
        >
          <option value="filter by region">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {countries && (
        <CountryList countries={continent ? continent : countries} />
      )}
    </div>
  );
};

export default Home;
