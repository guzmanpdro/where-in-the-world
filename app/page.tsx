import Container from "./ui/container";
import ListOfCountries from "./ui/list-of-countries/listOfCountries";
import styles from "./page.module.css";
import { countries as initialCountries } from "./lib/data.json"

export default function Home() {
  return (
    <main>
      <Container>
        <ListOfCountries countries={initialCountries} />
      </Container>
    </main>
  );
}
