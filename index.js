const TelegramBot = require('node-telegram-bot-api');
const complements = require('./complements.js');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/joe/, (msg) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  bot.sendMessage(msg.chat.id, compliments[randomIndex]);
});
