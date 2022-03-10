import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
import Border from './Border';

const CountryDetails = () => {
  const { alpha3Code } = useParams();
  const { data, error, isPending } = useFetch(
    'https://restcountries.com/v2/alpha?codes=' + alpha3Code
  );

  const history = useHistory();

  const country = data && data[0];
  const languageArray = country && country.languages;
  const borderArray = country && country.borders;

  const handleBackClick = () => {
    history.go(-1);
  };

  return (
    <div className="country-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {country && (
        <article>
          <button className="btn btn-back" onClick={handleBackClick}>
            <BsArrowLeft className="arrow-left" />
            Back
          </button>
          <div className="details">
            <img
              src={country.flag}
              className="flag flag-details"
              alt={`flag of ${country.name}`}
            />
            <div className="country-details">
              <h2 className="name-details">{country.name}</h2>
              <div className="name-language">
                <div>
                  <p className="detail native-name">
                    <span className="weight-600">Native Name: </span>
                    {country.nativeName ? country.nativeName : 'Not Available'}
                  </p>
                  <p className="detail population">
                    <span className="weight-600">Population: </span>
                    {country.population ? country.population : 'Not Available'}
                  </p>
                  <p className="detail region">
                    <span className="weight-600">Region:</span>{' '}
                    {country.region ? country.region : 'Not Available'}
                  </p>
                  <p className="detail sub-region">
                    <span className="weight-600">Sub Region: </span>
                    {country.subregion ? country.subregion : 'Not Available'}
                  </p>
                  <p className="detail capital">
                    <span className="weight-600">Capital: </span>
                    {country.capital ? country.capital : 'Not Available'}
                  </p>
                </div>

                <div>
                  <p className="detail top-level-domain">
                    <span className="weight-600">Top Level Domain: </span>
                    {country.topLevelDomain
                      ? country.topLevelDomain
                      : 'Not Available'}
                  </p>
                  <p className="detail currency">
                    <span className="weight-600">Currencies: </span>
                    {country.currency
                      ? country.currencies[0].name
                      : 'Not Available'}
                  </p>
                  <p className="detail language">
                    <span className="weight-600">Languages: </span>
                    {languageArray.map(obj => obj.name).join(', ')}
                  </p>
                </div>
              </div>

              <div className="borders">
                {borderArray && <Border borders={borderArray} />}
              </div>
            </div>
          </div>
        </article>
      )}

      <div className="country-details"></div>
    </div>
  );
};

export default CountryDetails;
