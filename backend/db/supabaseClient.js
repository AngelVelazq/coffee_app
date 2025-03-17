require('dotenv').config(); // Runs node backend/db/supabaseClient.js from the root directory
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is missing! Check your .env file.');
}

module.exports = supabase;

console.log('Supabase URL:', process.env.SUPABASE_URL);
