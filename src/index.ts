import http from "http"
import fs from "fs/promises"
import path from "path"

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.write("Hello World")
  res.end()
})

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
