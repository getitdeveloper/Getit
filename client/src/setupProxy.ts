import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target:
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_PROD_SERVER_BASE_URL
        : process.env.REACT_APP_DEV_SERVER_BASE_URL,
    changeOrigin: true,
  }),
);

app.listen(3000);
