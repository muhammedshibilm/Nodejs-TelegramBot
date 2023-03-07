//First npm install node-telegram-bot-api


const TelegramBot = require('node-telegram-bot-api');

//Enter your API
const bot = new TelegramBot('YOUR_API_TOKEN', { polling: true });

//Enter here your chatid
bot.sendMessage(chatId, 'Hello, world!');



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  bot.sendMessage(chatId, `You said: ${messageText}`);
});


//node app.js use to run