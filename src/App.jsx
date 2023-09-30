import { useState } from "react";

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
        <i className="bi bi-person-circle"></i> <span>CV Application</span>
      </h1>
    </header>
  );
}

function AddInformationSection() {
  return (
    <aside>
      <ModeBox />
      <DetailBox />

      <InformationBox title="Personal Details">
        <PersonalForm />
      </InformationBox>

      <InformationBox title="Education">
        <EducationLists />
      </InformationBox>

      <InformationBox title="Experience">
        <ExperienceLists />
      </InformationBox>
    </aside>
  );
}

function ModeBox() {
  return (
    <div className="mode-box">
      <Button>
        <i className="bi bi-file-text-fill"></i> <span>Content</span>
      </Button>
      <Button>
        <i className="bi bi-brush-fill"></i> <span>Customize</span>
      </Button>
    </div>
  );
}

function DetailBox() {
  return (
    <div className="detail-box">
      <Button>
        <i className="bi bi-trash-fill"></i> <span>Clear detail</span>
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
        <i className="bi bi-download"></i> <span>Save</span>
      </span>
    </Button>
  );
}

function InformationBox({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
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
        <Education />
        {/* hide */}
      </ul>
      <Button>+ Add</Button>
      <EducationForm />
    </>
  );
}

function Education() {
  return (
    <li>
      {/* need to get props */}
      <Button>KU</Button>
      <Button>
        <i className="bi bi-eye"></i>
      </Button>
    </li>
  );
}

function EducationForm() {
  return (
    <form>
      <Input>School</Input>
      <Input>Degree</Input>
      <Input>Start Date</Input>
      <Input>End Date</Input>
      <button>
        <i className="bi bi-trash-fill"></i> <span>Delete</span>
      </button>
      <button>Cancel</button>
      <button>Save</button>
    </form>
  );
}

function ExperienceLists() {
  return (
    <>
      <ul>
        <Experience />
      </ul>
      <Button>+ Add</Button>
      <ExperienceForm />
    </>
  );
}

function Experience() {
  return (
    <li>
      <Button>AAM</Button>
      <Button>
        <i className="bi bi-eye"></i>
      </Button>
    </li>
  );
}

function ExperienceForm() {
  return (
    <form>
      <Input>Company Name</Input>
      <Input>Position</Input>
      <Input>Start Date</Input>
      <Input>End Date</Input>
      <Input>Description</Input>
      <button>
        <i className="bi bi-trash-fill"></i> <span>Delete</span>
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
            <i className="bi bi-envelope-fill"></i>{" "}
            <span>arpawan.v@gmail.com</span>
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i>{" "}
            <span>+66 092 690 0880</span>
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i>{" "}
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
        <i className="bi bi-github"></i>
      </a>
      <p>&copy; Copyright by avanich28</p>
    </footer>
  );
}

// projects (name, description)
// technologies (categories, tool)
// certifications (name, year, description)
// languages (name, score)
