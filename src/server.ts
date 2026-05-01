import app from './index';
import { config } from './config';
import { connectDB } from './db';

async function main() {
  await connectDB();

  // Listen on 0.0.0.0 so the phone on the same Wi-Fi can reach us via the PC's LAN IP.
  app.listen(config.port, '0.0.0.0', () => {
    console.log(`[server] listening on http://0.0.0.0:${config.port}`);
  });
}

main().catch((e) => {
  console.error('[fatal]', e);
  process.exit(1);
});
