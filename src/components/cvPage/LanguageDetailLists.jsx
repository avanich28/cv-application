import { DetailLayout } from "./DetailLayout.jsx";
import { checkEmpty } from "../../logic/checkEmpty.jsx";

export function LanguageDetailLists({
  lang,
  languages,
  edit,
  selectedEdit,
  colorTitle,
  bgTitle,
}) {
  const isEmpty = checkEmpty(lang, languages);

  return (
    <DetailLayout
      title="languages"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      <ul className="lang-lists">
        {languages.length > 0 &&
          languages.map((obj) =>
            selectedEdit.id === obj.id && obj.type === selectedEdit.type ? (
              <LanguageDetail key={obj.id} {...lang} />
            ) : (
              <LanguageDetail key={obj.id} {...obj} />
            )
          )}
        {edit === false && <LanguageDetail {...lang} />}
      </ul>
    </DetailLayout>
  );
}

function LanguageDetail({ isHide, langTest, scores }) {
  return (
    <li className={isHide ? "hide" : ""}>
      {(langTest || scores) && (
        <>
          <span className="lang-test">{langTest}</span>
          {langTest && ": "}
          <span>{scores}</span>
        </>
      )}
    </li>
  );
}
