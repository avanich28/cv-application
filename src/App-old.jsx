import { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faFileLines,
  faPaintbrush,
  faTrashCan,
  faDownload,
  faChevronDown,
  faGraduationCap,
  faBriefcase,
  faGear,
  faMicrochip,
  faCertificate,
  faLanguage,
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faFileLines,
  faPaintbrush,
  faTrashCan,
  faDownload,
  faEye,
  faEyeSlash,
  faChevronDown,
  faGraduationCap,
  faBriefcase,
  faGear,
  faMicrochip,
  faCertificate,
  faLanguage,
  faEnvelope,
  faPhone,
  faLocationDot,
  faGithub
);

export default function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [intro, setIntro] = useState("");
  const fullName = firstName + " " + lastName;
  const [tech, setTech] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [gpa, setGpa] = useState("");
  const [startEduc, setStartEduc] = useState("");
  const [endEduc, setEndEduc] = useState("");
  const [locationEduc, setLocationEduc] = useState("");

  const [education, setEducation] = useState([]);

  const personalDetail = {
    fullName,
    email,
    tel,
    address,
    intro,
  };

  const educationDetail = {
    id: education.length,
    school,
    degree,
    major,
    minor,
    gpa,
    startEduc,
    endEduc,
    locationEduc,
    hide: false,
  };

  console.log(educationDetail);

  function clear(type) {
    if (type === "school") {
      setSchool("");
      setDegree("");
      setMajor("");
      setMinor("");
      setGpa("");
      setStartEduc("");
      setEndEduc("");
      setLocationEduc("");
    }
  }

  function handleSaveEducation(e) {
    e.preventDefault();
    setEducation((educ) => [...educ, educationDetail]);
    clear("school");
  }

  // Can't solve this
  function handleEdit(index, type) {
    if (type === "school") {
      const arr = education.slice();
      arr[index] = { ...arr[index], ...educationDetail };
      setEducation(arr);
    }
  }

  function toggleHide(index, type, isShow) {
    if (type === "school") {
      const arr = education.slice();
      arr[index].hide = isShow;
      setEducation(arr);
    }
  }
  console.log(education);

  return (
    <div className="app">
      <header>
        <Logo />
      </header>
      <main className="main">
        <AddInformationSection
          firstName={firstName}
          lastName={lastName}
          email={email}
          tel={tel}
          address={address}
          intro={intro}
          tech={tech}
          school={school}
          degree={degree}
          major={major}
          minor={minor}
          gpa={gpa}
          startEduc={startEduc}
          endEduc={endEduc}
          locationEduc={locationEduc}
          onFirstName={setFirstName}
          onLastName={setLastName}
          onEmail={setEmail}
          onTel={setTel}
          onAddress={setAddress}
          onIntro={setIntro}
          onTech={setTech}
          onSchool={setSchool}
          onDegree={setDegree}
          onMajor={setMajor}
          onMinor={setMinor}
          onGpa={setGpa}
          onStartEduc={setStartEduc}
          onEndEduc={setEndEduc}
          onLocationEduc={setLocationEduc}
          // array
          education={education}
          onEducation={handleSaveEducation}
          // others
          onToggleHide={toggleHide}
          onClear={clear}
          onEdit={setIsEdit}
          onIndexEdit={setIndexEdit}
        />
        <CVPage
          personalDetail={personalDetail}
          techDetail={tech}
          education={education}
          educationDetail={educationDetail}
          isEdit={isEdit}
          indexEdit={indexEdit}
        />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <h1 className="logo">
      <img src="../public/woman.svg" alt="woman" /> <span>CV Application</span>{" "}
      <img src="../public/man.svg" alt="man" />
    </h1>
  );
}

function AddInformationSection(props) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelected(index) {
    if (index === selected) setSelected(null);
    else setSelected(index);
  }

  function handleClickList() {
    setIsOpen(true);
  }

  function handleAdd() {
    setIsOpen(true);
  }

  function handleCancel(e, type) {
    e.preventDefault();
    setIsOpen(false);
    props.onClear(type);
  }

  function handleSave(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <aside className="information-section">
      <ModeBox />
      <DetailBox />

      <InformationBox
        title="Personal Details"
        icon={faUser}
        index={0}
        selected={selected}
        onSelected={handleSelected}
      >
        <PersonalForm state={props} />
      </InformationBox>

      <InformationBox
        title="Education"
        icon={faGraduationCap}
        index={1}
        selected={selected}
        onSelected={handleSelected}
      >
        {isOpen && (
          <EducationForm
            onCancel={handleCancel}
            state={props}
            onSaveData={props.onEducation}
            onSave={handleSave}
          />
        )}
        <ListBox
          isOpen={isOpen}
          onAdd={handleAdd}
          data={props.education}
          name="school"
          onToggleHide={props.onToggleHide}
          onClickList={handleClickList}
          onEdit={props.onEdit}
          onIndexEdit={props.onIndexEdit}
        />
      </InformationBox>

      <InformationBox
        title="Experience"
        icon={faBriefcase}
        index={2}
        selected={selected}
        onSelected={handleSelected}
      >
        {isOpen && <ExperienceForm onCancel={handleCancel} />}
        <ListBox isOpen={isOpen} onAdd={handleAdd} />
      </InformationBox>

      <InformationBox
        title="Project"
        icon={faGear}
        index={3}
        selected={selected}
        onSelected={handleSelected}
      >
        {isOpen && <ProjectForm onCancel={handleCancel} />}
        <ListBox isOpen={isOpen} onAdd={handleAdd} />
      </InformationBox>

      <InformationBox
        title="Technology"
        icon={faMicrochip}
        index={4}
        selected={selected}
        onSelected={handleSelected}
      >
        <TechnologyForm state={props} />
      </InformationBox>

      <InformationBox
        title="Certificate"
        icon={faCertificate}
        index={5}
        selected={selected}
        onSelected={handleSelected}
      >
        {isOpen && <CertificateForm onCancel={handleCancel} />}
        <ListBox isOpen={isOpen} onAdd={handleAdd} />
      </InformationBox>

      <InformationBox
        title="Language"
        icon={faLanguage}
        index={6}
        selected={selected}
        onSelected={handleSelected}
      >
        {isOpen && <LanguageForm onCancel={handleCancel} />}
        <ListBox isOpen={isOpen} onAdd={handleAdd} />
      </InformationBox>
    </aside>
  );
}

function ModeBox() {
  return (
    <div className="mode-box box">
      <Button className="mode-btn">
        <FontAwesomeIcon icon={faFileLines} /> <span>Content</span>
      </Button>
      <Button className="mode-btn">
        <FontAwesomeIcon icon={faPaintbrush} /> <span>Customize</span>
      </Button>
    </div>
  );
}

function DetailBox({ onClickClear, onClickDemo }) {
  return (
    <div className="detail-box box">
      <div>
        <Button className="detail-btn">
          <FontAwesomeIcon icon={faTrashCan} /> <span>Clear detail</span>
        </Button>
        <Button className="detail-btn">Demo detail</Button>
      </div>
      <SavePDFButton />
    </div>
  );
}

function SavePDFButton({ onClick }) {
  return (
    <Button className="save-pdf-btn small-btn">
      <span>
        <FontAwesomeIcon icon={faDownload} /> <span>PDF</span>
      </span>
    </Button>
  );
}

function InformationBox({
  title,
  icon,
  index,
  selected,
  onSelected,
  children,
}) {
  // Personal and Tech details
  const normalBox = index === 0 || index === 4;
  return (
    <div className="box">
      <header>
        <Button
          className="info-btn"
          onClick={() => (!normalBox ? onSelected(index) : "")}
        >
          <h1>
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>

            {!normalBox && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`chevron ${index === selected ? "rotate" : ""}`}
              />
            )}
          </h1>
        </Button>
      </header>
      {normalBox && children}
      {index === selected && children}
    </div>
  );
}

function ListBox({
  isOpen,
  onAdd,
  data,
  name,
  onToggleHide,
  onClickList,
  onEdit,
  onIndexEdit,
}) {
  return (
    <>
      {!isOpen && (
        <>
          <UnorderedLists
            data={data}
            name={name}
            onToggleHide={onToggleHide}
            onClickList={onClickList}
            onEdit={onEdit}
            onIndexEdit={onIndexEdit}
          />
          <AddButton onAdd={onAdd} />
        </>
      )}
    </>
  );
}

function PersonalForm({ state }) {
  return (
    <form>
      <Input value={state.firstName} onChange={state.onFirstName}>
        First Name
      </Input>
      <Input value={state.lastName} onChange={state.onLastName}>
        Last Name
      </Input>
      <Input value={state.email} onChange={state.onEmail}>
        Email
      </Input>
      <Input value={state.tel} onChange={state.onTel}>
        Phone Number
      </Input>
      <Input value={state.address} onChange={state.onAddress}>
        Address
      </Input>
      <TextArea value={state.intro} onChange={state.onIntro}>
        Introduction
      </TextArea>
    </form>
  );
}

function EducationForm({ onCancel, state, onSaveData, onSave }) {
  return (
    <Form
      onCancel={onCancel}
      onSaveData={onSaveData}
      onSave={onSave}
      type="school"
    >
      <Input value={state.school} onChange={state.onSchool}>
        School
      </Input>
      <Input value={state.degree} onChange={state.onDegree}>
        Degree
      </Input>
      <Input value={state.major} onChange={state.onMajor}>
        Major
      </Input>
      <Input value={state.minor} onChange={state.onMinor}>
        Minor
      </Input>
      <Input value={state.gpa} onChange={state.onGpa}>
        GPA
      </Input>
      <InputDate
        value1={state.startEduc}
        value2={state.endEduc}
        onChange1={state.onStartEduc}
        onChange2={state.onEndEduc}
      />
      <Input value={state.locationEduc} onChange={state.onLocationEduc}>
        Location
      </Input>
    </Form>
  );
}

function ExperienceForm({ onCancel }) {
  return (
    <Form onCancel={onCancel}>
      <Input>Company Name</Input>
      <Input>Position</Input>
      <InputDate />
      <Input>Location</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function ProjectForm({ onCancel }) {
  return (
    <Form onCancel={onCancel}>
      <Input>Project Name</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function TechnologyForm({ state }) {
  return (
    <form>
      <TextArea value={state.tech} onChange={state.onTech}>
        Tools
      </TextArea>
    </form>
  );
}

function CertificateForm({ onCancel }) {
  return (
    <Form onCancel={onCancel}>
      <Input>Course Name</Input>
      <Input>Year</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function LanguageForm({ onCancel }) {
  return (
    <Form onCancel={onCancel}>
      <Input>Test Name</Input>
      <Input>Scores</Input>
    </Form>
  );
}

function UnorderedLists({
  data,
  name,
  onToggleHide,
  onClickList,
  onEdit,
  onIndexEdit,
}) {
  return (
    <ul>
      {/* map */}
      {data.map((obj) => (
        <List
          key={obj.id}
          id={obj.id}
          type={name}
          onToggleHide={onToggleHide}
          onClickList={onClickList}
          onEdit={onEdit}
          onIndexEdit={onIndexEdit}
        >
          {obj[name]}
        </List>
      ))}
    </ul>
  );
}

function List({
  children,
  id,
  type,
  onToggleHide,
  onClickList,
  onEdit,
  onIndexEdit,
}) {
  const [isShow, setIsShow] = useState(true);
  return (
    <li className="block">
      <Button
        onClick={() => {
          onClickList();
          onEdit((is) => !is);
          onIndexEdit(id);
        }}
      >
        {children}
      </Button>
      <Button
        className="faEye-btn"
        onClick={() => {
          onToggleHide(id, type, isShow);
          setIsShow((is) => !is);
        }}
      >
        <FontAwesomeIcon icon={isShow ? faEye : faEyeSlash} className="faEye" />
      </Button>
    </li>
  );
}

function Form({ children, onCancel, onSave, onSaveData, type }) {
  return (
    <form>
      {children}
      <span className="form-btn-container">
        <button className="delete-btn small-btn">
          <FontAwesomeIcon icon={faTrashCan} /> <span>Delete</span>
        </button>
        <button
          className="cancel-btn small-btn"
          onClick={(e) => onCancel(e, type)}
        >
          Cancel
        </button>
        <button
          className="save-btn small-btn"
          onClick={(e) => {
            onSaveData(e);
            onSave(e);
          }}
        >
          Save
        </button>
      </span>
    </form>
  );
}

function AddButton({ onAdd }) {
  return (
    <div className="block">
      <button className="add-btn" onClick={onAdd}>
        + Add
      </button>
    </div>
  );
}

function InputDate({ value1, value2, onChange1, onChange2 }) {
  return (
    <div className="input-date">
      <label className="start">Start Date</label>
      <input
        type="text"
        value={value1}
        onChange={(e) => onChange1(e.target.value)}
      />
      <label className="end">End Date</label>
      <input
        type="text"
        value={value2}
        onChange={(e) => onChange2(e.target.value)}
      />
    </div>
  );
}

function Button({ className, children, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

function Input({ children, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      />
    </div>
  );
}

function TextArea({ children, value, onChange }) {
  return (
    <div>
      <label>{children}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

function CVPage({
  personalDetail,
  techDetail,
  education,
  educationDetail,
  isEdit,
  indexEdit,
}) {
  return (
    <section className="cv-page">
      <header>
        <h1>{personalDetail.fullName}</h1>
        <div className="">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>{personalDetail.email}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <span>{personalDetail.tel}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>{personalDetail.address}</span>
          </p>
        </div>
      </header>
      <main>
        <p>{personalDetail.intro}</p>
        {/* check && */}
        <ContentBox title="Education">
          {/* map */}
          {education.map((educ) =>
            educ.id === indexEdit ? (
              <Fragment key={educ.id}>
                <DateAndLocation
                  start={educationDetail.startEduc}
                  end={educationDetail.endEduc}
                  location={educationDetail.locationEduc}
                />
                <EducationContent state={educationDetail} />
              </Fragment>
            ) : (
              <Fragment key={educ.id}>
                <DateAndLocation
                  start={educ.startEduc}
                  end={educ.endEduc}
                  location={educ.locationEduc}
                />
                <EducationContent state={educ} />
              </Fragment>
            )
          )}
          {isEdit === false && (
            <>
              <DateAndLocation
                start={educationDetail.startEduc}
                end={educationDetail.endEduc}
                location={educationDetail.locationEduc}
              />
              <EducationContent state={educationDetail} />
            </>
          )}
        </ContentBox>
        <ContentBox title="Experience">
          {/* map */}
          <DateAndLocation />
          <ExperienceContent />
        </ContentBox>
        <ContentBox title="Projects">
          {/* map */}
          <ProjectContent />
        </ContentBox>
        <ContentBox title="Tech Stacks">
          <TechnologyContent techDetail={techDetail} />
        </ContentBox>
        <ContentBox title="Certificates">
          {/* map */}
          <CertificateContent />
        </ContentBox>
        <ContentBox title="Languages">
          {/* map */}
          <LanguageContent />
        </ContentBox>
      </main>
    </section>
  );
}

function ContentBox({ title, children }) {
  return (
    <section className="content">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function DateAndLocation({ start, end, location }) {
  return (
    <div>
      <p>
        {start} - {end}
      </p>
      <p>{location}</p>
    </div>
  );
}

function EducationContent({ state }) {
  return (
    <div className={state.hide ? "hide" : ""}>
      <h2>{state.school}</h2>
      <p>{state.degree}</p>
      <ul>
        <li>{state.major}</li>
        <li>{state.minor}</li>
        <li>{state.gpa}</li>
      </ul>
    </div>
  );
}

function ExperienceContent({ company, position, description }) {
  return (
    <div>
      <h2>AAM</h2>
      <h3>Export Sales</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum quo
        doloribus, repudiandae dolor aspernatur non cupiditate at eos, sunt
        aperiam nam libero cumque dignissimos nostrum totam adipisci dolorem
        explicabo?
      </p>
    </div>
  );
}

function ProjectContent() {
  return (
    <div>
      <h2>Todo List</h2>
      <p>The app are used for listing the tasks.</p>
    </div>
  );
}

function TechnologyContent({ techDetail }) {
  return <p>{techDetail}</p>;
}

function CertificateContent({ allCertificates }) {
  return (
    <ul>
      {/* map */}
      <li>
        <p>The Complete Javascript Course 2023: From Zero to Expert!</p>
        <p>Online Course taught by Jonas Schemdtmann (2023)</p>
      </li>
    </ul>
  );
}

function LanguageContent({ allTests }) {
  return (
    <ul>
      {/* map */}
      <li>Toeic: 781</li>
    </ul>
  );
}

function Footer() {
  return (
    <>
      <a href="">
        <FontAwesomeIcon icon={faGithub} className="github" />
      </a>
      <p>&copy; Copyright by avanich28</p>
    </>
  );
}
