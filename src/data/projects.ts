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
    title: "Devote App",
    techs: ["SwiftUI", "iOS"],
    link: "https://github.com/manuelduarte077/Devote",
  },
  {
    title: "Wonder Noty App",
    techs: ["React Native (Expo)", "Javascript"],
    link: "https://apps.apple.com/us/app/wonder-noty-app/id6475991888",
  },
  {
    title: "NotedUp",
    techs: ["Dart (Flutter)", "Android", "iOS","Firebase"],
    link: "#",
    isComingSoon: true,
  },
  {
    title: "Portfolio / Don Manuel",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "News App",
    techs: ["React Native (Expo)", "Javascript","API"],
    link: "https://github.com/manuelduarte077/news_app",
  },
  {
    title: "Taimba Nahkisa",
    techs: ["Dart (Flutter)", "Android", "iOS", "API"],
    link: "#",
    isComingSoon: true,
  },
];

export default projects;
