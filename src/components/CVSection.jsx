import { hexIsLight } from "../logic/hexIsLight.jsx";
import { OthersDetail } from "./cvPage/OthersDetail.jsx";
import { LanguageDetailLists } from "./cvPage/LanguageDetailLists.jsx";
import { CertificateDetailLists } from "./cvPage/CertificateDetailLists.jsx";
import { TechnologyDetail } from "./cvPage/TechnologyDetail.jsx";
import { ProjectDetailLists } from "./cvPage/ProjectDetailLists.jsx";
import { ExperienceDetailLists } from "./cvPage/ExperienceDetailLists.jsx";
import { EducationDetailLists } from "./cvPage/EducationDetailLists.jsx";
import { MainContent } from "./cvPage/MainContent.jsx";
import { HeadContent } from "./cvPage/HeadContent.jsx";

export function CVSection(props) {
  const bright = hexIsLight(props.customize.color);

  const defaultProp = {
    edit: props.edit,
    selectedEdit: props.selectedEdit,
    colorTitle: props.customize.color,
    bgTitle: bright ? "#4F4C4C" : "#ECEBEB",
  };

  return (
    <section
      className={`cv-section`}
      style={{ fontFamily: props.customize.font }}
    >
      <div
        className={`cv-container layout-${props.customize.layout}`}
        ref={props.componentRef}
      >
        <HeadContent
          personal={props.personal}
          bgColor={props.customize.color}
          fontColor={bright ? "black" : "white"}
        />
        <MainContent personal={props.personal}>
          <EducationDetailLists
            {...defaultProp}
            educ={props.educ}
            educations={props.educations}
          />
          <ExperienceDetailLists
            {...defaultProp}
            exp={props.exp}
            experiences={props.experiences}
          />
          <ProjectDetailLists
            {...defaultProp}
            project={props.project}
            projects={props.projects}
          />
          <TechnologyDetail {...defaultProp} tech={props.tech} />
          <CertificateDetailLists
            {...defaultProp}
            cert={props.cert}
            certificates={props.certificates}
          />
          <LanguageDetailLists
            {...defaultProp}
            lang={props.lang}
            languages={props.languages}
          />
          <OthersDetail {...defaultProp} others={props.others} />
        </MainContent>
      </div>
    </section>
  );
}
