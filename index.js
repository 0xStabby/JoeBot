const TelegramBot = require('node-telegram-bot-api');
const complements = require('./complements.js');
const videos = require('./videos.js');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/joe/, (msg) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  bot.sendMessage(msg.chat.id, compliments[randomIndex]);
});

bot.onText(/\/tiktok/, (msg) => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const video = videos[randomIndex];
    bot.sendVideo(msg.chat.id, video.filePath).then(() => {
        bot.sendMessage(msg.chat.id, `${video.link}`);
        bot.sendMessage(msg.chat.id, "Don't forget to like, comment, and share with your friends!! 🔥🎥");
    });
});
