import Link from 'next/link';

export default function HomePage() {
  const countries = [
    { name: "Pakistan", population: "231 million", capital: "Islamabad", language: "Urdu" },
    { name: "India", population: "1.4 billion", capital: "New Delhi", language: "Hindi" },
    { name: "USA", population: "331 million", capital: "Washington, D.C.", language: "English" },
    { name: "Japan", population: "125.8 million", capital: "Tokyo", language: "Japanese" },
    { name: "Germany", population: "83.2 million", capital: "Berlin", language: "German" },
  ];

  return (
    <div>
   
      <nav style={{ display: 'flex', gap: '20px', background: '#eee', padding: '10px' }}>
        {countries.map((country) => (
          <Link key={country.name} href={`/${country.name.toLowerCase()}`}>
            <button style={{ cursor: 'pointer', padding: '10px', background: 'white', border: '1px solid #ccc' }}>
              {country.name}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
