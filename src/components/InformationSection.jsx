import { useState } from "react";
import { FontLists } from "./customize/FontLists.jsx";
import { LayoutLists } from "./customize/LayoutLists.jsx";
import { Color } from "./customize/Color.jsx";
import { OthersBox } from "./content/OthersBox.jsx";
import { LanguageBox } from "./content/LanguageBox.jsx";
import { CertificateBox } from "./content/CertificateBox.jsx";
import { TechnologyBox } from "./content/TechnologyBox.jsx";
import { ProjectBox } from "./content/ProjectBox.jsx";
import { ExperienceBox } from "./content/ExperienceBox.jsx";
import { EducationBox } from "./content/EducationBox.jsx";
import { PersonalDetailsBox } from "./content/PersonalDetailsBox.jsx";
import { DetailBox } from "./content/DetailBox.jsx";
import { ModeBox } from "./content/ModeBox.jsx";

export function InformationSection(props) {
  const [mode, setMode] = useState("content");
  const [selected, setSelected] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  function handleSelectedTopic(dataIndex) {
    if (dataIndex === selected) setSelected(0);
    else setSelected(dataIndex);
    setIsAdd(false);
  }

  function handleClickAdd() {
    setIsAdd(true);
  }

  function handleClickCancelAndSave(e) {
    e.preventDefault();
    setIsAdd(false);
    // Clear form for adding button
    props.onClearObj();
  }

  const defaultProp = {
    selected,
    isAdd,
    onSelected: handleSelectedTopic,
    onAdd: handleClickAdd,
    onCancel: handleClickCancelAndSave,
    onToggleHide: props.onToggleHide,
    onEdit: props.onEdit,
    onDelete: props.onDelete,
    onSave: props.onSave,
  };

  return (
    <section className="information-section">
      <ModeBox mode={mode} onMode={setMode} />
      <DetailBox
        onClear={props.onClear}
        onDemo={props.onDemo}
        onPDF={props.onPDF}
      />
      {mode === "content" && (
        <>
          <PersonalDetailsBox
            personal={props.personal}
            onPersonal={props.onPersonal}
          />

          <EducationBox
            defaultProp={defaultProp}
            educ={props.educ}
            onEduc={props.onEduc}
            educations={props.educations}
          />
          <ExperienceBox
            defaultProp={defaultProp}
            exp={props.exp}
            onExp={props.onExp}
            experiences={props.experiences}
          />
          <ProjectBox
            defaultProp={defaultProp}
            project={props.project}
            onProject={props.onProject}
            projects={props.projects}
          />
          <TechnologyBox tech={props.tech} onTech={props.onTech} />
          <CertificateBox
            defaultProp={defaultProp}
            cert={props.cert}
            onCert={props.onCert}
            certificates={props.certificates}
          />
          <LanguageBox
            defaultProp={defaultProp}
            lang={props.lang}
            onLang={props.onLang}
            languages={props.languages}
          />
          <OthersBox others={props.others} onOthers={props.onOthers} />
        </>
      )}

      {mode === "customize" && (
        <>
          <Color customize={props.customize} onCustomize={props.onCustomize} />
          <LayoutLists
            customize={props.customize}
            onCustomize={props.onCustomize}
          />
          <FontLists
            customize={props.customize}
            onCustomize={props.onCustomize}
          />
        </>
      )}
    </section>
  );
}
