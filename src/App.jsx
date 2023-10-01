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
    <>
      <Logo />
      <main>
        <AddInformationSection />
        <CVPage />
      </main>
      <Footer />
    </>
  );
}

function Logo() {
  return (
    <header>
      <h1>
        <img src="../public/woman.svg" alt="woman" />{" "}
        <span>CV Application</span> <img src="../public/man.svg" alt="man" />
      </h1>
    </header>
  );
}

function AddInformationSection() {
  return (
    <aside>
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
        <TechnologyLists />
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
    <div className="mode-box">
      <Button>
        <FontAwesomeIcon icon={faFileLines} /> <span>Content</span>
      </Button>
      <Button>
        <FontAwesomeIcon icon={faPaintbrush} /> <span>Customize</span>
      </Button>
    </div>
  );
}

function DetailBox() {
  return (
    <div className="detail-box">
      <Button>
        <FontAwesomeIcon icon={faTrashCan} /> <span>Clear detail</span>
      </Button>
      <Button>Demo detail</Button>
      <SaveButton />
    </div>
  );
}

function SaveButton() {
  return (
    <Button className="save-button">
      <span>
        <FontAwesomeIcon icon={faDownload} /> <span>Save</span>
      </span>
    </Button>
  );
}

function InformationBox({ title, icon = "", children }) {
  return (
    <div>
      <header>
        <h1>
          <FontAwesomeIcon icon={icon} /> <span>{title}</span>{" "}
          <FontAwesomeIcon icon={faChevronDown} />
        </h1>
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
      <ul>
        {/* map */}
        <List>KU</List>
        {/* hide */}
      </ul>
      <Button>+ Add</Button>
      <EducationForm />
    </>
  );
}

function EducationForm() {
  return (
    <Form>
      <Input>School</Input>
      <Input>Degree</Input>
      <Input>Start Date</Input>
      <Input>End Date</Input>
    </Form>
  );
}

function ExperienceLists() {
  return (
    <>
      <ul>
        <List>AAM</List>
      </ul>
      <Button>+ Add</Button>
      <ExperienceForm />
    </>
  );
}

function ExperienceForm() {
  return (
    <Form>
      <Input>Company Name</Input>
      <Input>Position</Input>
      <Input>Start Date</Input>
      <Input>End Date</Input>
      <TextArea>Description</TextArea>
    </Form>
  );
}

function ProjectLists() {
  return (
    <>
      <ul>
        <List>AAM</List>
      </ul>
      <Button>+ Add</Button>
      <ProjectForm />
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

function TechnologyLists() {
  return (
    <>
      <ul>
        <List>Stack</List>
      </ul>
      <Button>+ Add</Button>
      <TechnologyForm />
    </>
  );
}

function TechnologyForm() {
  return (
    <Form>
      <Input>Categories</Input>
      <TextArea>Tools</TextArea>
    </Form>
  );
}

function CertificateLists() {
  return (
    <>
      <ul>
        <List>React</List>
      </ul>
      <Button>+ Add</Button>
      <CertificateForm />
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
      <ul>
        <List>TOEIC</List>
      </ul>
      <Button>+ Add</Button>
      <LanguageForm />
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
    <li>
      <Button>{children}</Button>
      <Button>
        <FontAwesomeIcon icon={faEye} />
      </Button>
    </li>
  );
}

function Form({ children }) {
  return (
    <form>
      {children}
      <button>
        <FontAwesomeIcon icon={faTrashCan} /> <span>Delete</span>
      </button>
      <button>Cancel</button>
      <button>Save</button>
    </form>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function Input({ children }) {
  return (
    <>
      <label>{children}</label>
      <input type="text" />
    </>
  );
}

function TextArea({ children }) {
  return (
    <>
      <label>{children}</label>
      <textarea></textarea>
    </>
  );
}

function CVPage() {
  return (
    <section>
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
        <section>
          <h1>Education</h1>
          <div>
            <p>12/08/2020 - present</p>
            <p>Bangkok, TH</p>
          </div>
          <div>
            <h2>KU</h2>
            <p>Bachelors of Economics</p>
          </div>
        </section>
        <section>
          <h1>Experience</h1>
          <div>
            <p>12/08/2020 - present</p>
            <p>Bangkok, TH</p>
          </div>
          <div>
            <h2>AAM</h2>
            <h3>Export Sales</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              illum quo doloribus, repudiandae dolor aspernatur non cupiditate
              at eos, sunt aperiam nam libero cumque dignissimos nostrum totam
              adipisci dolorem explicabo?
            </p>
          </div>
        </section>
        <section>
          <h2>Javascript, 2023</h2>
          <p>Online course</p>
        </section>
      </main>
    </section>
  );
}

function Section() {
  return;
}

function Footer() {
  return (
    <footer className="footer">
      <a href="">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <p>&copy; Copyright by avanich28</p>
    </footer>
  );
}
