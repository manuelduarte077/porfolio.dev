export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "NotyApp",
    techs: ["Android (Kotlin)"],
    link: "https://play.google.com/store/apps/details?id=com.manuelduarte077.notyapp",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Cartelera App",
    techs: ["Dart (Flutter)", "Riverpod", "THE_MOVIEDB_API"],
    link: "https://github.com/manuelduarte077/movies",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Wonder Noty App",
    techs: ["React Native (Expo)", "Javascript"],
    link: "https://app.noty.donmanuel.dev/link",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "NotedUp",
    techs: ["Dart (Flutter)", "Android", "iOS", "Firebase"],
    link: "https://app.notedup.donmanuel.dev/app",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "News App",
    techs: ["React Native (Expo)", "Javascript", "API"],
    link: "https://github.com/manuelduarte077/news_app",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Auris Cleaning Services",
    techs: ["React", "Typescript", "TailwindCSS", "CEO"],
    link: "https://www.auriscleaningservices.com/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Lomas Club App",
    techs: ["Dart (Futter)", "PixelPay", "Android", "iOS"],
    link: "https://apps.apple.com/no/app/lomas-club-app/id6470324204",
    image: "/posts/amogus.jpeg",
  },
];

export default projects;
