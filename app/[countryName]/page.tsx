"use client"

import { useSearchParams } from "next/navigation"
import countries from "../lib/data.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "../ui/icons";
import Styles from "../ui/details.module.css";

export default function DetailsCountry() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const countryData = countries.filter((country : any) => country.name === query)[0]

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag
  } = countryData

  const currency = currencies?.map((currency) => currency.name) || '🤷🏼‍♂️'
  const langs = languages.map((lang) => lang.name).join(', ')
  const borderCountries = borders?.map(borderCountry => (
    <li key={borderCountry}>{borderCountry}</li>
  ))

  return (
    <div className={Styles.wrapper}>
      <Link href="/" className={Styles.btnLink}>
        <ArrowLeftIcon />
        Back
      </Link>
      <main className={Styles.main}>
        <Image
          src={flag}
          width={220}
          height={220}
          alt={`Flag of ${name}`}
          priority={true}          
        />
        <section className={Styles.infoSection}>
          <h1>{name}</h1>

          <div className={Styles.flexInfoContainer}>
            <div className={Styles.infoContainer}>
              <p>
                <strong>Native Name: </strong>
                {nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {population}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Subregion: </strong>
                {subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {capital}
              </p>
            </div>
            <div className={Styles.infoContainer}>
              <p>
                <strong>Top Level Domain: </strong>
                {topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {currency}
              </p>
              <p>
                <strong>Languages: </strong>
                {langs}
              </p>
            </div>
          </div>

          <div className={Styles.infoContainer}>
            <h2>Border Countries:</h2>
            <ul className={Styles.borderCountries}>
              {borderCountries || <li className={Styles.noBorders}>🤷🏼‍♂️</li>}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}