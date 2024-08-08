export default function SubmenuOption({id, value, onChange, label}: any) {
  return (
    <div>
      <input
        type="radio"
        id={id} name="region"
        value={value}
        aria-hidden="true"
        hidden autoComplete="off"
        onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}