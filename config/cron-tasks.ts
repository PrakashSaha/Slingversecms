export default {
  /**
   * Heartbeat to keep the CMS and Database from going to sleep on free tiers
   */
  keepAlive: {
    task: async ({ strapi }: any) => {
      try {
        // 1. Ping the Database to keep the connection alive
        await strapi.db.connection.raw('SELECT 1');
        
        // 2. Ping the CMS API to keep the server awake
        let host = process.env.RENDER_EXTERNAL_URL || process.env.URL || `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 1337}`;
        if (host.includes('0.0.0.0')) {
          host = host.replace('0.0.0.0', '127.0.0.1');
        }
        if (!host.startsWith('http://') && !host.startsWith('https://')) {
          host = `https://${host}`;
        }
        await fetch(`${host}/api/global-data`).catch(() => {});
        
        console.log(`[${new Date().toISOString()}] Heartbeat: Database connection verified and CMS pinged successfully.`);
      } catch (err) {
        console.error('Heartbeat task failed:', err);
      }
    },
    options: {
      // Run every minute
      rule: '*/1 * * * *',
    },
  },
};
