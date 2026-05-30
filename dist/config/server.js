"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_tasks_1 = __importDefault(require("./cron-tasks"));
const config = ({ env }) => ({
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
        tasks: cron_tasks_1.default,
    },
});
exports.default = config;
