interface CountryProps {
  name: string;
  population: string;
  capital: string;
  language: string;
}

const Country: React.FC<CountryProps> = ({ name, population, capital, language }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h2>{name}</h2>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Language:</strong> {language}</p>
    </div>
  );
};

export default Country;
