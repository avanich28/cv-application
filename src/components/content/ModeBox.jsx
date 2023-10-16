import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ModeBox({ mode, onMode }) {
  return (
    <div className="mode-box box">
      <button
        className={`mode-btn ${mode === "content" && "active-mode"}`}
        onClick={() => onMode("content")}
      >
        <FontAwesomeIcon icon={["fas", "file-lines"]} /> <span>Content</span>
      </button>
      <button
        className={`mode-btn ${mode === "customize" && "active-mode"}`}
        onClick={() => onMode("customize")}
      >
        <FontAwesomeIcon icon={["fas", "paint-brush"]} /> <span>Customize</span>
      </button>
    </div>
  );
}
