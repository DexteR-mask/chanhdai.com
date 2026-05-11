import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Jaspreet",
  lastName: "Singh",
  displayName: "Jaspreet Singh",
  username: "jaspreetsingh",
  gender: "male",
  pronouns: "he/him",
  bio: "Backend/Platform Engineer specializing in payment integrations, developer tooling, and scalable systems.",
  flipSentences: [
    "Backend/Platform Engineer",
    "$ npm run build && npm start",
    "Building scalable systems & developer tools",
    "$ docker-compose up -d --scale api=3",
    "Crafting seamless payment experiences",
    "$ kubectl apply -f deployment.yaml",
    "Optimizing build pipelines & workflows",
    "$ go run main.go --port=8080",
    "Exploring edge computing & embedded systems",
    "$ redis-cli FLUSHALL && npm run seed",
    "Containerizing services for production",
    "$ webpack --mode production --watch",
    "Designing database-agnostic platforms",
    "$ stripe listen --forward-to localhost:3000/webhooks",
    "Accelerating developer productivity",
    "$ git push origin main && vercel deploy",
    "Automating IoT ecosystems",
    "$ pm2 start ecosystem.config.js",
    "Debugging complex distributed systems",
    "$ curl -X POST https://api.stripe.com/v1/charges",
    "Architecting cloud-native solutions",
  ],
  address: "Rajpura, Punjab, India",
  phoneNumber: "KzkxIDg4NDcwMjc5NjM=", // base64 encoded "+91 8847027963"
  email: "amFzcHJlZXQuc2luZ2gudGVjaEBnbWFpbC5jb20=", // base64 encoded "jaspreet.singh.tech@gmail.com"
  website: "https://jaspreetsingh.dev",
  jobTitle: "Backend/Platform Engineer",
  jobs: [
    {
      title: "Backend/Full Stack Engineer",
      company: "Protokol.io (Native Teams)",
      website: "https://protokol.io",
      experienceId: "protokol",
    },
  ],
  about: `
- Backend/Platform Engineer with expertise in payment gateway integrations (Stripe, Braintree), developer tooling, and scalable backend systems.
- Passionate about platform engineering, embedded systems, and CI/CD automation.
- Built self-hosted LLM inference server with GPU acceleration and developed full-stack applications with modern tech stacks.
`,
  avatar: "/images/mypic.jpeg",
  avatarVariants: {
    lightOff: "/images/mypic.jpeg",
    lightOn: "/images/mypic.jpeg",
    darkOff: "/images/mypic.jpeg",
    darkOn: "/images/mypic.jpeg",
  },
  ogImage: "/images/og-image-placeholder.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Jaspreet Singh",
    "Backend Engineer",
    "Platform Engineer",
    "Rajpura",
    "Punjab",
    "Stripe Integration",
    "Braintree Integration",
    "Node.js Developer",
    "Go Developer",
    "Docker",
    "Webpack",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
