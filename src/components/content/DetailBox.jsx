import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DetailBox({ onClear, onDemo, onPDF }) {
  return (
    <div className="detail-box box">
      <div>
        <button className="detail-btn clear-detail" onClick={onClear}>
          <FontAwesomeIcon icon={["fas", "trash-can"]} />{" "}
          <span>Clear detail</span>
        </button>
        <button className="detail-btn demo-detail" onClick={onDemo}>
          Demo detail
        </button>
      </div>
      <SavePDFButton onPDF={onPDF} />
    </div>
  );
}

function SavePDFButton({ onPDF }) {
  return (
    <button className="save-pdf-btn small-btn" onClick={onPDF}>
      <span>
        <FontAwesomeIcon icon={["fas", "download"]} /> <span>PDF</span>
      </span>
    </button>
  );
}
