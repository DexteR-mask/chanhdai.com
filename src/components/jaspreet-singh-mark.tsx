export function JaspreetSinghMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{
          fontFamily: "''  'Exo 2', 'Audiowide', 'Michroma', monospace",
          fontSize: "170px",
          fontWeight: "500",
          letterSpacing: "0em",
        }}
      >
        J/P/S
      </text>
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="currentColor" style="font-family: 'Orbitron', 'Rajdhani', 'Exo 2', 'Audiowide', 'Michroma', monospace; font-size: 240px; font-weight: 900; letter-spacing: 0.1em;">JS</text></svg>`
}
