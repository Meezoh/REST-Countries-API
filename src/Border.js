import useFetch from './useFetch';
import { Link } from 'react-router-dom';

// borders = arrays of alpha3Codes from CountryDetails
const Border = ({ borders }) => {
  const {
    data: countries,
    error,
    isPending,
  } = useFetch('https://restcountries.com/v2/all');

  return (
    <div className="border-list">
      <p className="border-countries">Border Countries:</p>

      <div className="lists">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {borders &&
          borders.map(border => (
            <div className="border-button" key={border}>
              <Link className="border-detail" to={`/${border}`}>
                <div className="btn btn-border">
                  {countries &&
                    countries.map(country => {
                      if (country.alpha3Code === border) {
                        return country.name;
                      }
                    })}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Border;
