const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/', createProxyMiddleware({
  target: 'http://localhost:10000', // پورتی که x-ui روی آن API میزنه
  changeOrigin: true,
  ws: true
}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy listening on port ${port}`));
