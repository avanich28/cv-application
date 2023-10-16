export function DateAndLocation({ startDate, endDate, location }) {
  return (
    <div className="date-location">
      {(startDate || endDate) && (
        <p>
          {startDate}
          {startDate && endDate ? " - " : ""}
          {endDate}
        </p>
      )}
      {location && <p>{location}</p>}
    </div>
  );
}
