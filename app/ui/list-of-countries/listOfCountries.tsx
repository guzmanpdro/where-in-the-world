import CountryCard from "../country-card/countryCard"
import { country } from "@/app/lib/definitions"

export default function ListOfCountries({ countries }) {
  return (
    <ul>
      {
        countries.map((country: country) => {
          const {
            alpha3Code,
            capital,
            flags,
            name,
            population,
            region
          } = country

          return (
            <CountryCard 
              key={alpha3Code}
              capital={capital || "NA"}
              flags={flags}
              name={name}
              population={population}
              region={region}
            />
          )
        })
      }
    </ul>
  )
}