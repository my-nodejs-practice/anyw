const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
  .usage('anywhere [options]')
  .options('p', {
    alias: 'port',
    describe: '端口号',
    default: '9527'
  })
  .option('h', {
    alias: 'hostname',
    describe: 'HOST',
    default: '127.0.0.1'
  })
  .options('d', {
    alias: 'root',
    describe: '根目录',
    default: process.cwd()
  })
  .version()
  .alias('v', 'version')
  .help().argv;

const server = new Server(argv);
server.start();
