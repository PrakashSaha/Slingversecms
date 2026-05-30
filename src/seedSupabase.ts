import { supabase } from './supabaseClient';
import fs from 'fs';
import path from 'path';

export default async function seedSupabase() {
  try {
    // Assuming you have a JSON dump of your Strapi data at the project root called data.json
    const dataPath = path.resolve(__dirname, '../../data.json');
    if (!fs.existsSync(dataPath)) {
      console.warn('⚠️ data.json not found – skipping Supabase seeding');
      return;
    }
    const raw = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    // Example: seed hero collection if present
    if (raw.hero) {
      const { error } = await supabase.from('hero').upsert(raw.hero);
      if (error) console.error('Supabase hero seed error:', error);
    }
    // Add similar blocks for other collections you need to migrate
    console.log('✅ Supabase seeding finished');
  } catch (e) {
    console.error('❌ Supabase seeding failed:', e);
    throw e;
  }
}
