type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "maxencewolff.pro@gmail.com",
  title: "Hi, I’m Maxence 👋",
  // profile: "/profile.webp",
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/manuelduarte077",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/manuelduarte077/",
    },
    {
      label: "Github",
      link: "https://github.com/manuelduarte077",
    },
  ],
};

export default presentation;
