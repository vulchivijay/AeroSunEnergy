export function svgToDataURL(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function generateImagePlaceholder(width = 16, height = 9, bg = '#e6eef6', fg = '#f5f7fb') {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
    <rect width='100%' height='100%' fill='${bg}' />
    <g fill='${fg}' fill-opacity='0.4'>
      <circle cx='${Math.round(width * 0.2)}' cy='${Math.round(height * 0.3)}' r='${Math.max(1, Math.min(3, Math.round(width * 0.6 / 6)))}' />
      <rect x='${Math.round(width * 0.05)}' y='${Math.round(height * 0.6)}' width='${Math.round(width * 0.9)}' height='${Math.max(1, Math.round(height * 0.25))}' />
    </g>
  </svg>`

  return svgToDataURL(svg)
}
