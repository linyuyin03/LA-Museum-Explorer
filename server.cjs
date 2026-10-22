const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const files = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/styles.css': ['styles.css', 'text/css; charset=utf-8'],
  '/app.js': ['app.js', 'text/javascript; charset=utf-8']
};
const server = http.createServer((request, response) => {
  const file = files[new URL(request.url, 'http://localhost').pathname];
  if (!file) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }
  fs.readFile(path.join(__dirname, file[0]), (error, content) => {
    if (error) {
      response.writeHead(500);
      response.end('Unable to read file');
      return;
    }
    response.writeHead(200, { 'Content-Type': file[1], 'Cache-Control': 'no-store' });
    response.end(content);
  });
});
server.on('error', (error) => {
  console.error(error.code === 'EADDRINUSE' ? 'Port 3000 is in use. Stop the existing server and try again.' : error.message);
  process.exitCode = 1;
});
server.listen(3000, '127.0.0.1', () => console.log('Open http://127.0.0.1:3000 — press Ctrl+C to stop.'));
