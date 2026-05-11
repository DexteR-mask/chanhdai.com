import { CodeXmlIcon, GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "protokol",
    companyName: "Protokol.io (Native Teams)",
    companyLogo: "",
    companyWebsite: "https://protokol.io",
    positions: [
      {
        id: "1",
        title: "Backend/Full Stack Engineer",
        employmentPeriod: {
          start: "04.2024",
        },
        employmentType: "Remote",
        icon: <CodeXmlIcon />,
        description: `- Integrated Stripe payment gateway in Go, implementing transaction lifecycle operations including refunds and webhook-based payment status verification for reliable synchronization.
- Integrated Braintree (PayPal) payment gateway in Go, implementing full transaction lifecycle (refund, void, resync) and building a backend abstraction layer for enhanced logging and reliability.
- Designed and built a Node.js CLI-based hot-reload system using Commander.js, replacing UI-driven workflows and improving developer efficiency across 10–15 engineers.
- Implemented incremental compilation and file-level syncing with WebSocket-based real-time updates, reducing rebuild times and enabling low-latency development workflows.
- Developed and maintained SDKs and build systems using Webpack, Babel, and TypeScript, supporting 8–9 production client applications.
- Built a database-agnostic admin platform supporting MongoDB and MySQL with dynamic query execution and 50+ predefined operations.
- Containerized services using Docker and docker-compose, including embedding runtime binaries for isolated execution environments.`,
        skills: [
          "Go",
          "Stripe",
          "Braintree",
          "PayPal",
          "Node.js",
          "Commander.js",
          "WebSocket",
          "Chokidar",
          "Webpack",
          "Babel",
          "TypeScript",
          "MongoDB",
          "MySQL",
          "TanStack Router",
          "TanStack Table",
          "TanStack Query",
          "Shadcn/UI",
          "React",
          "Docker",
          "Docker Compose",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "aerchain",
    companyName: "Aerchain",
    companyLogo: "",
    positions: [
      {
        id: "1",
        title: "Backend Developer",
        employmentPeriod: {
          start: "12.2023",
          end: "03.2024",
        },
        employmentType: "On-site",
        icon: <CodeXmlIcon />,
        description: `- Successfully developed and implemented custom login mechanisms to facilitate seamless data synchronization between SAP and Aerchain, ensuring efficient data ingress and egress.
- Created and deployed custom tools to streamline development, debugging, and testing processes, which significantly improved productivity and reduced production time by eliminating intensive testing steps.
- Proficiently utilized Node.js, PostgreSQL, Sequelize, Express.js, and Postman in various development and integration tasks.
- Designed and refined the codebase by introducing generic variables, enhancing the flexibility and maintainability of the code, which led to more efficient development cycles.`,
        skills: [
          "Node.js",
          "PostgreSQL",
          "Sequelize",
          "Express.js",
          "Postman",
          "SAP Integration",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "Chitkara Institute of Engineering and Technology, Punjab",
        employmentPeriod: {
          start: "08.2020",
          end: "06.2024",
        },
        icon: <GraduationCapIcon />,
        description: `- Bachelor of Technology in Computer Science and Engineering
- CGPA: 9.1
- Academic References:
  - GitLab Projects at MountBlue (2022)
  - IEEE Research: Augmented Reality in Education (2023)
  - IoT Projects (2024-25)`,
        skills: [
          "Computer Science",
          "Software Engineering",
          "Algorithms",
          "Data Structures",
          "Distributed Systems",
        ],
      },
    ],
  },
]
