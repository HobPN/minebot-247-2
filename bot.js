const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Blarena.aternos.me:30517',
    username: 'tracker', // replace with actual login
    version: false
  });

  bot.once('spawn', () => {
    bot.chat('/register 134266 134266');
    bot.chat('/login 134266'); // replace with your actual login password
    console.log('🔒 Bypassed LoginSecurity.');
  });

  bot.on('end', () => {
    console.log('🛑 Bot disconnected, retrying in 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
    setTimeout(createBot, 10000);
  });
}

createBot();
