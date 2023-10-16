import { DetailLayout } from "./DetailLayout.jsx";

export function OthersDetail({ others = "reference", colorTitle, bgTitle }) {
  const isEmpty = !others.length;

  return (
    <DetailLayout
      title="Others"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      {others && <pre>{others}</pre>}
    </DetailLayout>
  );
}
