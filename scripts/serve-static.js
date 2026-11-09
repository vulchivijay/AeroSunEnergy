const { createReadStream } = require('node:fs')
const { stat } = require('node:fs/promises')
const { createServer } = require('node:http')
const path = require('node:path')

const outputDirectory = path.resolve(__dirname, '..', 'out')
const port = Number(process.env.PORT || 8080)
const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
}

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${process.env.PORT}`)
}

function isWithinOutputDirectory(filePath) {
  const relativePath = path.relative(outputDirectory, filePath)
  return relativePath === '' || (!relativePath.startsWith(`..${path.sep}`) && relativePath !== '..' && !path.isAbsolute(relativePath))
}

async function findFile(candidates) {
  for (const candidate of candidates) {
    if (!isWithinOutputDirectory(candidate)) continue

    try {
      const fileStat = await stat(candidate)
      if (fileStat.isFile()) return { filePath: candidate, fileStat }
    } catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'ENOTDIR') throw error
    }
  }

  return null
}

function getCandidates(pathname) {
  const relativePath = pathname.replace(/^\/+/, '')
  const requestedPath = path.resolve(outputDirectory, relativePath || 'index.html')
  const candidates = [requestedPath]

  if (pathname.endsWith('/')) {
    candidates.push(path.join(requestedPath, 'index.html'))
    if (path.extname(requestedPath) === '') candidates.push(`${requestedPath}.html`)
  } else if (path.extname(requestedPath) === '') {
    candidates.push(`${requestedPath}.html`)
  }

  return candidates
}

async function handleRequest(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end()
    return
  }

  let pathname
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  } catch {
    response.writeHead(400)
    response.end('Bad Request')
    return
  }

  if (pathname.includes('\0')) {
    response.writeHead(400)
    response.end('Bad Request')
    return
  }

  const file = await findFile(getCandidates(pathname))
  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not Found')
    return
  }

  response.writeHead(200, {
    'Content-Length': file.fileStat.size,
    'Content-Type': contentTypes[path.extname(file.filePath).toLowerCase()] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  })

  if (request.method === 'HEAD') {
    response.end()
    return
  }

  createReadStream(file.filePath).pipe(response)
}

const server = createServer((request, response) => {
  handleRequest(request, response).catch((error) => {
    console.error('Failed to serve static file:', error)
    if (!response.headersSent) response.writeHead(500)
    response.end('Internal Server Error')
  })
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Static export server listening on port ${port}`)
})
