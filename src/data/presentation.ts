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
  title: "Hi, I'm Manuel 👋",
  // profile: "/profile.webp",
  description:
    "Hello! I'm a *Software Engineer* with *4+ years of experience* specializing in mobile development. I work primarily with *React Native, Swift, and Kotlin*. Currently exploring Kotlin Multiplatform and React. Outside of work, I enjoy playing FIFA.",
  socials: [
    {
      label: "X",
      link: "https://x.com/manuelduarte077",
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
