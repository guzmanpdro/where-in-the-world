import {
  SearchIcon,
  ClosedFilterIcon,
  OpenFilterIcon
} from "../icons"
import styles from "./actionsBar.module.css"

export default function ActionsBar({ handlerSubmit, handleChange }: any) {
  return (
    <section className={styles.actionsBar}>
      <form action={handlerSubmit} autoComplete="off">
        <label className={styles.labelSeach}>
          <input
            className={styles.inputSearch}
            name="query"
            type="search"
            placeholder="Search for a country..." 
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </label>
      </form>

      <div className={styles.dropdown}>
        <input
          type="checkbox"
          id="dropdown-toggle"
          aria-hidden="true"
          hidden
        />
        <label
          htmlFor="dropdown-toggle"
          aria-haspopup="true"
          aria-expanded="false">
          Filter by region
          <ClosedFilterIcon styles={styles.closedFilterIcon} />
          <OpenFilterIcon styles={styles.openFilterIcon} />
        </label>

        <div className={styles.dropdownContent} aria-label="submenu">
          <div>
            <input type="radio" id="africa" name="region" value="Africa" aria-hidden="true" hidden onChange={handleChange} />
            <label htmlFor="africa">Africa</label>
          </div>
          <div>
            <input type="radio" id="america" name="region" value="Americas" aria-hidden="true" hidden onChange={handleChange}  />
            <label htmlFor="america">America</label>
          </div>
          <div>
            <input type="radio" id="asia" name="region" value="Asia" aria-hidden="true" hidden onChange={handleChange}  />
            <label htmlFor="asia">Asia</label>
          </div>
          <div>
            <input type="radio" id="europa" name="region" value="Europe" aria-hidden="true" hidden onChange={handleChange}  />
            <label htmlFor="europa">Europa</label>
          </div>
          <div>
            <input type="radio" id="oceania" name="region" value="Oceania" aria-hidden="true" hidden onChange={handleChange}  />
            <label htmlFor="oceania">Oceania</label>
          </div>
        </div>
      </div>
    </section>
  )
}