module.exports = {
  port: 7788,
  hostname: '127.0.0.1',
  root: process.cwd(),
  compress: /\.(html|js|css|md)/,
  cache: {
    maxAge: 600, // seconds
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
};
