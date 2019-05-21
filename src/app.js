const http = require('http');
const path = require('path');
const chalk = require('chalk');
const route = require('./helper/route');
const conf = require('./config/default_config');

class Server {
  constructor(config) {
    this.conf = Object.assign({}, conf, config);
  }
  start() {
    const server = http.createServer((req, res) => {
      const filePath = path.join(this.conf.root, req.url);
      route({ req, res, filePath, config: this.conf });
    });

    server.listen(this.conf.port, this.conf.hostname, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`;
      console.info(`Server started at ${chalk.green(addr)}`);
    });
  }
}

module.exports = Server;
