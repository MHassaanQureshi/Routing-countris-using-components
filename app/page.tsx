"use client";

import { useState } from "react";
import CountryDetails from "./components/Country";

export default function HomePage() {
  const countries = [
    { name: "Pakistan", population: "231 million", capital: "Islamabad", language: "Urdu" },
    { name: "India", population: "1.4 billion", capital: "New Delhi", language: "Hindi" },
    { name: "USA", population: "331 million", capital: "Washington, D.C.", language: "English" },
    { name: "Japan", population: "125.8 million", capital: "Tokyo", language: "Japanese" },
    { name: "Germany", population: "83.2 million", capital: "Berlin", language: "German" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: 'flex', gap: '20px', background: '#eee', padding: '10px' }}>
        {countries.map((country) => (
          <button
            key={country.name}
            onClick={() => handleCountryClick(country)}
            style={{ cursor: 'pointer', padding: '10px', background: 'white', border: '1px solid #ccc' }}
          >
            {country.name}
          </button>
        ))}
      </nav>

      <CountryDetails
        name={selectedCountry.name}
        population={selectedCountry.population}
        capital={selectedCountry.capital}
        language={selectedCountry.language}
      />
    </div>
  );
}
