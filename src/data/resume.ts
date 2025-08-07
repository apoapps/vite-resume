export interface ResumeData {
  name: string;
  summary: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    location: string;
    portfolio: { text: string; url: string };
    appStore: { text: string; url: string };
  };
  skills: {
    title: string;
    list: string[];
  };
  languages: {
    title: string;
    list: { lang: string; level: string }[];
  };
  references: {
    title: string;
    list: {
      name: string;
      title: string;
      company: string;
      email: string;
      phone: string;
    }[];
  };
  education: {
    title: string;
    list: {
      year: string;
      degree: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    experience: {
      title: string;
      list: {
        year: string;
        role: string;
        collaboration: string;
        description: string;
        details: string[];
      }[];
    };
    appDev: {
      title: string;
      list: {
        year: string;
        name: string;
        description: string;
        url: string;
      }[];
    };
  };
  technicalSkills: {
    title: string;
    list: {
      area: string;
      skills: string;
    }[];
  };
}

export const resumeData: Record<'en' | 'es', ResumeData> = {
  en: {
    name: "Alejandro Apodaca Córdova",
    summary: {
      title: "Summary",
      content: "Software developer with a foundation in self-taught programming, I efficiently learn and apply new technologies. I have created three successful applications for iOS and Android, aiding thousands of students globally in enhancing their homework and lifestyle. Alongside software development, I am currently studying Mechatronics Engineering, giving me a different view on technology. I aim to use my skills to make a real difference, combining software passion with engineering insights."
    },
    contact: {
      title: "Contact / Information",
      phone: "+52 686 572 9088",
      email: "Alejandro.apodaca@cetys.edu.mx",
      location: "Mexicali, Baja California, México",
      portfolio: { text: "Web Portfolio", url: "https://apoapps.com" },
      appStore: { text: "App Store Developer Profile", url: "https://apps.apple.com/mx/developer/alejandro-apodaca/id1524127326" }
    },
    skills: {
      title: "Skills",
      list: ["Leadership", "Time Management", "Responsible", "Resilient", "Self-taught", "Emotional Intelligence"]
    },
    languages: {
      title: "Languages",
      list: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "Fluent" }
      ]
    },
    references: {
      title: "References",
      list: [
        { name: "Viviana Chiang", title: "Test Engineer", company: "Tesla, Inc.", email: "vchiangauyon@tesla.com", phone: "+1 (669) 248 6203" },
        { name: "Veronica Rojas", title: "Director of CEID", company: "CETYS University", email: "veronica.rojas@cetys.mx", phone: "+52 646 197 2847" }
      ]
    },
    education: {
      title: "Education",
      list: [
        { year: "Current", degree: "University", description: "Currently pursuing a degree in Mechatronics Engineering at CETYS University, as of 6th semester 2024." },
        { year: "2025", degree: "Recognition", description: "For contributions to Tri-Go Math and the Mexicali City Council voting system. Issued by the School of Engineering, CETYS Universidad." },
        { year: "2022", degree: "Scholarship", description: "90% Scholarship with SRAX at CETYS UNIVERSIDAD." },
        { year: "2021", degree: "Recognition", description: "Outstanding student of the CobachBC High School, Baja California campus in Mexicali." },
        { year: "2021", degree: "Award", description: "Recipient of the State Youth Award in Baja California in the category 'Entrepreneurial Ingenuity'." }
      ]
    },
    projects: {
      title: "Projects & Activities",
      experience: {
        title: "Work Experience",
        list: [
          {
            year: "2024",
            role: "Developer | Mexicali City Council Voting System",
            collaboration: "In collaboration with CEID, CETYS University",
            description: "Led the full development of a digital voting app for council sessions, deployed on Android tablets with real-time result display.",
            details: [
              "Frontend: Built a responsive, user-focused UI in Flutter/Dart.",
              "Backend: Developed REST APIs with Node.js, Express, and MongoDB, using WebSockets for live sync.",
              "Design: Created a clean, intuitive UX tailored for non-technical users.",
              "Integration: Connected Flutter frontend to backend services via API and WebSockets.",
              "Impact: Streamlined the voting process and boosted transparency. Gained full-stack experience and advanced backend skills."
            ]
          }
        ]
      },
      appDev: {
        title: "App Development",
        list: [
          { year: "2025", name: "Tri-Go Math Web", description: "Created the web version of Tri-Go Math, my most well-known math app, using TypeScript, Next.js, TailwindCSS, and ShadCN UI.", url: "#" },
          { year: "2023", name: "WakeUp App", description: "Developed with Flutter, available on iOS and Android, to enhance users' sleep by analyzing their sleep cycles and providing customized alarms.", url: "#" },
          { year: "2021", name: "Fisik", description: "Launched a comprehensive physics educational resource, covering key topics, on iOS and Android platforms, made in Flutter.", url: "#" },
          { year: "2020", name: "Tri-Go Math App", description: "Released on iOS and Android, celebrated for helping nearly 500,000 students around the world with their math homework, created with Flutter.", url: "#" },
          { year: "2020", name: "Endless Beats & Mello vs School", description: "Programmed two video games as my introduction into real software programming using GODOT Engine 3.", url: "#" }
        ]
      }
    },
    technicalSkills: {
      title: "Technical Skills",
      list: [
        { area: "Android Development", skills: "Kotlin & Jetpack Compose, Material Design." },
        { area: "Cross-Platform Development", skills: "Production apps with native feature integration (alarms, ads, notifications)." },
        { area: "iOS Development", skills: "Swift & SwiftUI." },
        { area: "Software Architecture", skills: "MVC, Provider, React Hooks. Clean, scalable code structure." },
        { area: "Frontend Web Development", skills: "TypeScript, React, Next.js, TailwindCSS." },
        { area: "UI/UX Design", skills: "Figma. Experience with Material Design & Apple Human Interface Guidelines." },
        { area: "Backend Development", skills: "FastAPI, PostgreSQL, MongoDB, WebSockets." },
        { area: "Computer Science Foundations", skills: "Data structures, algorithms, performance." },
        { area: "Cybersecurity & Networking", skills: "Linux environments, secure development, networking." },
        { area: "Hardware & Embedded Systems", skills: "ESP32, Raspberry Pi, IoT projects." }
      ]
    }
  },
  es: {
    name: "Alejandro Apodaca Córdova",
    summary: {
      title: "Resumen",
      content: "Desarrollador de software con una base en programación autodidacta, aprendo y aplico eficientemente nuevas tecnologías. He creado tres aplicaciones exitosas para iOS y Android, ayudando a miles de estudiantes a nivel mundial a mejorar en sus tareas y estilo de vida. Paralelamente al desarrollo de software, actualmente estudio Ingeniería Mecatrónica, lo que me da una perspectiva diferente sobre la tecnología. Mi objetivo es utilizar mis habilidades para marcar una diferencia real, combinando mi pasión por el software con conocimientos de ingeniería."
    },
    contact: {
      title: "Contacto / Información",
      phone: "+52 686 572 9088",
      email: "Alejandro.apodaca@cetys.edu.mx",
      location: "Mexicali, Baja California, México",
      portfolio: { text: "Portafolio Web", url: "https://apoapps.com" },
      appStore: { text: "Perfil de Desarrollador App Store", url: "https://apps.apple.com/mx/developer/alejandro-apodaca/id1524127326" }
    },
    skills: {
      title: "Habilidades",
      list: ["Liderazgo", "Gestión del Tiempo", "Responsable", "Resiliente", "Autodidacta", "Inteligencia Emocional"]
    },
    languages: {
      title: "Idiomas",
      list: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "Fluido" }
      ]
    },
    references: {
      title: "Referencias",
      list: [
        { name: "Viviana Chiang", title: "Ingeniera de Pruebas", company: "Tesla, Inc.", email: "vchiangauyon@tesla.com", phone: "+1 (669) 248 6203" },
        { name: "Verónica Rojas", title: "Directora de CEID", company: "CETYS Universidad", email: "veronica.rojas@cetys.mx", phone: "+52 646 197 2847" }
      ]
    },
    education: {
      title: "Educación",
      list: [
        { year: "Actual", degree: "Universidad", description: "Actualmente cursando la carrera de Ingeniería Mecatrónica en CETYS Universidad, 6to semestre 2024." },
        { year: "2025", degree: "Reconocimiento", description: "Por contribuciones a Tri-Go Math y al sistema de votación del Cabildo de Mexicali. Emitido por la Escuela de Ingeniería, CETYS Universidad." },
        { year: "2022", degree: "Beca", description: "Beca del 90% con SRAX en CETYS UNIVERSIDAD." },
        { year: "2021", degree: "Reconocimiento", description: "Alumno destacado del plantel CobachBC Baja California en Mexicali." },
        { year: "2021", degree: "Premio", description: "Galardonado con el Premio Estatal de la Juventud en Baja California en la categoría 'Ingenio Emprendedor'." }
      ]
    },
    projects: {
      title: "Proyectos y Actividades",
      experience: {
        title: "Experiencia Laboral",
        list: [
          {
            year: "2024",
            role: "Desarrollador | Sistema de Votación del Cabildo de Mexicali",
            collaboration: "En colaboración con CEID, CETYS Universidad",
            description: "Lideré el desarrollo completo de una aplicación de votación digital para las sesiones del cabildo, desplegada en tabletas Android con visualización de resultados en tiempo real.",
            details: [
              "Frontend: Construí una interfaz de usuario responsiva y centrada en el usuario en Flutter/Dart.",
              "Backend: Desarrollé APIs REST con Node.js, Express y MongoDB, usando WebSockets para sincronización en vivo.",
              "Diseño: Creé una UX limpia e intuitiva, adaptada para usuarios no técnicos.",
              "Integración: Conecté el frontend de Flutter a los servicios del backend mediante API y WebSockets.",
              "Impacto: Agilicé el proceso de votación y aumenté la transparencia. Adquirí experiencia full-stack y habilidades avanzadas de backend."
            ]
          }
        ]
      },
      appDev: {
        title: "Desarrollo de Aplicaciones",
        list: [
          { year: "2025", name: "Tri-Go Math Web", description: "Creé la versión web de Tri-Go Math, mi aplicación de matemáticas más conocida, usando TypeScript, Next.js, TailwindCSS y ShadCN UI.", url: "#" },
          { year: "2023", name: "WakeUp App", description: "Desarrollada con Flutter, disponible en iOS y Android, para mejorar el sueño de los usuarios analizando sus ciclos de sueño y proporcionando alarmas personalizadas.", url: "#" },
          { year: "2021", name: "Fisik", description: "Lancé un recurso educativo integral de física, cubriendo temas clave, en plataformas iOS y Android, hecho en Flutter.", url: "#" },
          { year: "2020", name: "Tri-Go Math App", description: "Lanzada en iOS y Android, celebrada por ayudar a casi 500,000 estudiantes de todo el mundo con sus tareas de matemáticas, creada con Flutter.", url: "#" },
          { year: "2020", name: "Endless Beats & Mello vs School", description: "Programé dos videojuegos como mi introducción a la programación real de software usando GODOT Engine 3.", url: "#" }
        ]
      }
    },
    technicalSkills: {
      title: "Habilidades Técnicas",
      list: [
        { area: "Desarrollo Android", skills: "Kotlin & Jetpack Compose, Material Design." },
        { area: "Desarrollo Multiplataforma", skills: "Apps en producción con integración de funciones nativas (alarmas, anuncios, notificaciones)." },
        { area: "Desarrollo iOS", skills: "Swift & SwiftUI." },
        { area: "Arquitectura de Software", skills: "MVC, Provider, React Hooks. Estructura de código limpia y escalable." },
        { area: "Desarrollo Web Frontend", skills: "TypeScript, React, Next.js, TailwindCSS." },
        { area: "Diseño UI/UX", skills: "Figma. Experiencia con Material Design y Guías de Interfaz Humana de Apple." },
        { area: "Desarrollo Backend", skills: "FastAPI, PostgreSQL, MongoDB, WebSockets." },
        { area: "Fundamentos de Ciencias de la Computación", skills: "Estructuras de datos, algoritmos, rendimiento." },
        { area: "Ciberseguridad y Redes", skills: "Entornos Linux, desarrollo seguro, redes." },
        { area: "Hardware y Sistemas Embebidos", skills: "ESP32, Raspberry Pi, proyectos de IoT." }
      ]
    }
  }
};