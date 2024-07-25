import SearchIcon from "../icons"
import styles from "./actionsBar.module.css"

export default function ActionsBar({ handlerSubmit }) {
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
    </section>
  )
}