export const demoDetail = {
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
