export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "NotyApp",
    techs: ["Android (Kotlin)"],
    link: "https://play.google.com/store/apps/details?id=com.manuelduarte077.notyapp",
  },
  {
    title: "Cartelera App",
    techs: ["Dart (Flutter)", "Riverpod", "THE_MOVIEDB_API"],
    link: "https://github.com/manuelduarte077/movies",
  },
  {
    title: "Wonder Noty App",
    techs: ["React Native (Expo)", "Javascript"],
    link: "https://app.noty.donmanuel.dev/link",
  },
  {
    title: "NotedUp",
    techs: ["Dart (Flutter)", "Android", "iOS", "Firebase"],
    link: "https://app.notedup.donmanuel.dev/app",
  },
  {
    title: "News App",
    techs: ["React Native (Expo)", "Javascript", "API"],
    link: "https://github.com/manuelduarte077/news_app",
  },
];

export default projects;
