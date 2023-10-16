import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FormLayout({ children, onDelete, onCancel, onSave, id, type }) {
  return (
    <form>
      {children}
      <span className="form-btn-container">
        <button
          className="delete-btn small-btn"
          onClick={(e) => {
            onCancel(e);
            onDelete(e, id, type);
          }}
        >
          <FontAwesomeIcon icon={["fas", "trash-can"]} /> <span>Delete</span>
        </button>
        <button className="cancel-btn small-btn" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="save-btn small-btn"
          onClick={(e) => {
            onCancel(e);
            onSave(e, type);
          }}
        >
          Save
        </button>
      </span>
    </form>
  );
}
