import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as icons from "./icon.jsx";
library.add(...Object.values(icons));

const personalDefault = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  intro: "",
};

const educDefault = {
  id: crypto.randomUUID(),
  type: "school",
  isHide: false,
  school: "",
  degree: "",
  major: "",
  minor: "",
  gpa: "",
  startDate: "",
  endDate: "",
  location: "",
};

const expDefault = {
  id: crypto.randomUUID(),
  type: "company",
  isHide: false,
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
};

const projectDefault = {
  id: crypto.randomUUID(),
  type: "project",
  isHide: false,
  project: "",
  description: "",
};

const certDefault = {
  id: crypto.randomUUID(),
  type: "certificate",
  isHide: false,
  certificate: "",
  year: "",
  description: "",
};

const langDefault = {
  id: crypto.randomUUID(),
  type: "langTest",
  isHide: false,
  langTest: "",
  scores: "",
};

const editDefault = {
  id: null,
  type: "",
};

const defaultCustomize = {
  color: "#445D48",
  layout: "top",
  font: "'Noto Sans', sans-serif",
};

const demoDetail = {
  personal: {
    firstName: "Huckleberry",
    lastName: "Finn",
    email: "finnhuck@gmail.com",
    phone: "+66 91 234 567",
    address: "Samut Prakan, Thailand",
    intro: "I look forward to applying for full-stack position.",
  },
  educations: [
    {
      id: crypto.randomUUID(),
      type: "school",
      isHide: false,
      school: "Hello World University",
      degree: "Bachelors in Economics",
      major: "Monetary and Fiscal Policy",
      minor: "Business Economics",
      gpa: "3.71/4.00",
      startDate: "01/01/2018",
      endDate: "01/01/2020",
      location: "Bangkok, Thailand",
    },
  ],
  experiences: [
    {
      id: crypto.randomUUID(),
      type: "company",
      isHide: false,
      company: "Ampas Auto Mirror Co., Ltd.",
      position: "Sales Data Analyst and Export Sales",
      startDate: "01/01/2021",
      endDate: "01/01/2022",
      location: "Samut Prakan, Thailand",
      description:
        "Designed system for evaluating the total sales and liabilities in each month in order to control the company profit and speculate the market trend\n\nCreated a market plan to expand foreign markets and did product pricing based on exchange rate to foreign customers.",
    },
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      type: "project",
      isHide: false,
      project: "Todo List",
      description:
        "This project designed for users who want to list their tasks in each day, month, or week",
    },
  ],
  tech: "HTML, CSS, Javascript, React, Node js, Typescript, SASS, Next js, Postgre SQL, Webpack, JEST",
  certificates: [
    {
      id: crypto.randomUUID(),
      type: "certificate",
      isHide: false,
      certificate: "The Complete JavaScript Course 2023: From Zero to Expert!",
      year: "2023",
      description:
        "Learn Javascript with Jonas Schmedtmann in Udemy online course",
    },
  ],
  languages: [
    {
      id: crypto.randomUUID(),
      type: "langTest",
      isHide: false,
      langTest: "toeic",
      scores: "781/900",
    },
    {
      id: crypto.randomUUID(),
      type: "langTest",
      isHide: false,
      langTest: "hsk 4",
      scores: "245/300",
    },
  ],
  others:
    "I write, erase, rewrite\nErase again, and then\nA poppy blooms.\n\nby Tachibana Hokushi",
};

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

function Logo() {
  return (
    <header className="header">
      <h1 className="logo">
        <img src="../public/woman.svg" alt="woman" />{" "}
        <span>CV Application</span> <img src="../public/man.svg" alt="man" />
      </h1>
    </header>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function InformationSection(props) {
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

function ModeBox({ mode, onMode }) {
  return (
    <div className="mode-box box">
      <button
        className={`mode-btn ${mode === "content" && "active-mode"}`}
        onClick={() => onMode("content")}
      >
        <FontAwesomeIcon icon={["fas", "file-lines"]} /> <span>Content</span>
      </button>
      <button
        className={`mode-btn ${mode === "customize" && "active-mode"}`}
        onClick={() => onMode("customize")}
      >
        <FontAwesomeIcon icon={["fas", "paint-brush"]} /> <span>Customize</span>
      </button>
    </div>
  );
}

function DetailBox({ onClear, onDemo, onPDF }) {
  return (
    <div className="detail-box box">
      <div>
        <button className="detail-btn clear-detail" onClick={onClear}>
          <FontAwesomeIcon icon={["fas", "trash-can"]} />{" "}
          <span>Clear detail</span>
        </button>
        <button className="detail-btn demo-detail" onClick={onDemo}>
          Demo detail
        </button>
      </div>
      <SavePDFButton onPDF={onPDF} />
    </div>
  );
}

function SavePDFButton({ onPDF }) {
  return (
    <button className="save-pdf-btn small-btn" onClick={onPDF}>
      <span>
        <FontAwesomeIcon icon={["fas", "download"]} /> <span>PDF</span>
      </span>
    </button>
  );
}

function BoxInput({ title, icon, dataIndex, data, defaultProp, children }) {
  return (
    <div className="box">
      <Topic
        title={title}
        icon={icon}
        dataIndex={dataIndex}
        selected={defaultProp.selected}
        onSelected={defaultProp.onSelected}
      />

      {defaultProp.isAdd && defaultProp.selected === dataIndex && children}
      {!defaultProp.isAdd && defaultProp.selected === dataIndex && (
        <DetailTitleLists
          data={data}
          onAdd={defaultProp.onAdd}
          onToggleHide={defaultProp.onToggleHide}
          onEdit={defaultProp.onEdit}
        />
      )}
    </div>
  );
}

function Topic({ title, icon, dataIndex, selected = "", onSelected = "" }) {
  const toggleBox = dataIndex !== 0 && dataIndex !== 4 && dataIndex !== 7;
  return (
    <header>
      <button
        className="info-btn"
        onClick={() => (toggleBox ? onSelected(dataIndex) : "")}
      >
        <h1>
          <FontAwesomeIcon icon={["fas", icon]} />
          <span>{title}</span>
          {toggleBox && (
            <FontAwesomeIcon
              icon={["fas", "chevron-down"]}
              className={`chevron ${dataIndex === selected ? "rotate" : ""}`}
            />
          )}
        </h1>
      </button>
    </header>
  );
}

function FormLayout({ children, onDelete, onCancel, onSave, id, type }) {
  return (
    <form>
      {children}
      <span className="form-btn-container">
        <button
          className="delete-btn small-btn"
          onClick={(e) => {
            onCancel(e);
            onDelete(e, id, type);
          }}
        >
          <FontAwesomeIcon icon={["fas", "trash-can"]} /> <span>Delete</span>
        </button>
        <button className="cancel-btn small-btn" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="save-btn small-btn"
          onClick={(e) => {
            onCancel(e);
            onSave(e, type);
          }}
        >
          Save
        </button>
      </span>
    </form>
  );
}

function DetailTitleLists({ onAdd, data, onToggleHide, onEdit }) {
  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((obj) => (
            <DetailTitle
              key={obj.id}
              id={obj.id}
              type={obj.type}
              isHide={obj.isHide}
              onToggleHide={onToggleHide}
              onEdit={onEdit}
              // NOTE Open form when click edit
              onAdd={onAdd}
            >
              {obj[obj.type]}
            </DetailTitle>
          ))}
        <DetailTitle />
      </ul>
      <div className="block">
        <button className="add-btn" onClick={onAdd}>
          + Add
        </button>
      </div>
    </>
  );
}

function DetailTitle({
  children,
  id,
  type,
  isHide,
  onToggleHide,
  onEdit,
  onAdd,
}) {
  return (
    <>
      {children && (
        <li className="block">
          <button
            onClick={() => {
              onEdit(id, type);
              onAdd();
            }}
          >
            {children}
          </button>
          <button className="faEye-btn" onClick={() => onToggleHide(id, type)}>
            <FontAwesomeIcon icon={["far", isHide ? "eye-slash" : "eye"]} />
          </button>
        </li>
      )}
    </>
  );
}

function PersonalDetailsBox({ personal, onPersonal }) {
  return (
    <div className="box">
      <Topic title="personal details" icon="user" dataIndex={0} />
      <PersonalDetailsForm personal={personal} onPersonal={onPersonal} />
    </div>
  );
}

function PersonalDetailsForm({ personal, onPersonal }) {
  return (
    <form>
      <Input name="firstName" value={personal.firstName} onChange={onPersonal}>
        First Name
      </Input>
      <Input name="lastName" value={personal.lastName} onChange={onPersonal}>
        Last Name
      </Input>
      <Input name="email" value={personal.email} onChange={onPersonal}>
        Email
      </Input>
      <Input name="phone" value={personal.phone} onChange={onPersonal}>
        Phone Number
      </Input>
      <Input name="address" value={personal.address} onChange={onPersonal}>
        Address
      </Input>
      <TextArea name="intro" value={personal.intro} onChange={onPersonal}>
        Introduction
      </TextArea>
    </form>
  );
}

function EducationBox({ defaultProp, educ, onEduc, educations }) {
  return (
    <BoxInput
      title="education"
      icon="graduation-cap"
      dataIndex={1}
      defaultProp={defaultProp}
      data={educations}
    >
      <EducationForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        educ={educ}
        onEduc={onEduc}
      />
    </BoxInput>
  );
}

function EducationForm({ onDelete, onCancel, onSave, educ, onEduc }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={educ.id}
      type={educ.type}
    >
      <Input name="school" value={educ.school} onChange={onEduc}>
        School
      </Input>
      <Input name="degree" value={educ.degree} onChange={onEduc}>
        Degree
      </Input>
      <Input name="major" value={educ.major} onChange={onEduc}>
        Major
      </Input>
      <Input name="minor" value={educ.minor} onChange={onEduc}>
        Minor
      </Input>
      <Input name="gpa" value={educ.gpa} onChange={onEduc}>
        GPA
      </Input>
      <div className="input-date">
        <Input name="startDate" value={educ.startDate} onChange={onEduc}>
          Start Date
        </Input>
        <Input name="endDate" value={educ.endDate} onChange={onEduc}>
          End Date
        </Input>
      </div>
      <Input name="location" value={educ.location} onChange={onEduc}>
        Location
      </Input>
    </FormLayout>
  );
}

function ExperienceBox({ defaultProp, exp, onExp, experiences }) {
  return (
    <BoxInput
      title="experience"
      icon="briefcase"
      dataIndex={2}
      defaultProp={defaultProp}
      data={experiences}
    >
      <ExperienceForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        exp={exp}
        onExp={onExp}
      />
    </BoxInput>
  );
}

function ExperienceForm({ onDelete, onCancel, onSave, exp, onExp }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={exp.id}
      type={exp.type}
    >
      <Input name="company" value={exp.company} onChange={onExp}>
        Company Name
      </Input>
      <Input name="position" value={exp.position} onChange={onExp}>
        Position
      </Input>
      <div className="input-date">
        <Input name="startDate" value={exp.startDate} onChange={onExp}>
          Start Date
        </Input>
        <Input name="endDate" value={exp.endDate} onChange={onExp}>
          End Date
        </Input>
      </div>
      <Input name="location" value={exp.location} onChange={onExp}>
        Location
      </Input>
      <TextArea name="description" value={exp.description} onChange={onExp}>
        Description
      </TextArea>
    </FormLayout>
  );
}

function ProjectBox({ defaultProp, project, onProject, projects }) {
  return (
    <BoxInput
      title="project"
      icon="gear"
      dataIndex={3}
      defaultProp={defaultProp}
      data={projects}
    >
      <ProjectForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        project={project}
        onProject={onProject}
      />
    </BoxInput>
  );
}

function ProjectForm({ onDelete, onCancel, onSave, project, onProject }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={project.id}
      type={project.type}
    >
      <Input name="project" value={project.project} onChange={onProject}>
        Project Name
      </Input>
      <TextArea
        name="description"
        value={project.description}
        onChange={onProject}
      >
        Description
      </TextArea>
    </FormLayout>
  );
}

function TechnologyBox({ tech, onTech }) {
  return (
    <div className="box">
      <Topic title="technology" icon="microchip" dataIndex={4} />
      <TechnologyForm tech={tech} onTech={onTech} />
    </div>
  );
}

function TechnologyForm({ tech, onTech }) {
  return (
    <form>
      <TextArea name="tech" value={tech} onChange={onTech}>
        Tools
      </TextArea>
    </form>
  );
}

function CertificateBox({ defaultProp, cert, onCert, certificates }) {
  return (
    <BoxInput
      title="certificate"
      icon="certificate"
      dataIndex={5}
      defaultProp={defaultProp}
      data={certificates}
    >
      <CertificateForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        cert={cert}
        onCert={onCert}
      />
    </BoxInput>
  );
}

function CertificateForm({ onDelete, onCancel, onSave, cert, onCert }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={cert.id}
      type={cert.type}
    >
      <Input name="certificate" value={cert.certificate} onChange={onCert}>
        Certificate Name
      </Input>
      <Input name="year" value={cert.year} onChange={onCert}>
        Year
      </Input>
      <TextArea name="description" value={cert.description} onChange={onCert}>
        Description
      </TextArea>
    </FormLayout>
  );
}

function LanguageBox({ defaultProp, lang, onLang, languages }) {
  return (
    <BoxInput
      title="language"
      icon="language"
      dataIndex={6}
      defaultProp={defaultProp}
      data={languages}
    >
      <LanguageForm
        onDelete={defaultProp.onDelete}
        onCancel={defaultProp.onCancel}
        onSave={defaultProp.onSave}
        lang={lang}
        onLang={onLang}
      />
    </BoxInput>
  );
}

function LanguageForm({ onDelete, onCancel, onSave, lang, onLang }) {
  return (
    <FormLayout
      onDelete={onDelete}
      onCancel={onCancel}
      onSave={onSave}
      id={lang.id}
      type={lang.type}
    >
      <Input name="langTest" value={lang.langTest} onChange={onLang}>
        Language Test
      </Input>
      <Input name="scores" value={lang.scores} onChange={onLang}>
        Scores
      </Input>
    </FormLayout>
  );
}

function OthersBox({ others, onOthers }) {
  return (
    <div className="box">
      <Topic title="others" icon="square-plus" dataIndex={7} />
      <OthersForm others={others} onOthers={onOthers} />
    </div>
  );
}

function OthersForm({ others, onOthers }) {
  return (
    <form>
      <TextArea name="others" value={others} onChange={onOthers}></TextArea>
    </form>
  );
}

function Input({ children, name, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <input type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
}

function TextArea({ children, name, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <textarea name={name} value={value} onChange={onChange}></textarea>
    </div>
  );
}

//////////////////////////////////////////

function CustomizeBox({ title, className, children }) {
  return (
    <div className="customize-box">
      <h1>{title}</h1>
      <ul className={className}>{children}</ul>
    </div>
  );
}

function Color({ customize, onCustomize }) {
  return (
    <CustomizeBox title="color" className="color">
      <li>
        <input
          name="color"
          type="color"
          value={customize.color}
          onChange={(e) => onCustomize(e.target.name, e.target.value)}
        />
      </li>
    </CustomizeBox>
  );
}

function LayoutLists({ customize, onCustomize }) {
  return (
    <CustomizeBox title="layout" className="layout">
      {["top", "left", "right"].map((pos, i) => (
        <Layout
          key={i}
          pos={pos}
          color={customize.color}
          onCustomize={onCustomize}
          isSelected={pos === customize.layout}
        />
      ))}
    </CustomizeBox>
  );
}

function Layout({ pos, color, onCustomize, isSelected }) {
  return (
    <li>
      <button
        className={`layout-btn ${isSelected && "active-layout"}`}
        onClick={() => onCustomize("layout", pos)}
      >
        <div className={`layout-stripe ${pos}`}>
          <div className="stripe-1" style={{ backgroundColor: color }}></div>
          <div className="stripe-2"></div>
        </div>
        <p>{pos}</p>
      </button>
    </li>
  );
}

function FontLists({ customize, onCustomize }) {
  return (
    <CustomizeBox title="font" className="font">
      {[
        ["'Noto Sans', sans-serif", "sans"],
        ["serif", "serif"],
        ["monospace", "mono"],
      ].map((font, i) => (
        <Font
          key={i}
          font={font[0]}
          abbreviation={font[1]}
          onCustomize={onCustomize}
          isSelected={font[0] === customize.font}
        />
      ))}
    </CustomizeBox>
  );
}

function Font({ font, abbreviation, onCustomize, isSelected }) {
  return (
    <li>
      <button
        className={`font-btn ${isSelected && "active-font"}`}
        style={{ fontFamily: font }}
        onClick={() => onCustomize("font", font)}
      >
        <p>Aa</p>
        <p>{abbreviation}</p>
      </button>
    </li>
  );
}

//////////////////////////////////////////

function hexIsLight(color) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const bright = (r * 299 + g * 587 + b * 114) / 1000;
  return bright > 155;
}

function CVSection(props) {
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

function HeadContent({ personal, bgColor, fontColor }) {
  return (
    <header
      className="cv-header"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <h1>{personal.firstName + " " + personal.lastName}</h1>
      <div>
        {personal.email && (
          <p>
            <FontAwesomeIcon icon={("fas", "envelope")} />{" "}
            <span>{personal.email}</span>
          </p>
        )}
        {personal.phone && (
          <p>
            <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
            <span>{personal.phone}</span>
          </p>
        )}
        {personal.address && (
          <p>
            <FontAwesomeIcon icon={["fas", "location-dot"]} />{" "}
            <span>{personal.address}</span>
          </p>
        )}
      </div>
    </header>
  );
}

function MainContent({ children, personal }) {
  return (
    <main className="cv-main">
      {personal.intro && <p>{personal.intro}</p>}
      {children}
    </main>
  );
}

function DetailLayout({
  title,
  children,
  isEmpty = true,
  colorTitle,
  bgTitle,
}) {
  return (
    <>
      {!isEmpty && (
        <div className="detail">
          <h1
            className="detail-topic"
            style={{ backgroundColor: bgTitle, color: colorTitle }}
          >
            {title}
          </h1>
          {children}
        </div>
      )}
    </>
  );
}

function DateAndLocation({ startDate, endDate, location }) {
  return (
    <div className="date-location">
      {(startDate || endDate) && (
        <p>
          {startDate}
          {startDate && endDate ? " - " : ""}
          {endDate}
        </p>
      )}
      {location && <p>{location}</p>}
    </div>
  );
}

function checkEmpty(obj, data) {
  const curObj = Object.values(obj)
    .slice(3)
    .every((input) => input === "");

  const curData = data.every((obj) => obj.isHide === true);

  return (curObj && !data.length) || (curData && data.length);
}

function EducationDetailLists({
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

function ExperienceDetailLists({
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

function ProjectDetailLists({
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

function TechnologyDetail({ tech, colorTitle, bgTitle }) {
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

function CertificateDetailLists({
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

function LanguageDetailLists({
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

function OthersDetail({ others = "reference", colorTitle, bgTitle }) {
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

function Footer() {
  return (
    <footer className="footer">
      <a href="">
        <FontAwesomeIcon icon={["fab", "github"]} className="github" />
      </a>
      <p>&copy; Copyright by avanich28</p>
    </footer>
  );
}
