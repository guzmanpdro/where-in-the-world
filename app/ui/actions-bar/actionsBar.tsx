import SearchIcon from "../icons"
import styles from "./actionsBar.module.css"

export default function ActionsBar() {
  return (
    <section className={styles.actionsBar}>
      <form>
        <label className={styles.labelSeach}>
          <input
            className={styles.inputSearch}
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