export function Layout({ pos, color, onCustomize, isSelected }) {
  return (
    <li>
      <button
        className={`layout-btn ${isSelected && "active-layout"}`}
        onClick={() => onCustomize("layout", pos)}
      >
        <div className={`layout-stripe ${pos}`}>
          <div className="stripe-1" style={{ backgroundColor: color }}></div>
          <div className="stripe-2"></div>
        </div>
        <p>{pos}</p>
      </button>
    </li>
  );
}
