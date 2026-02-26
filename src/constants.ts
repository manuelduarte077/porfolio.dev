import { Project, Article, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "veerla",
    title: "Veerla",
    description:
      "Guardá tus pelis y series favoritas para verlas más tarde. Con Veerla, tu watchlist personal está siempre a la mano.",
    longDescription:
      "Veerla es una aplicación diseñada para los amantes del cine y las series que desean llevar un control estricto de lo que quieren ver. Utiliza las últimas tecnologías de Apple para ofrecer una experiencia fluida y nativa, permitiendo a los usuarios descubrir nuevos contenidos y organizarlos de manera eficiente.",
    technologies: ["SwiftUI", "SwiftData", "TMDB API", "CloudKit"],
    tags: ["Swift", "SwiftUI", "SwiftData"],
    link: "https://apps.apple.com/us/app/veerla-guard%C3%A1-pelis-y-series/id6744546242",
    type: "iOS",
  },
  {
    id: "cuenta-clara",
    title: "Cuenta Clara",
    description:
      "Divide Gastos Fácilmente. Una herramienta esencial para grupos y amigos.",
    longDescription:
      "Cuenta Clara simplifica la tediosa tarea de dividir gastos entre amigos o compañeros de viaje. Con una interfaz intuitiva y sincronización en tiempo real, permite registrar deudas, pagos y balances de forma transparente para todos los involucrados.",
    technologies: ["Flutter", "Firebase Auth", "Firestore", "Provider"],
    tags: ["Dart", "Flutter", "Firebase"],
    link: "https://apps.apple.com/ni/app/cuenta-clara/id6743010799?l=en-GB",
    type: "Cross-platform",
  },
  {
    id: "todo-anotadito",
    title: "Todo Anotadito",
    description:
      "Tu lista de compras, clara y sin enredos. Simplicidad al máximo.",
    longDescription:
      "Todo Anotadito es la respuesta a las aplicaciones de listas de compras sobrecargadas. Se centra en la velocidad de entrada y la claridad visual, asegurando que nunca olvides nada en el supermercado gracias a su integración con recordatorios y widgets.",
    technologies: ["SwiftUI", "SwiftData", "WidgetsKit", "App Intents"],
    tags: ["Swift", "SwiftUI", "SwiftData"],
    link: "https://todoanotadito.donmanuel.dev/",
    type: "iOS",
  },
  {
    id: "notyapp",
    title: "NotyApp",
    description:
      "La aplicación de notas esencial para mantenerte organizado y productivo.",
    longDescription:
      "NotyApp es una solución de toma de notas robusta para Android que prioriza la privacidad y el rendimiento. Permite organizar pensamientos mediante etiquetas, búsqueda avanzada y almacenamiento local seguro, con opción de respaldo en la nube.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room Database",
      "Hilt",
      "Firebase",
    ],
    tags: ["Kotlin", "Firebase", "Room"],
    link: "https://play.google.com/store/apps/details?id=com.manuelduarte077.notyapp",
    type: "Android",
  },
  {
    id: "lomas-club",
    title: "Lomas Club App",
    description: "Lomas Club App - Exclusive experience for members.",
    longDescription:
      "Lomas Club App provides an exclusive digital experience for club members, allowing them to access services, events, and community features directly from their mobile devices.",
    technologies: ["Swift", "SwiftUI", "Firebase"],
    tags: ["Swift", "SwiftUI", "iOS"],
    link: "https://apps.apple.com/ni/app/lomas-club-app/id6470324204?l=en-GB",
    type: "iOS",
  },
  {
    id: "tucambio",
    title: "TuCambio",
    description: "Check exchange rates in Nicaragua in real-time.",
    longDescription:
      "TuCambio is a utility app for Nicaraguans to check the official and parallel exchange rates of the Cordoba against the US Dollar and other currencies, with historical data and calculators.",
    technologies: ["SwiftUI", "API Integration", "Charts"],
    tags: ["Swift", "SwiftUI", "Finance"],
    link: "https://apps.apple.com/ni/app/tucambio/id6744262206?l=en-GB",
    type: "iOS",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "software-engineer-independent",
    company: "Independent / Freelance",
    position: "Software Engineer (Mobile & Backend)",
    period: "Jan 2021 - Present",
    description:
      "Specialized in developing high-performance native applications for iOS and Android. Architected and deployed scalable backend solutions using C# and .NET, integrated with PostgreSQL and Firebase. Published multiple successful apps on the App Store and Google Play, including Veerla, Cuenta Clara, and Todo Anotadito.",
    technologies: [
      "Kotlin",
      "Swift",
      "SwiftUI",
      "C#",
      ".NET",
      "PostgreSQL",
      "Firebase",
      "KMP",
    ],
  },
  {
    id: "lomas-club-dev",
    company: "Lomas Club",
    position: "Mobile Developer",
    period: "Aug 2023 - Dec 2024",
    description:
      "Led the development of the official Lomas Club mobile application. Implemented exclusive member features, real-time event notifications, and a seamless digital experience for club services using SwiftUI and Firebase.",
    technologies: ["Swift", "SwiftUI", "Firebase", "iOS Development"],
  },
  {
    id: "tech-writer",
    company: "donmanuel.dev / Dev.to",
    position: "Technical Content Creator",
    period: "Mar 2021 - Present",
    description:
      "Educating the developer community through in-depth technical articles. Focused on simplifying complex concepts in Mobile Development, Go, and Python. Reached thousands of developers through platforms like Dev.to and personal blog.",
    technologies: [
      "Technical Writing",
      "SEO",
      "Go",
      "Python",
      "Community Building",
    ],
  },
];
