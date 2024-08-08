import CountryCard from "../country-card/countryCard"
import styles from "./countries.module.css"

export default function Countries({ countries }: any) {
  return (
    <main className={styles.main}>
      {
        <ul className={styles.countryList}>
          {
            countries.slice(0, 10).map((country : any) => {
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
  )
}