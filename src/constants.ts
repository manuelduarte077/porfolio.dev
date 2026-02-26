import { Project, Experience } from "./types";

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
    id: "software-engineer-ii",
    company: "Novacomp",
    position: "Software Engineer II",
    period: "Sep 2024 - Present",
    description:
      "As a Software Engineer II, I am responsible for developing and maintaining high-performance native applications for iOS and Android. I also design and implement scalable backend solutions using C# and .NET, integrated with SQLServer and Azure.",
    technologies: ["Java", "Objective-C", "C#", ".NET", "SQLServer", "Azure"],
    location: "remote",
    type: "full-time",
  },
  {
    id: "mobile-developer",
    company: "Socialenials",
    position: "Mobile Developer",
    period: "Sep 2023 - Feb 2026",
    description:
      "Developed and maintained the official Socialenials mobile application using Flutter and Firebase.",
    technologies: ["Dart", "Flutter", "Firebase", "BloC", "PixelPay"],
    location: "remote",
    type: "part-time",
  },
  {
    id: "mobile-developer-flutter",
    company: "Disruptive Studio, Inc",
    position: "Mobile Developer",
    period: "June 2024 - Sep 2024",
    description: "Developed a crypto wallet application using Flutter.",
    technologies: ["Dart", "Flutter", "Wallet", "BloC", "Crypto", "Blockchain"],
    location: "remote",
    type: "full-time",
  },
  {
    id: "software-engineer",
    company: "Nerdify",
    position: "Software Engineer",
    period: "Feb 2022 - Jun 2024",
    description:
      "Developed and maintained the official Nerdify mobile application using React Native and Firebase.",
    technologies: [
      "Dart",
      "Flutter",
      "BloC",
      "OneSignal",
      "Firebase",
      "GraphQL",
      "React Native",
      "Expo",
      "React",
    ],
    location: "on-site",
    type: "full-time",
  },
];
