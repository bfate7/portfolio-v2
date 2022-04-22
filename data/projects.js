export const projects = [
  {
    year: 2022,
    title: "Personal Portfolio v2",
    description: "",
    type: "side project",
    technologies: ["nextjs", "tailwindcss", "framer"],
  },
  {
    year: 2021,
    title: "Company phone book generator",
    description: "",
    type: "freelance",
    technologies: ["electronjs", "bootstrap"],
  },
  {
    year: 2021,
    title: "My Personal Portfolio v1",
    description: "",
    type: "side project",
    technologies: ["react", "tailwindcss"],
  },
  {
    year: 2020,
    title: "react-slack-clone",
    description: "Slack clone app buid with React Redux, and Firebase.",
    type: "side project",
    github_url: "https://github.com/bfate7/slack-clone-react-firebase",
    technologies: ["react", "redux", "firebase"],
    image: "test.jpeg",
    featured: true,
  },

  {
    year: 2020,
    title: "full website for a computer shop",
    description:
      "full computer shop including inventory, orders management, invoicing , and other features.",
    type: "internship project",
    technologies: ["flask", "sqlite", "booststrap"],
    image: "test.jpeg",
    featured: true,
  },
];

export const featured_projects = projects.filter(project => project.featured);
