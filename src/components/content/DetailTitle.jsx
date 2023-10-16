import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DetailTitle({
  children,
  id,
  type,
  isHide,
  onToggleHide,
  onEdit,
  onAdd,
}) {
  return (
    <>
      {children && (
        <li className="block">
          <button
            onClick={() => {
              onEdit(id, type);
              onAdd();
            }}
          >
            {children}
          </button>
          <button className="faEye-btn" onClick={() => onToggleHide(id, type)}>
            <FontAwesomeIcon icon={["far", isHide ? "eye-slash" : "eye"]} />
          </button>
        </li>
      )}
    </>
  );
}
