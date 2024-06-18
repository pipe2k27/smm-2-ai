import { PluginOption, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { mapValues } from 'lodash-es';
import tsconfigPaths from 'vite-tsconfig-paths';

// Converting true and false in env files to boolean
const envStringToBoolean = (): PluginOption => ({
  name: 'env-string-to-boolean',
  configResolved: (config) => {
    const results = {
      true: true,
      false: false,
      null: null,
    };
    const env = mapValues(config.env, (value) => {
      if (typeof value === 'string') {
        const result = results[value.toLowerCase()];
        if (result !== undefined) return result;
      }
      return value;
    });
    Object.assign(config.env, env);
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envStringToBoolean(), tsconfigPaths()],
});
