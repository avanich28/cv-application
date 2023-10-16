import { DetailLayout } from "./DetailLayout.jsx";
import { checkEmpty } from "../../logic/checkEmpty.jsx";
import { DateAndLocation } from "./DateAndLocation.jsx";

export function EducationDetailLists({
  educ,
  educations,
  edit,
  selectedEdit,
  colorTitle,
  bgTitle,
}) {
  const isEmpty = checkEmpty(educ, educations);

  return (
    <DetailLayout
      title="education"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      <ul>
        {educations.length > 0 &&
          educations.map((obj) =>
            selectedEdit.id === obj.id && obj.type === selectedEdit.type ? (
              <EducationDetail key={obj.id} {...educ} />
            ) : (
              <EducationDetail key={obj.id} {...obj} />
            )
          )}
        {edit === false && <EducationDetail {...educ} />}
      </ul>
    </DetailLayout>
  );
}

function EducationDetail({
  isHide,
  school,
  degree,
  major,
  minor,
  gpa,
  startDate,
  endDate,
  location,
}) {
  return (
    <li className={`detail-item ${isHide && "hide"}`}>
      <DateAndLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <div>
        {school && <h2>{school}</h2>}
        {degree && <p>{degree}</p>}
        {(major || minor || gpa) && (
          <ul>
            {major && <li>{`Major: ${major}`}</li>}
            {minor && <li>{`Minor: ${minor}`}</li>}
            {gpa && <li>{`GPA: ${gpa}`}</li>}
          </ul>
        )}
      </div>
    </li>
  );
}
