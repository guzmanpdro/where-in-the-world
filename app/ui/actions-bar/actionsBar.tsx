import {
  SearchIcon,
  ClosedFilterIcon,
  OpenFilterIcon
} from "../icons"
import SubmenuOption from "./submenuOption"
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
          <SubmenuOption
            id="africa"
            value="Africa"
            onChange={handleChange}
            label="Africa"
          />
          <SubmenuOption
            id="america"
            value="Americas"
            onChange={handleChange}
            label="America"
          />
          <SubmenuOption
            id="asia"
            value="Asia"
            onChange={handleChange}
            label="Asia"
          />
          <SubmenuOption
            id="europe"
            value="Europe"
            onChange={handleChange}
            label="Europe"
          />
          <SubmenuOption
            id="oceania"
            value="Oceania"
            onChange={handleChange}
            label="Oceania"
          />
        </div>
      </div>
    </section>
  )
}