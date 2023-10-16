import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "../icon.jsx";
library.add(...Object.values(icons));
import { demoDetail } from "../data/demoData.jsx";
import {
  personalDefault,
  educDefault,
  expDefault,
  projectDefault,
  certDefault,
  langDefault,
  editDefault,
  defaultCustomize,
} from "../data/defaultData.jsx";
import { Logo } from "./Logo.jsx";
import { Main } from "./Main.jsx";
import { InformationSection } from "./InformationSection.jsx";
import { CVSection } from "./CVSection.jsx";
import { Footer } from "./Footer.jsx";

export default function App() {
  const [personal, setPersonal] = useState(demoDetail.personal);
  const [tech, setTech] = useState(demoDetail.tech);
  const [others, setOthers] = useState(demoDetail.others);
  const [educ, setEduc] = useState(educDefault);
  const [exp, setExp] = useState(expDefault);
  const [project, setProject] = useState(projectDefault);
  const [cert, setCert] = useState(certDefault);
  const [lang, setLang] = useState(langDefault);
  const [educations, setEducations] = useState(demoDetail.educations);
  const [experiences, setExperiences] = useState(demoDetail.experiences);
  const [projects, setProjects] = useState(demoDetail.projects);
  const [certificates, setCertificates] = useState(demoDetail.certificates);
  const [languages, setLanguages] = useState(demoDetail.languages);
  const [edit, setEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(editDefault);
  const [customize, setCustomize] = useState(defaultCustomize);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "resume",
    onAfterPrint: () => alert("Print success"),
  });

  // Clear form when click delete, cancel, and save buttons
  function handleClearObj() {
    setEdit(false);
    setSelectedEdit(editDefault);
    setEduc({ ...educDefault, id: crypto.randomUUID() });
    setExp({ ...expDefault, id: crypto.randomUUID() });
    setProject({ ...projectDefault, id: crypto.randomUUID() });
    setCert({ ...certDefault, id: crypto.randomUUID() });
    setLang({ ...langDefault, id: crypto.randomUUID() });
  }

  // Clear all cv page
  function handleClickClearDetail() {
    handleClearObj();
    setPersonal(personalDefault);
    setTech("");
    setEducations([]);
    setExperiences([]);
    setProjects([]);
    setCertificates([]);
    setLanguages([]);
    setCustomize(defaultCustomize);
    setOthers("");
  }

  function handleClickDemoDetail() {
    handleClearObj();
    setPersonal(demoDetail.personal);
    setTech(demoDetail.tech);
    setEducations(demoDetail.educations);
    setExperiences(demoDetail.experiences);
    setProjects(demoDetail.projects);
    setCertificates(demoDetail.certificates);
    setLanguages(demoDetail.languages);
    setOthers(demoDetail.others);
  }

  function handleChangePersonal(e) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }

  function handleChangeTech(e) {
    setTech(e.target.value);
  }

  function handleChangeOthers(e) {
    setOthers(e.target.value);
  }

  function handleChangeEduc(e) {
    setEduc({
      ...educ,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeExp(e) {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeProject(e) {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeCert(e) {
    setCert({
      ...cert,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeLang(e) {
    setLang({
      ...lang,
      [e.target.name]: e.target.value,
    });
  }

  function getIndex(id, data) {
    const index = data.findIndex((obj) => obj.id === id);
    return index;
  }

  function saveObj(
    curObj,
    type,
    data,
    setterFuncObj,
    setterFuncData,
    defaultObj
  ) {
    if (!curObj[type]) alert(`Please enter your ${type} name`);
    else if (edit) {
      const arr = data.slice();
      const index = getIndex(selectedEdit.id, data);
      arr[index] = curObj;
      setterFuncData(arr);
    } else {
      setterFuncData([...data, curObj]);
      setterFuncObj({ ...defaultObj, id: crypto.randomUUID() });
    }
  }

  function handleSave(e, type) {
    e.preventDefault();
    if (type === "school")
      saveObj(educ, type, educations, setEduc, setEducations, educDefault);
    if (type === "company")
      saveObj(exp, type, experiences, setExp, setExperiences, expDefault);
    if (type === "project")
      saveObj(project, type, projects, setProject, setProjects, projectDefault);
    if (type === "certificate")
      saveObj(cert, type, certificates, setCert, setCertificates, certDefault);
    if (type === "langTest")
      saveObj(lang, type, languages, setLang, setLanguages, langDefault);
  }

  function deleteObj(id, setterFunc) {
    if (!edit) return;
    setterFunc((arr) => arr.filter((obj) => obj.id !== id));
  }

  function handleDelete(e, id, type) {
    e.preventDefault();
    if (type === "school") deleteObj(id, setEducations);
    if (type === "company") deleteObj(id, setExperiences);
    if (type === "project") deleteObj(id, setProjects);
    if (type === "certificate") deleteObj(id, setCertificates);
    if (type === "langTest") deleteObj(id, setLanguages);
    handleClearObj(type);
  }

  function handleHide(id, data, setterFunc) {
    const arr = data.slice();
    const index = getIndex(id, data);
    arr[index].isHide = !arr[index].isHide;
    setterFunc(arr);
  }

  function toggleHide(id, type) {
    if (type === "school") handleHide(id, educations, setEducations);
    if (type === "company") handleHide(id, experiences, setExperiences);
    if (type === "project") handleHide(id, projects, setProjects);
    if (type === "certificate") handleHide(id, certificates, setCertificates);
    if (type === "langTest") handleHide(id, languages, setLanguages);
  }

  function setInitialObj(id, data, setterFunc) {
    const index = getIndex(id, data);
    const editObj = data[index];
    setterFunc(editObj);
  }

  function handleEdit(id, type) {
    setEdit((edit) => !edit);
    setSelectedEdit({ id: id, type: type });
    if (type === "school") setInitialObj(id, educations, setEduc);
    if (type === "company") setInitialObj(id, experiences, setExp);
    if (type === "project") setInitialObj(id, projects, setProject);
    if (type === "certificate") setInitialObj(id, certificates, setCert);
    if (type === "langTest") setInitialObj(id, languages, setLang);
  }

  function handleCustomize(name, value) {
    setCustomize({ ...customize, [name]: value });
  }

  return (
    <div className="app">
      <Logo />
      <Main>
        <InformationSection
          onPDF={handlePrint}
          onClear={handleClickClearDetail}
          onDemo={handleClickDemoDetail}
          onClearObj={handleClearObj}
          onToggleHide={toggleHide}
          edit={edit}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSave={handleSave}
          customize={customize}
          onCustomize={handleCustomize}
          personal={personal}
          onPersonal={handleChangePersonal}
          tech={tech}
          onTech={handleChangeTech}
          others={others}
          onOthers={handleChangeOthers}
          educ={educ}
          onEduc={handleChangeEduc}
          exp={exp}
          onExp={handleChangeExp}
          project={project}
          onProject={handleChangeProject}
          cert={cert}
          onCert={handleChangeCert}
          lang={lang}
          onLang={handleChangeLang}
          educations={educations}
          experiences={experiences}
          projects={projects}
          certificates={certificates}
          languages={languages}
        />
        <CVSection
          componentRef={componentRef}
          edit={edit}
          selectedEdit={selectedEdit}
          personal={personal}
          tech={tech}
          others={others}
          educ={educ}
          educations={educations}
          exp={exp}
          experiences={experiences}
          project={project}
          projects={projects}
          cert={cert}
          certificates={certificates}
          lang={lang}
          languages={languages}
          customize={customize}
        />
      </Main>
      <Footer />
    </div>
  );
}
