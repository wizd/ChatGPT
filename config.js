// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = true; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = false; // Moderation mode

// Rate limit
export const PRIOD = 1 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
  // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
