// import fs from "fs"
import http from "http"

const port = process.env.PORT || 8080

const server = http.createServer((_, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end("<h1>Hello, World!</h1>")
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
