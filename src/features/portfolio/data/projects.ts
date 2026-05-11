import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "local-llm-server",
    title: "Local LLM Home Server",
    period: {
      start: "2024",
    },
    link: "",
    skills: [
      "vLLM",
      "Docker",
      "Docker Compose",
      "Open WebUI",
      "llama.cpp",
      "GPU Acceleration",
      "AMD RX 6750 XT",
    ],
    description: `Self-hosted LLM inference system with GPU acceleration and containerized deployment.
- Built self-hosted LLM inference server using vLLM with GPU acceleration on AMD RX 6750 XT
- Designed multi-service architecture using Docker and Docker Compose
- Integrated Open WebUI for model interaction
- Implemented dynamic model loading and unloading`,
    isExpanded: true,
  },
  {
    id: "trello-clone",
    title: "Trello Clone",
    period: {
      start: "2023",
    },
    link: "https://sink.jaspreet-singh-true.workers.dev/trello-clone-vercel/test1234",
    skills: [
      "Node.js",
      "Express.js",
      "Sequelize ORM",
      "PostgreSQL",
      "React",
      "Redux",
      "MUI",
    ],
    description: `Trello-inspired task management application built as a full-stack development project.
- Developed task and workflow management system
- Implemented React-based frontend with Redux state management
- Built backend APIs with Express.js and PostgreSQL integration
- Gained deeper understanding of state management paradigms and full-stack architecture`,
  },
]
