const http = require('http');
const path = require('path');
const chalk = require('chalk');
const route = require('./helper/route');
const conf = require('./config/default_config');

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url);
  route({ res, filePath });
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.info(`Server started at ${chalk.green(addr)}`);
});
