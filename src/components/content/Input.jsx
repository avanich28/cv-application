export function Input({ children, name, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
}
