import { DetailLayout } from "./DetailLayout.jsx";
import { checkEmpty } from "../../logic/checkEmpty.jsx";

export function CertificateDetailLists({
  cert,
  certificates,
  edit,
  selectedEdit,
  colorTitle,
  bgTitle,
}) {
  const isEmpty = checkEmpty(cert, certificates);

  return (
    <DetailLayout
      title="certificate"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      <ul>
        {certificates.length > 0 &&
          certificates.map((obj) =>
            selectedEdit.id === obj.id && obj.type === selectedEdit.type ? (
              <CertificateDetail key={obj.id} {...cert} />
            ) : (
              <CertificateDetail key={obj.id} {...obj} />
            )
          )}
        {edit === false && <CertificateDetail {...cert} />}
      </ul>
    </DetailLayout>
  );
}

function CertificateDetail({ isHide, certificate, year, description }) {
  return (
    <li className={isHide ? "hide" : ""}>
      {certificate && <h2 className="cert-name">{certificate}</h2>}
      {(description || year) && (
        <>
          <span>{description}</span>
          <span>{year && ` (${year})`}</span>
        </>
      )}
    </li>
  );
}
