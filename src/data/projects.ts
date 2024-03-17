export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Dictionary App",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "#",
  },
  {
    title: "Portfolio / Don Manuel",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Portfolio / Lina BLIDI",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "#",
  },
  {
    title: "Dictionary App",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "#",
  },

  {
    title: "Dictionary App",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "#",
  },
];

export default projects;
