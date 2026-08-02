import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      'process.env.REACT_APP_GAME_API_URL': JSON.stringify(
        env.REACT_APP_GAME_API_URL || env.VITE_GAME_API_URL || 'http://localhost:8080/api/games'
      ),
      'process.env.REACT_APP_TENOR_API_KEY': JSON.stringify(
        env.REACT_APP_TENOR_API_KEY || env.VITE_TENOR_API_KEY || ''
      ),
      'process.env': JSON.stringify(env),
    },
  };
});
