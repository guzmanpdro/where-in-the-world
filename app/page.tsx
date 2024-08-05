"use client"

import { useState } from "react";
import Container from "./ui/container";
import CountryCard from "./ui/country-card/countryCard";
import styles from "./page.module.css";
import ActionsBar from "./ui/actions-bar/actionsBar";
import initialContries from "./lib/data.json";
import { convertToLowerCase } from "./lib/utils"

export default function Home() {
  const [countries, setCountries] = useState(initialContries)

  const handlerSearch = (formData: FormData) => {
    const query = convertToLowerCase(formData.get("query"))
    const countryFound = initialContries.filter((element) => convertToLowerCase(element.name).includes(query))
    setCountries(countryFound)
  }

  const handleChange = (event: any) => {
    const region = event.target.value
    console.log(region)
    const filteredCountries = initialContries.filter((country) => country.region === region)
    setCountries(filteredCountries)
  }

  return (
    <Container>
      <ActionsBar handlerSubmit={handlerSearch} handleChange={(e: any) => handleChange(e)} />
      <main className={styles.main}>
        {
          <ul className={styles.countryList}>
            {
              countries.slice(0, 10).map((country) => {
                const {
                  alpha3Code,
                  capital,
                  flags,
                  name,
                  population,
                  region
                } = country
      
                return (
                  <li key={alpha3Code} className={styles.listItem}>
                    <CountryCard 
                      capital={capital || "NA"}
                      flags={flags}
                      name={name}
                      population={population}
                      region={region}
                    />
                  </li>
                )
              })
            }
          </ul>
        }
      </main>
    </Container>
  );
}
