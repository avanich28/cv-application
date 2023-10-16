export function CustomizeBox({ title, className, children }) {
  return (
    <div className="customize-box">
      <h1>{title}</h1>
      <ul className={className}>{children}</ul>
    </div>
  );
}
