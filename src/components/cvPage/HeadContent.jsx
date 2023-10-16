import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HeadContent({ personal, bgColor, fontColor }) {
  return (
    <header
      className="cv-header"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <h1>{personal.firstName + " " + personal.lastName}</h1>
      <div>
        {personal.email && (
          <p>
            <FontAwesomeIcon icon={("fas", "envelope")} />{" "}
            <span>{personal.email}</span>
          </p>
        )}
        {personal.phone && (
          <p>
            <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
            <span>{personal.phone}</span>
          </p>
        )}
        {personal.address && (
          <p>
            <FontAwesomeIcon icon={["fas", "location-dot"]} />{" "}
            <span>{personal.address}</span>
          </p>
        )}
      </div>
    </header>
  );
}
