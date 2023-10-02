import { useState } from "react";
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
  faChevronUp,
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
  faChevronUp,
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
  return (
    <div className="app">
      <header>
        <Logo />
      </header>
      <main className="main">
        <AddInformationSection />
        <CVPage />
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

function AddInformationSection() {
  return (
    <aside className="information-section">
      <ModeBox />
      <DetailBox />

      <InformationBox title="Personal Details" icon={faUser}>
        <PersonalForm />
      </InformationBox>

      <InformationBox title="Education" icon={faGraduationCap}>
        <EducationLists />
      </InformationBox>

      <InformationBox title="Experience" icon={faBriefcase}>
        <ExperienceLists />
      </InformationBox>

      <InformationBox title="Project" icon={faGear}>
        <ProjectLists />
      </InformationBox>

      <InformationBox title="Technology" icon={faMicrochip}>
        <TechnologyForm />
      </InformationBox>

      <InformationBox title="Certificate" icon={faCertificate}>
        <CertificateLists />
      </InformationBox>

      <InformationBox title="Language" icon={faLanguage}>
        <LanguageLists />
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

function InformationBox({ title, icon, children }) {
  return (
    <div className="box">
      <header>
        <Button className="info-btn">
          <h1>
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          </h1>
        </Button>
      </header>
      {children}
    </div>
  );
}

function PersonalForm() {
  return (
    <form>
      <Input>First Name</Input>
      <Input>Last Name</Input>
      <Input>Email</Input>
      <Input>Phone Number</Input>
      <Input>Address</Input>
      <TextArea>Introduction</TextArea>
    </form>
  );
}

function EducationLists() {
  return (
    <>
      <EducationForm />
      <ul>
        {/* map */}
        <List>KU</List>
        {/* hide */}
      </ul>
      <AddButton />
    </>
  );
}

function EducationForm() {
  return (
    <Form>
      <Input>School</Input>
      <Input>Degree</Input>
      <Input>Major</Input>
      <Input>Minor</Input>
      <Input>GPA</Input>
      <InputDate />
      <Input>Location</Input>
    </Form>
  );
}

function ExperienceLists() {
  return (
    <>
      <ExperienceForm />
      <ul>
        <List>AAM</List>
      </ul>
      <AddButton />
    </>
  );
}

function ExperienceForm() {
  return (
    <Form>
      <Input>Company Name</Input>
      <Input>Position</Input>
      <InputDate />
      <Input>Location</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function ProjectLists() {
  return (
    <>
      <ProjectForm />
      <ul>
        <List>AAM</List>
      </ul>
      <AddButton />
    </>
  );
}

function ProjectForm() {
  return (
    <Form>
      <Input>Project Name</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function TechnologyForm() {
  return (
    <form>
      <TextArea>Tools</TextArea>
    </form>
  );
}

function CertificateLists() {
  return (
    <>
      <CertificateForm />
      <ul>
        <List>React</List>
      </ul>
      <AddButton />
    </>
  );
}

function CertificateForm() {
  return (
    <Form>
      <Input>Course Name</Input>
      <Input>Year</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function LanguageLists() {
  return (
    <>
      <LanguageForm />
      <ul>
        <List>TOEIC</List>
      </ul>
      <AddButton />
    </>
  );
}

function LanguageForm() {
  return (
    <Form>
      <Input>Test Name</Input>
      <Input>Scores</Input>
    </Form>
  );
}

function List({ children }) {
  return (
    <li className="block">
      <Button>{children}</Button>
      <Button>
        <FontAwesomeIcon icon={faEye} className="faEye" />
      </Button>
    </li>
  );
}

function Form({ children }) {
  return (
    <form>
      {children}
      <span className="form-btn-container">
        <button className="delete-btn small-btn">
          <FontAwesomeIcon icon={faTrashCan} /> <span>Delete</span>
        </button>
        <button className="cancel-btn small-btn">Cancel</button>
        <button className="save-btn small-btn">Save</button>
      </span>
    </form>
  );
}

function AddButton() {
  return (
    <div className="block">
      <button className="add-btn">+ Add</button>
    </div>
  );
}

function InputDate() {
  return (
    <div className="input-date">
      <label className="start">Start Date</label>
      <input type="text" />
      <label className="end">End Date</label>
      <input type="text" />
    </div>
  );
}

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

function Input({ children }) {
  return (
    <div>
      <label>{children}</label>
      <input type="text" />
    </div>
  );
}

function TextArea({ children }) {
  return (
    <div>
      <label>{children}</label>
      <textarea></textarea>
    </div>
  );
}

function CVPage({
  firstName,
  lastName,
  email,
  tel,
  address,
  intro,
  allEducations,
  allExperiences,
  allProjects,
  tech,
  allCertificates,
  allLanguages,
}) {
  return (
    <section className="cv-page">
      <header>
        <h1>Arpawan Vanichwattana</h1>
        <div className="">
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>arpawan.v@gmail.com</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> <span>+66 092 690 0880</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>SamutPrakarn, Thailand</span>
          </p>
        </div>
      </header>
      <main>
        <p>Looking forward to work in Fullstack position</p>
        {/* check && */}
        <ContentBox title="Education">
          {/* map */}
          <DateAndLocation />
          <EducationContent />
        </ContentBox>
        <ContentBox title="Experience">
          {/* map */}
          <DateAndLocation />
          <ExperienceContent />
        </ContentBox>
        <ContentBox>
          {/* map */}
          <ProjectContent title="Projects" />
        </ContentBox>
        <ContentBox>
          <TechnologyContent title="Tech Stacks" />
        </ContentBox>
        <ContentBox title="Certificates">
          <CertificateContent />
        </ContentBox>
        <ContentBox title="Languages">
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

function DateAndLocation({ start, end, location = "" }) {
  return (
    <div>
      <p>12/08/2020 - present</p>
      <p>Bangkok, TH</p>
    </div>
  );
}

function EducationContent({
  school,
  degree,
  major = "",
  minor = "",
  gpa = "",
}) {
  return (
    <div>
      <h2>KU</h2>
      <p>Bachelors of Economics</p>
      <ul>
        <li>Major in Monetary Economics and Public Finance</li>
        <li>Minor in Business Economics</li>
        <li>GPA: 3.71/4.00</li>
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

function TechnologyContent({ tools }) {
  return <p>{tools}</p>;
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
