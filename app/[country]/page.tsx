"use client"
import { useParams } from 'next/navigation';
import Country from '../components/Country';

const CountryPage = () => {
  
  const { country } =useParams();

  const countries = [
    { name: "Pakistan", population: "231 million", capital: "Islamabad", language: "Urdu" },
    { name: "India", population: "1.4 billion", capital: "New Delhi", language: "Hindi" },
    { name: "USA", population: "331 million", capital: "Washington, D.C.", language: "English" },
    { name: "Japan", population: "125.8 million", capital: "Tokyo", language: "Japanese" },
    { name: "Germany", population: "83.2 million", capital: "Berlin", language: "German" },
  ];

  const selectedCountry = countries.find(c => c.name.toLowerCase() === country?.toString().toLowerCase());

  if (!selectedCountry) {
    return <div>Country not found</div>;
  }

  return (
    <Country
      name={selectedCountry.name}
      population={selectedCountry.population}
      capital={selectedCountry.capital}
      language={selectedCountry.language}
    />
  );
};

export default CountryPage;
