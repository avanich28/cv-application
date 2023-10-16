export function TextArea({ children, name, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <textarea name={name} value={value} onChange={onChange}></textarea>
    </div>
  );
}
