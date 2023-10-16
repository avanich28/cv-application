import { DetailLayout } from "./DetailLayout.jsx";
import { checkEmpty } from "../../logic/checkEmpty.jsx";

export function ProjectDetailLists({
  project,
  projects,
  edit,
  selectedEdit,
  colorTitle,
  bgTitle,
}) {
  const isEmpty = checkEmpty(project, projects);

  return (
    <DetailLayout
      title="project"
      isEmpty={isEmpty}
      colorTitle={colorTitle}
      bgTitle={bgTitle}
    >
      <ul>
        {projects.length > 0 &&
          projects.map((obj) =>
            selectedEdit.id === obj.id && obj.type === selectedEdit.type ? (
              <ProjectDetail key={obj.id} {...project} />
            ) : (
              <ProjectDetail key={obj.id} {...obj} />
            )
          )}
        {edit === false && <ProjectDetail {...project} />}
      </ul>
    </DetailLayout>
  );
}

function ProjectDetail({ isHide, project, description }) {
  return (
    <li className={isHide ? "hide" : ""}>
      {project && <h2 className="project-name">{project}</h2>}
      {description && <p>{description}</p>}
    </li>
  );
}
