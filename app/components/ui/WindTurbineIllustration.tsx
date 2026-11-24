type WindTurbineIllustrationProps = {
  x: number
  y: number
  width: number
  height: number
}

export default function WindTurbineIllustration({
  x,
  y,
  width,
  height,
}: WindTurbineIllustrationProps) {
  return (
    <svg
      x={x}
      y={y}
      width={width}
      height={height}
      viewBox="-65 -40 230 345"
      fill="none"
      aria-hidden="true"
    >
      <g opacity=".72">
        <path d="M43 300 46.5 77h7L60 300z" fill="#c8d6e2" fillOpacity=".8" />
        <path d="m45 300 3-220" stroke="#fff5df" strokeOpacity=".7" strokeWidth="2" />
        <g
          className="motion-safe:animate-spin"
          style={{
            transformBox: 'view-box',
            transformOrigin: '50px 75px',
            animationDuration: '20s',
          }}
        >
          <g transform="translate(50 75) scale(2) translate(-50 -75)">
            <path d="M50 75c-4-10-11-33-11-55 10 11 17 33 14 54z" fill="#e6edf2" stroke="#fff5df" strokeOpacity=".8" strokeWidth="1" />
            <path d="M50 75c-4-10-11-33-11-55 10 11 17 33 14 54z" transform="rotate(120 50 75)" fill="#e6edf2" stroke="#fff5df" strokeOpacity=".8" strokeWidth="1" />
            <path d="M50 75c-4-10-11-33-11-55 10 11 17 33 14 54z" transform="rotate(240 50 75)" fill="#e6edf2" stroke="#fff5df" strokeOpacity=".8" strokeWidth="1" />
          </g>
        </g>
        <path d="M48 69c13-6 28-5 40 2l-2 7-38 3z" fill="#dbe5ed" stroke="#fff5df" strokeOpacity=".75" strokeWidth="2" />
        <circle cx="50" cy="75" r="7" fill="#fff5df" stroke="#9fb4c5" strokeWidth="2" />
      </g>
    </svg>
  )
}
