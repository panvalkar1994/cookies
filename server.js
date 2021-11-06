const http = require("http");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Set-Cookie", "firstName=vaibhav;");
  res.setHeader("Set-Cookie", "lastName=panvalkar;");
  res.end("Hello, World!\n");
});

server.on("error", (err) => {
  console.error(err);
});

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
