import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        server: {
            hmr: {
                protocol: "wss",
                host: `${env.SUBDOMAIN}-5173.${env.NOTEBOOK_HOST}`,
                clientPort: 443,
            },
        },
        plugins: [
            laravel({
                input: "resources/js/app.jsx",
                refresh: true,
            }),
            react(),
        ],
    };
});