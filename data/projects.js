export const projects = [
  {
    year: 2022,
    title: "Portfolio v2",
    description: "",
    type: "side project",
    technologies: ["nextjs", "tailwindcss", "framer"],
  },
  {
    year: 2021,
    title: "Company phone book app",
    description: "",
    type: "freelance",
    technologies: ["electronjs", "bootstrap", "mysql"],
  },
  {
    year: 2021,
    title: "Portfolio v1",
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
    image: "devchat.png",
    featured: true,
  },

  {
    year: 2020,
    title: "Full website for a computer shop",
    description:
      "Full computer shop website including inventory, orders management, invoicing , and other features.",
    type: "internship project",
    technologies: ["flask", "sqlite", "booststrap"],
    image: "computer_shop_products.png",
    featured: true,
  },
];

export const featured_projects = projects.filter(project => project.featured);
