import BuildImg from "../../assets/img/blackboard.png";

const projects = [
  {
    id: 1,
    navId: "1",
    title: "Auth Service",
    description: "Sistema de autenticación con Node.js y Express, utilizando JWT para login, rutas protegidas y gestión de roles (usuario/admin). Frontend simple para registro y perfil.",
    imgSrc: BuildImg,
    codeLink: "https://github.com/usuario/proyecto1",
    demoLink: "https://demo.proyecto1.com",
    technologies: ["NodeJS", "JWT", "PostgreSQL", "React"],
  },
  {
    id: 2,
    navId: "2",
    title: "Gestión de Comentarios",
    description:
      "Aplicación para gestionar comentarios en publicaciones con autenticación JWT y almacenamiento en PostgreSQL. Incluye operaciones de creación, lectura, actualización y eliminación de comentarios.",
    imgSrc: BuildImg,
    codeLink: "https://github.com/usuario/proyecto2",
    demoLink: "https://demo.proyecto2.com",
    technologies: ["NodeJS", "PostgreSQL", "JWT", "React"],
  },
  {
    id: 3,
    navId: "3",
    title: "Chat en Tiempo Real",
    description: "Aplicación para enviar y recibir mensajes instantáneos en salas de chat, usando WebSockets y autenticación JWT.",
    imgSrc: BuildImg,
    codeLink: "https://github.com/usuario/proyecto3",
    demoLink: "https://demo.proyecto3.com",
    technologies: ["NodeJS", "Socket.IO", "MongoDB", "Redis", "React"],
  },
  {
    id: 4,
    navId: "4",
    title: "Gestión de Proyectos",
    description: "Una aplicación para gestionar proyectos y tareas en un tablero Kanban, permitiendo mover tareas entre estados y asignarlas a usuarios.",
    imgSrc: BuildImg,
    codeLink: "https://github.com/usuario/proyecto4",
    demoLink: "https://demo.proyecto4.com",
    technologies: ["NodeJS", "PostgreSQL", "JWT", "React"],
  },
  {
    id: 5,
    navId: "5",
    title: "Pomodoro App",
    description: "Aplicación para gestionar sesiones Pomodoro, permitiendo iniciar, pausar y personalizar tiempos de trabajo y descanso, con historial de sesiones.",
    imgSrc: BuildImg,
    codeLink: "https://github.com/usuario/proyecto5",
    demoLink: "https://demo.proyecto5.com",
    technologies: ["React", "NodeJS", "JWT", "PostgreSQL"],
  },
];

export default projects;
