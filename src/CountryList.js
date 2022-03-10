import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.length == 0 && (
        <div className="not-found">Country not found 😒</div>
      )}
      {countries.length !== 0 &&
        countries.map(country => (
          <div className="country-preview" key={country.alpha3Code}>
            <Link className="home-link" to={`/${country.alpha3Code}`}>
              <img
                src={country.flag}
                className="flag"
                alt={`flag of ${country.name}`}
              />
              <div className="country-info">
                <h2 className="country-name">{country.name}</h2>
                <p className="population">
                  <span className="weight-600">Population: </span>
                  {country.population}
                </p>
                <p className="region">
                  <span className="weight-600">Region:</span> {country.region}
                </p>
                <p className="population">
                  <span className="weight-600">Capital:</span> {country.capital}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CountryList;
