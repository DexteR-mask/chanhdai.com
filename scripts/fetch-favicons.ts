import fs from "fs"
import path from "path"

// Import the tech stack data
const TECH_STACK = [
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Languages"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Languages"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Languages"],
  },
  {
    key: "c-cpp",
    title: "C/C++",
    href: "https://isocpp.org/",
    categories: ["Languages"],
  },
  {
    key: "go",
    title: "Go",
    href: "https://go.dev/",
    categories: ["Languages"],
  },
  {
    key: "html",
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Languages"],
  },
  {
    key: "css",
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Languages"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Frameworks"],
  },
  {
    key: "express",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Frameworks"],
  },
  {
    key: "react",
    title: "React.js",
    href: "https://react.dev/",
    categories: ["Frameworks"],
  },
  {
    key: "vue",
    title: "Vue.js",
    href: "https://vuejs.org/",
    categories: ["Frameworks"],
  },
  {
    key: "tanstack-router",
    title: "TanStack Router",
    href: "https://tanstack.com/router",
    categories: ["Frameworks"],
  },
  {
    key: "tanstack-table",
    title: "TanStack Table",
    href: "https://tanstack.com/table",
    categories: ["Frameworks"],
  },
  {
    key: "tanstack-query",
    title: "TanStack Query",
    href: "https://tanstack.com/query",
    categories: ["Frameworks"],
  },
  {
    key: "shadcn-ui",
    title: "Shadcn/UI",
    href: "https://ui.shadcn.com/",
    categories: ["Frameworks"],
  },
  {
    key: "sequelize",
    title: "Sequelize",
    href: "https://sequelize.org/",
    categories: ["Frameworks"],
  },
  {
    key: "webpack",
    title: "Webpack",
    href: "https://webpack.js.org/",
    categories: ["Backend"],
  },
  {
    key: "babel",
    title: "Babel",
    href: "https://babeljs.io/",
    categories: ["Backend"],
  },
  {
    key: "rabbitmq",
    title: "RabbitMQ",
    href: "https://www.rabbitmq.com/",
    categories: ["Backend"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Backend"],
  },
  {
    key: "braintree",
    title: "Braintree",
    href: "https://www.braintreepayments.com/",
    categories: ["Backend"],
  },
  {
    key: "stripe",
    title: "Stripe",
    href: "https://stripe.com/",
    categories: ["Backend"],
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Backend"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Databases"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Databases"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Databases"],
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["DevOps"],
  },
  {
    key: "docker-compose",
    title: "Docker Compose",
    href: "https://docs.docker.com/compose/",
    categories: ["DevOps"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["DevOps"],
  },
  {
    key: "pgadmin",
    title: "pgAdmin",
    href: "https://www.pgadmin.org/",
    categories: ["DevOps"],
  },
  {
    key: "gitea",
    title: "Gitea",
    href: "https://gitea.io/",
    categories: ["DevOps"],
  },
  {
    key: "vllm",
    title: "vLLM",
    href: "https://docs.vllm.ai/en/latest/",
    categories: ["DevOps"],
  },
  {
    key: "llama-cpp",
    title: "llama.cpp",
    href: "https://github.com/ggerganov/llama.cpp",
    categories: ["DevOps"],
  },
  {
    key: "openai-apis",
    title: "OpenAI APIs",
    href: "https://platform.openai.com/",
    categories: ["DevOps"],
  },
  {
    key: "claude",
    title: "Claude Code",
    href: "https://claude.ai/",
    categories: ["DevOps"],
  },
  {
    key: "cursor",
    title: "Cursor",
    href: "https://cursor.com/",
    categories: ["DevOps"],
  },
]

async function getFaviconUrl(pageUrl: string): Promise<string> {
  try {
    const res = await fetch(pageUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FaviconBot/1.0)",
      },
    })
    const html = await res.text()
    const match =
      html.match(
        /<link[^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]*href=["']([^"']+)["']/i
      ) ||
      html.match(
        /<link[^>]+href=["']([^"']+)["'][^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon)["']/i
      )

    if (match?.[1]) {
      return new URL(match[1], pageUrl).toString()
    }

    const u = new URL(pageUrl)
    return `${u.origin}/favicon.ico`
  } catch (error) {
    console.error(`Error fetching favicon for ${pageUrl}:`, error)
    const u = new URL(pageUrl)
    return `${u.origin}/favicon.ico`
  }
}

async function downloadFavicon(url: string, filename: string): Promise<void> {
  try {
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const outputDir = path.join(process.cwd(), "public", "favicons")

    // Create directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Determine file extension from URL or content-type
    let ext = path.extname(new URL(url).pathname) || ".ico"
    if (!ext || ext === ".") {
      const contentType = res.headers.get("content-type")
      if (contentType?.includes("png")) ext = ".png"
      else if (contentType?.includes("svg")) ext = ".svg"
      else if (contentType?.includes("jpeg") || contentType?.includes("jpg"))
        ext = ".jpg"
      else ext = ".ico"
    }

    const filepath = path.join(outputDir, `${filename}${ext}`)
    fs.writeFileSync(filepath, Buffer.from(buffer))
    console.log(`✓ Downloaded: ${filename}${ext}`)
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error)
  }
}

async function main() {
  console.log("Fetching favicons for tech stack...")

  const faviconMap: Record<string, string> = {}

  for (const tech of TECH_STACK) {
    console.log(`\nProcessing ${tech.title}...`)
    const faviconUrl = await getFaviconUrl(tech.href)
    console.log(`  Favicon URL: ${faviconUrl}`)

    await downloadFavicon(faviconUrl, tech.key)

    // Determine the extension
    const ext = path.extname(new URL(faviconUrl).pathname) || ".ico"
    faviconMap[tech.key] = `/favicons/${tech.key}${ext}`

    // Add delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  // Write the favicon map to a JSON file
  const mapPath = path.join(
    process.cwd(),
    "src",
    "features",
    "portfolio",
    "data",
    "tech-stack-favicons.json"
  )
  fs.writeFileSync(mapPath, JSON.stringify(faviconMap, null, 2))
  console.log(`\n✓ Favicon map saved to ${mapPath}`)
}

main()
