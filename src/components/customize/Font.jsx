export function Font({ font, abbreviation, onCustomize, isSelected }) {
  return (
    <li>
      <button
        className={`font-btn ${isSelected && "active-font"}`}
        style={{ fontFamily: font }}
        onClick={() => onCustomize("font", font)}
      >
        <p>Aa</p>
        <p>{abbreviation}</p>
      </button>
    </li>
  );
}
