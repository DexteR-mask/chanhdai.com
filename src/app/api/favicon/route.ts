import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    )
  }

  try {
    const faviconUrl = await getFaviconUrl(url)
    return NextResponse.json({ faviconUrl })
  } catch (error) {
    console.error("Error fetching favicon:", error)
    return NextResponse.json(
      { error: "Failed to fetch favicon" },
      { status: 500 }
    )
  }
}

async function getFaviconUrl(pageUrl: string) {
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
}
