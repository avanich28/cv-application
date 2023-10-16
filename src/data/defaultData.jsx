export const personalDefault = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  intro: "",
};

export const educDefault = {
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

export const expDefault = {
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

export const projectDefault = {
  id: crypto.randomUUID(),
  type: "project",
  isHide: false,
  project: "",
  description: "",
};

export const certDefault = {
  id: crypto.randomUUID(),
  type: "certificate",
  isHide: false,
  certificate: "",
  year: "",
  description: "",
};

export const langDefault = {
  id: crypto.randomUUID(),
  type: "langTest",
  isHide: false,
  langTest: "",
  scores: "",
};

export const editDefault = {
  id: null,
  type: "",
};

export const defaultCustomize = {
  color: "#445D48",
  layout: "top",
  font: "'Noto Sans', sans-serif",
};
