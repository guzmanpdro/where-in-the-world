"use client"

import { useState } from "react";
import Container from "./ui/container";
import ActionsBar from "./ui/actions-bar/actionsBar";
import initialContries from "./lib/data.json";
import { convertToLowerCase, trimQuery } from "./lib/utils"
import Countries from "./ui/countries/countries";

export default function Home() {
  const [countries, setCountries] = useState(initialContries)

  const handlerSearch = (formData: FormData) => {
    const query = convertToLowerCase(formData.get("query"))
    const trimedQuery = trimQuery(query)
    const countryFound = initialContries.filter((element) => convertToLowerCase(element.name).includes(trimedQuery))
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
      <Countries countries={countries}/>
    </Container>
  );
}
