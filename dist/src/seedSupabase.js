"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supabaseClient_1 = require("./supabaseClient");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function seedSupabase() {
    try {
        // Assuming you have a JSON dump of your Strapi data at the project root called data.json
        const dataPath = path_1.default.resolve(__dirname, '../../data.json');
        if (!fs_1.default.existsSync(dataPath)) {
            console.warn('⚠️ data.json not found – skipping Supabase seeding');
            return;
        }
        const raw = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        // Example: seed hero collection if present
        if (raw.hero) {
            const { error } = await supabaseClient_1.supabase.from('hero').upsert(raw.hero);
            if (error)
                console.error('Supabase hero seed error:', error);
        }
        // Add similar blocks for other collections you need to migrate
        console.log('✅ Supabase seeding finished');
    }
    catch (e) {
        console.error('❌ Supabase seeding failed:', e);
        throw e;
    }
}
exports.default = seedSupabase;
