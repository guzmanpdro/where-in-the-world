import Container from "./ui/container";
import CountryCard from "./ui/country-card/countryCard";
import styles from "./page.module.css";
import { countries as initialCountries } from "./lib/data.json"
import ActionsBar from "./ui/actions-bar/actionsBar";

export default function Home() {
  return (
    <Container>
      <ActionsBar />
      <main className={styles.main}>
        {
          <ul className={styles.countryList}>
            {
              initialCountries.slice(0, 10).map((country) => {
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
