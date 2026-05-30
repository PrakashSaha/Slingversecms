"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * Heartbeat to keep the CMS and Database from going to sleep on free tiers
     */
    keepAlive: {
        task: async ({ strapi }) => {
            try {
                // 1. Ping the Database to keep the connection alive
                await strapi.db.connection.raw('SELECT 1');
                // 2. Ping the CMS API to keep the server awake
                const host = process.env.URL || `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 1337}`;
                await fetch(`${host}/api/global-data`).catch(() => { });
            }
            catch (err) {
                console.error('Heartbeat task failed:', err);
            }
        },
        options: {
            // Run every 14 minutes
            rule: '*/14 * * * *',
        },
    },
};
