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

const sendRandomVideo = (chatId) => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const video = videos[randomIndex];
    bot.sendVideo(chatId, video.filePath).then(() => {
        bot.sendMessage(chatId, `Link: ${video.link}`);
        bot.sendMessage(chatId, "Don't forget to like, share, comment, subscribe, and engage with us! 🔥🎥🎉");
    });
};

const intervalId = setInterval(() => {
    sendRandomVideo("-1001865456799"); // replace YOUR_CHAT_ID with the actual chat id you want to send the video to
}, 2 * 60 * 60 * 1000);

bot.onText(/\/tiktok/, (msg) => {
    sendRandomVideo(msg.chat.id);
    console.log("chatid: ", msg.chat.id);
});

process.on("SIGINT", () => {
    clearInterval(intervalId);
    process.exit();
});
