export function DetailLayout({
  title,
  children,
  isEmpty = true,
  colorTitle,
  bgTitle,
}) {
  return (
    <>
      {!isEmpty && (
        <div className="detail">
          <h1
            className="detail-topic"
            style={{ backgroundColor: bgTitle, color: colorTitle }}
          >
            {title}
          </h1>
          {children}
        </div>
      )}
    </>
  );
}
