import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Topic({
  title,
  icon,
  dataIndex,
  selected = "",
  onSelected = "",
}) {
  const toggleBox = dataIndex !== 0 && dataIndex !== 4 && dataIndex !== 7;
  return (
    <header>
      <button
        className="info-btn"
        onClick={() => (toggleBox ? onSelected(dataIndex) : "")}
      >
        <h1>
          <FontAwesomeIcon icon={["fas", icon]} />
          <span>{title}</span>
          {toggleBox && (
            <FontAwesomeIcon
              icon={["fas", "chevron-down"]}
              className={`chevron ${dataIndex === selected ? "rotate" : ""}`}
            />
          )}
        </h1>
      </button>
    </header>
  );
}
