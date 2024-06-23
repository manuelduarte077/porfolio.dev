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
  mail: "hello@donmanuel.dev",
  title: "Hi, I’m Manuel 👋",
  // profile: "/profile.webp",
  description:
    "What's up, I'm *Mobile Application Developer* with more than *4 years of experience*. I am currently working with *React Native and Flutter*. Outside of work, I play FIFA and learning KMP",
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
