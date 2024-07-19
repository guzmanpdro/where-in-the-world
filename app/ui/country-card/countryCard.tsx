import Link from "next/link";
import Image from "next/image";
import styles from "./countryCard.module.css"

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
    <Link href="/details" className={styles.countryCard}>
      <Image
        src={flags.svg}
        alt="a" 
        width={320}
        height={220}
        priority
        className={styles.flag}
      />
      <div className={styles.countryInfo}>
        <h2 className={styles.countryTitle}>{name}</h2>
        <div className={styles.countryDetails}>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  )
}