// quickbooks.ts

import { QuickBooks } from 'node-quickbooks';

// Initialize QuickBooks client
const quickbooks = new QuickBooks(
  process.env.QB_CONSUMER_KEY,
  process.env.QB_CONSUMER_SECRET,
  process.env.QB_TOKEN,
  process.env.QB_TOKEN_SECRET,
  process.env.QB_REALM_ID,
  true, // Use the Sandbox API
  true // Use OAuth 2.0
);

export default quickbooks;