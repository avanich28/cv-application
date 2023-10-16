import { DetailLayout } from "./DetailLayout.jsx";
import { checkEmpty } from "../../logic/checkEmpty.jsx";
import { DateAndLocation } from "./DateAndLocation.jsx";

export function ExperienceDetailLists({
  exp,
  experiences,
  edit,
  selectedEdit,
  colorTitle,
  bgTitle,
}) {
  const isEmpty = checkEmpty(exp, experiences);

  return (
    <DetailLayout
      title="experience"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      <ul>
        {experiences.length > 0 &&
          experiences.map((obj) =>
            selectedEdit.id === obj.id && obj.type === selectedEdit.type ? (
              <ExperienceDetail key={obj.id} {...exp} />
            ) : (
              <ExperienceDetail key={obj.id} {...obj} />
            )
          )}
        {edit === false && <ExperienceDetail {...exp} />}
      </ul>
    </DetailLayout>
  );
}

function ExperienceDetail({
  isHide,
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <li className={`detail-item ${isHide && "hide"}`}>
      <DateAndLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <div>
        {company && <h2>{company}</h2>}
        {position && <h3>{position}</h3>}
        {description && <pre>{description}</pre>}
      </div>
    </li>
  );
}
