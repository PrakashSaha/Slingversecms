import type { Core } from '@strapi/strapi';
import cronTasks from './cron-tasks';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: (() => {
      const keys = env.array('APP_KEYS');
      if (!keys || keys.length === 0) {
        console.error('\n\n❌ FATAL ERROR: APP_KEYS is missing from environment variables!\n\n');
      }
      return keys || ['toBeModified1', 'toBeModified2']; // Prevent silent crash
    })(),
  },
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
});

export default config;
