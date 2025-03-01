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
    title: "Never Forgett",
    techs: ["Dart (Flutter)", "Riverpod", "Firebase"],
    link: "https://forgett.donmanuel.dev/",
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
    title: "Auris Cleaning Services",
    techs: ["React", "Typescript", "TailwindCSS", "CEO"],
    link: "https://www.auriscleaningservices.com/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Wonder Tech",
    techs: ["Astro", "Typescript", "TailwindCSS"],
    link: "https://www.wondertech.dev/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Wonder Link",
    techs: ["React", "Typescript", "TailwindCSS", "NodeJS", "MongoDB"],
    link: "https://link.wondertech.dev/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Expo Wallpaper",
    techs: ["Javascript", "Expo", "React Native"],
    link: "https://expo-wallpaper.donmanuel.dev/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "TomaYa",
    techs: ["Swift", "SwiftUI", "iOS"],
    link: "https://tomaya.donmanuel.dev/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Shazam Lyrics",
    techs: ["Swift", "SwiftUI", "iOS", "ShazamKit"],
    link: "https://shazam-lyrics.donmanuel.dev/",
    image: "/posts/amogus.jpeg",
  },
  {
    title: "Lomas Club App",
    techs: ["Dart (Flutter)", "PixelPay", "Android", "iOS"],
    link: "https://apps.apple.com/no/app/lomas-club-app/id6470324204",
    image: "/posts/amogus.jpeg",
  },
];

export default projects;
