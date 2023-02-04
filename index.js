const TelegramBot = require('node-telegram-bot-api');
const complements = require('./complements.js');
const videos = require('./videos.js');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID

const bot = new TelegramBot(token, { polling: true });

const sendComplement = (chatId) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  bot.sendMessage(chatId, compliments[randomIndex]);
  console.log("complement sent");
}

const sendRandomVideo = (chatId) => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  const video = videos[randomIndex];
  bot.sendVideo(chatId, video.filePath).then(() => {
    bot.sendMessage(chatId, `Link: ${video.link}`).then(() => {
      bot.sendMessage(chatId, "Don't forget to like, comment, and share with your friends!! 🔥🎥");
    });
  });
};

let intervalId;
const startInterval = () => {
  intervalId = setInterval(() => {
    sendRandomVideo(CHAT_ID);
  }, 60 * 60 * 1000); // then each hour
};

setTimeout(() => {
  sendRandomVideo(CHAT_ID);
  startInterval();
}, 15 * 60 * 1000); // first in 15 minutes

const startComplementInterval = () => {
  intervalId = setInterval(() => {
    sendRandomVideo(CHAT_ID);
  }, 60 * 60 * 1000); // then each hour
};

setTimeout(() => {
  sendComplement(CHAT_ID);
  startComplementInterval();
}, (60 * 60 * 1000)); // edit as desired for first run

bot.onText(/\/joe/, (msg) => {
  sendComplement(msg.chat.id);
});

bot.onText(/\/tiktok/, (msg) => {
  sendRandomVideo(msg.chat.id);
});

process.on("SIGINT", () => {
  clearInterval(intervalId);
  process.exit();
});
