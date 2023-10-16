import { DetailLayout } from "./DetailLayout.jsx";

export function TechnologyDetail({ tech, colorTitle, bgTitle }) {
  const isEmpty = !tech.length;

  return (
    <DetailLayout
      title="tech-stack"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      {tech && <p>{`Tools/Languages: ${tech}`}</p>}
    </DetailLayout>
  );
}
