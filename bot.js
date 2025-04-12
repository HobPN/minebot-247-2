const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'server.aternos.me',
    username: 'email@gmail.com', // replace with actual login
    version: false
  });

  bot.once('spawn', () => {
    bot.chat('/login yourPassword'); // replace with your actual login password
  });

  bot.on('end', () => {
    console.log('Bot disconnected, retrying in 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
    setTimeout(createBot, 10000);
  });
}

createBot();
