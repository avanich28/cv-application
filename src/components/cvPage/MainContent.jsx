export function MainContent({ children, personal }) {
  return (
    <main className="cv-main">
      {personal.intro && <p>{personal.intro}</p>}
      {children}
    </main>
  );
}
