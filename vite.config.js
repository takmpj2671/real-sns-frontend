import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5001",//target: リクエストが転送される先のサーバーのURLを指定します。
        changeOrigin: true,//true に設定すると、Originヘッダーが転送先サーバーに偽装されます。これは、サーバーがオリジンをチェックしてリクエストをブロックする場合に重要です。﻿
      },
    },
  },
});
