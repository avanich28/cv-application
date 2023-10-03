import { useState, Fragment } from "react";
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
  id: 0,
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

const editDefault = {
  index: null,
  type: "",
};

export default function App() {
  const [personal, setPersonal] = useState(personalDefault);
  const [educations, setEducations] = useState([]);
  const [educ, setEduc] = useState(educDefault);
  const [tech, setTech] = useState("");
  const [edit, setEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(editDefault);

  function handleClear() {
    setEdit(false);
    setSelectedEdit(editDefault);
    setEduc(educDefault);
  }

  function handleChangePersonal(e) {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  }

  function handleChangeEduc(e) {
    setEduc({
      ...educ,
      [e.target.name]: e.target.value,
    });
  }

  function handleChangeTech(e) {
    setTech(e.target.value);
  }

  function handleSaveEduc(e) {
    e.preventDefault();
    setEducations([...educations, educ]);
    setEduc({ ...educDefault, id: educations.length + 1 });
  }

  function handleHide(index, data, setterFunc) {
    const arr = data.slice();
    arr[index].isHide = !arr[index].isHide;
    setterFunc(arr);
  }

  function toggleHide(index, type) {
    if (type === "school") handleHide(index, educations, setEducations);
  }

  function setInitialObj(index, data, setterFunc) {
    const editObj = data[index];
    setterFunc(editObj);
  }

  function handleEdit(index, type) {
    setEdit((edit) => !edit);
    setSelectedEdit({ index: index, type: type });
    if (type === "school") setInitialObj(index, educations, setEduc);
  }

  return (
    <div className="app">
      <Logo />
      <Main>
        <InformationSection
          onClear={handleClear}
          onToggleHide={toggleHide}
          edit={edit}
          onEdit={handleEdit}
          personal={personal}
          onPersonal={handleChangePersonal}
          tech={tech}
          onTech={handleChangeTech}
          educ={educ}
          onEduc={handleChangeEduc}
          onSaveEduc={handleSaveEduc}
          educations={educations}
        />
        <CVSection
          edit={edit}
          selectedEdit={selectedEdit}
          personal={personal}
          tech={tech}
          educ={educ}
          educations={educations}
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

// IMPT Need to clear prop 🥸
function InformationSection({
  onClear,
  onToggleHide,
  edit,
  onEdit,
  personal,
  onPersonal,
  tech,
  onTech,
  educ,
  onEduc,
  onSaveEduc,
  educations,
}) {
  const [selected, setSelected] = useState(0);
  const [isAdd, setIsAdd] = useState(false);

  function handleSelectedTopic(dataIndex) {
    if (dataIndex === selected) setSelected(null);
    else setSelected(dataIndex);
    setIsAdd(false);
  }

  function handleClickAdd() {
    setIsAdd(true);
  }

  function handleClickCancelAndSave(e) {
    e.preventDefault();
    setIsAdd(false);
    if (edit) onClear();
  }

  const defaultProp = {
    selected,
    isAdd,
    onSelected: handleSelectedTopic,
    onAdd: handleClickAdd,
    onCancel: handleClickCancelAndSave,
    onToggleHide,
    onEdit,
  };

  return (
    <section className="information-section">
      <ModeBox />
      <DetailBox />
      <PersonalDetailsBox personal={personal} onPersonal={onPersonal} />
      <EducationBox
        {...defaultProp}
        educ={educ}
        onEduc={onEduc}
        onSave={onSaveEduc}
        educations={educations}
      />
      <ExperienceBox {...defaultProp} />
      <ProjectBox {...defaultProp} />
      <TechnologyBox tech={tech} onTech={onTech} />
      <CertificateBox {...defaultProp} />
      <LanguageBox {...defaultProp} />
    </section>
  );
}

function Topic({ title, icon, dataIndex, selected = "", onSelected = "" }) {
  const toggleBox = dataIndex !== 0 && dataIndex !== 4;
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

function FormLayout({ children, onCancel, onSave }) {
  return (
    <form>
      {children}
      <span className="form-btn-container">
        <button className="delete-btn small-btn">
          <FontAwesomeIcon icon={["fas", "trash-can"]} /> <span>Delete</span>
        </button>
        <button className="cancel-btn small-btn" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="save-btn small-btn"
          onClick={(e) => {
            onCancel(e);
            onSave(e);
          }}
        >
          Save
        </button>
      </span>
    </form>
  );
}

// Receive data array ex. educations []
// NOTE get rid of ?.
function DetailTitleLists({ onAdd, data, onToggleHide, onEdit }) {
  console.log(data);
  return (
    <>
      <ul>
        {/* map */}
        {data?.length > 0 &&
          data.map((obj) => (
            <DetailTitle
              key={obj.id}
              index={obj.id}
              type={obj.type}
              onToggleHide={onToggleHide}
              onEdit={onEdit}
              onAdd={onAdd} // open form
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

function DetailTitle({ children, index, type, onToggleHide, onEdit, onAdd }) {
  const [isHide, setIsHide] = useState(false);
  return (
    <li className="block">
      <button
        onClick={() => {
          onEdit(index, type);
          onAdd();
        }}
      >
        {children || "Detail Title Demo"}
      </button>
      <button
        className="faEye-btn"
        onClick={() => {
          setIsHide((is) => !is);
          onToggleHide(index, type);
        }}
      >
        <FontAwesomeIcon icon={["far", isHide ? "eye-slash" : "eye"]} />
      </button>
    </li>
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

// value + onChange + onSubmit?
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

function EducationBox({
  onToggleHide,
  onEdit,
  selected,
  isAdd,
  onSelected,
  onAdd,
  onCancel,
  educ,
  onEduc,
  onSave,
  educations,
}) {
  return (
    <div className="box">
      <Topic
        title="education"
        icon="graduation-cap"
        dataIndex={1}
        selected={selected}
        onSelected={onSelected}
      />

      {isAdd && selected === 1 && (
        <EducationForm
          onCancel={onCancel}
          educ={educ}
          onEduc={onEduc}
          onSave={onSave}
        />
      )}
      {!isAdd && selected === 1 && (
        <DetailTitleLists
          onAdd={onAdd}
          data={educations}
          onToggleHide={onToggleHide}
          onEdit={onEdit}
        />
      )}
    </div>
  );
}

function EducationForm({ onCancel, educ, onEduc, onSave }) {
  return (
    <FormLayout onCancel={onCancel} onSave={onSave}>
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

function ExperienceBox({ selected, isAdd, onSelected, onAdd, onCancel }) {
  return (
    <div className="box">
      <Topic
        title="experience"
        icon="briefcase"
        dataIndex={2}
        selected={selected}
        onSelected={onSelected}
      />
      {isAdd && selected === 2 && <ExperienceForm onCancel={onCancel} />}
      {!isAdd && selected === 2 && <DetailTitleLists onAdd={onAdd} />}
    </div>
  );
}

function ExperienceForm({ onCancel }) {
  return (
    <FormLayout onCancel={onCancel}>
      <Input>Company Name</Input>
      <Input>Position</Input>
      <div className="input-date">
        <Input>Start Date</Input>
        <Input>End Date</Input>
      </div>
      <Input>Location</Input>
      <TextArea>Description</TextArea>
    </FormLayout>
  );
}

function ProjectBox({ selected, isAdd, onSelected, onAdd, onCancel }) {
  return (
    <div className="box">
      <Topic
        title="project"
        icon="gear"
        dataIndex={3}
        selected={selected}
        onSelected={onSelected}
      />
      {isAdd && selected === 3 && <ProjectForm onCancel={onCancel} />}
      {!isAdd && selected === 3 && <DetailTitleLists onAdd={onAdd} />}
    </div>
  );
}

function ProjectForm({ onCancel }) {
  return (
    <FormLayout onCancel={onCancel}>
      <Input>Project Name</Input>
      <TextArea>Description</TextArea>
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

function CertificateBox({ selected, isAdd, onSelected, onAdd, onCancel }) {
  return (
    <div className="box">
      <Topic
        title="certificate"
        icon="certificate"
        dataIndex={5}
        selected={selected}
        onSelected={onSelected}
      />
      {isAdd && selected === 5 && <CertificateForm onCancel={onCancel} />}
      {!isAdd && selected === 5 && <DetailTitleLists onAdd={onAdd} />}
    </div>
  );
}

function CertificateForm({ onCancel }) {
  return (
    <FormLayout onCancel={onCancel}>
      <Input>Course Name</Input>
      <Input>Year</Input>
      <TextArea>Description</TextArea>
    </FormLayout>
  );
}

function LanguageBox({ selected, isAdd, onSelected, onAdd, onCancel }) {
  return (
    <div className="box">
      <Topic
        title="language"
        icon="language"
        dataIndex={6}
        selected={selected}
        onSelected={onSelected}
      />
      {isAdd && selected === 6 && <LanguageForm onCancel={onCancel} />}
      {!isAdd && selected === 6 && <DetailTitleLists onAdd={onAdd} />}
    </div>
  );
}

function LanguageForm({ onCancel }) {
  return (
    <FormLayout onCancel={onCancel}>
      <Input>Test Name</Input>
      <Input>Scores</Input>
    </FormLayout>
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

function ModeBox() {
  return (
    <div className="mode-box box">
      <button className="mode-btn">
        <FontAwesomeIcon icon={["fas", "file-lines"]} /> <span>Content</span>
      </button>
      <button className="mode-btn">
        <FontAwesomeIcon icon={["fas", "paint-brush"]} /> <span>Customize</span>
      </button>
    </div>
  );
}

function DetailBox({ onClickClear, onClickDemo }) {
  return (
    <div className="detail-box box">
      <div>
        <button className="detail-btn">
          <FontAwesomeIcon icon={["fas", "trash-can"]} />{" "}
          <span>Clear detail</span>
        </button>
        <button className="detail-btn">Demo detail</button>
      </div>
      <SavePDFButton />
    </div>
  );
}

function SavePDFButton({ onClick }) {
  return (
    <button className="save-pdf-btn small-btn">
      <span>
        <FontAwesomeIcon icon={["fas", "download"]} /> <span>PDF</span>
      </span>
    </button>
  );
}

//////////////////////////////////////////

function CVSection({ edit, selectedEdit, personal, tech, educ, educations }) {
  const defaultProp = {
    edit,
    selectedEdit,
  };
  return (
    <section className="cv-section">
      <HeadContent personal={personal} />
      <MainContent personal={personal}>
        <EducationDetailLists
          {...defaultProp}
          educ={educ}
          educations={educations}
        />
        <ExperienceDetailLists {...defaultProp} />
        <ProjectDetailLists {...defaultProp} />
        <TechnologyDetail tech={tech} />
        <LanguageDetailLists {...defaultProp} />
      </MainContent>
    </section>
  );
}

function HeadContent({ personal }) {
  return (
    <header>
      <h1>{personal.firstName + " " + personal.lastName}</h1>
      <div>
        <p>
          <FontAwesomeIcon icon={("fas", "envelope")} />{" "}
          <span>{personal.email}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
          <span>{personal.phone}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={["fas", "location-dot"]} />{" "}
          <span>{personal.address}</span>
        </p>
      </div>
    </header>
  );
}

function MainContent({ children, personal }) {
  return (
    <main>
      <p>{personal.intro}</p>
      {children}
    </main>
  );
}

function DetailLayout({ title, children }) {
  return (
    <div className="detail">
      <h1 className="detail-topic">{title}</h1>
      {children}
    </div>
  );
}

function DateAndLocation({ startDate, endDate, location }) {
  return (
    <div className="date-location">
      <p>{startDate + " - " + endDate}</p>
      <p>{location}</p>
    </div>
  );
}

function EducationDetailLists({ educ, educations, edit, selectedEdit }) {
  return (
    <DetailLayout title="education">
      <ul>
        {/* map */}
        {educations.length > 0 &&
          educations.map((obj) =>
            selectedEdit.index === obj.id && obj.type === selectedEdit.type ? (
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
  school,
  degree,
  major,
  minor,
  gpa,
  startDate,
  endDate,
  location,
  isHide,
}) {
  return (
    <li className={isHide ? "hide" : ""}>
      <DateAndLocation
        startDate={startDate}
        endDate={endDate}
        location={location}
      />
      <h2>{school}</h2>
      <p>{degree}</p>
      <ul>
        <li>{major}</li>
        <li>{minor}</li>
        <li>{gpa}</li>
      </ul>
    </li>
  );
}

function ExperienceDetailLists() {
  return (
    <DetailLayout title="experience">
      <ul>
        {/* map */}
        <ExperienceDetail />
      </ul>
    </DetailLayout>
  );
}

function ExperienceDetail() {
  return (
    <li>
      <h2>AAM</h2>
      <h3>Export Sales</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum quo
        doloribus, repudiandae dolor aspernatur non cupiditate at eos, sunt
        aperiam nam libero cumque dignissimos nostrum totam adipisci dolorem
        explicabo?
      </p>
    </li>
  );
}

function ProjectDetailLists() {
  return (
    <DetailLayout title="project">
      <ul>
        {/* map */}
        <ProjectDetail />
      </ul>
    </DetailLayout>
  );
}

function ProjectDetail() {
  return (
    <li>
      <h2>Todo List</h2>
      <p>The app are used for listing the tasks.</p>
    </li>
  );
}

function TechnologyDetail({ tech }) {
  return (
    <DetailLayout title="tech-stack">
      <p>{tech}</p>
    </DetailLayout>
  );
}

function CertificateDetailLists() {
  return (
    <DetailLayout title="certificate">
      <ul>
        {/* map */}
        <CertificateDetail />
      </ul>
    </DetailLayout>
  );
}

function CertificateDetail() {
  return (
    <li>
      <p>The Complete Javascript Course 2023: From Zero to Expert!</p>
      <p>Online Course taught by Jonas Schemdtmann (2023)</p>
    </li>
  );
}

function LanguageDetailLists() {
  return (
    <DetailLayout title="language">
      <ul>
        {/* map */}
        <LanguageDetail />
      </ul>
    </DetailLayout>
  );
}

function LanguageDetail() {
  return <li>Toeic: 781</li>;
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
