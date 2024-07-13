import Link from "next/link";
import Image from "next/image";

export default function CountryCard({
  capital,
  flags,
  name,
  population,
  region
}:  {
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  name: string;
  population: number;
  region: string;}) {
  return (
    <li>
      <Link href="/details">
        <Image
          src={flags.png}
          alt="a" 
          width={320}
          height={220}
          priority
        />
        <section>
          <h2>{name}</h2>
          <div>
            <p>
              <strong>Population:</strong>
              {population}
            </p>
            <p>
              <strong>Region:</strong>
              {region}
            </p>
            <p>
              <strong>Capital:</strong>
              {capital}
            </p>
          </div>
        </section>
      </Link>
    </li>
  )
}