const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

const compliments = [
  "Your aura radiates warmth and positivity.",
  "Your eloquence is spellbinding.",
  "Your wit is unparalleled.",
  "Your grin is illuminating.",
  "Your energy is infectious.",
  "Your intellect is both unique and motivating.",
  "Your way of making others feel appreciated is exceptional.",
  "Your approach to life is always entertaining.",
  "Your generosity is boundless.",
  "Your optimism is truly uplifting.",
  "Your imagination is boundless.",
  "Your compassion is incomparable.",
  "Your intelligence is both astute and subtle.",
  "Your fashion sense is enviable.",
  "Your zest for life is contagious.",
  "Your comedic timing is impeccable.",
  "Your work ethic is admirable.",
  "Your devotion to others is truly motivating.",
  "Your empathy is truly extraordinary.",
  "Your craving for new experiences is admirable.",
  "Your unorthodox thinking is truly remarkable.",
  "Your problem-solving skills are truly admirable.",
  "Your ability to remain composed under stress is admirable.",
  "Your ability to connect with people is extraordinary.",
  "Your ability to see the best in others is truly inspiring.",
  "Your ability to inspire others is truly a blessing.",
  "Your analytical skills are truly exceptional.",
  "Your leadership by example is truly exemplary.",
  "Your adaptability is truly impressive.",
  "Your determination to overcome challenges is truly admirable.",
  "Your tenacity is truly admirable.",
  "Your poise under pressure is truly admirable.",
  "Your strategic thinking is truly impressive.",
  "Your ability to turn ideas into reality is truly impressive.",
  "Your ability to see the bigger picture is truly admirable.",
  "Your focus is truly admirable.",
  "Your positivity is truly admirable.",
  "Your authenticity is truly admirable.",
  "Your curiosity is truly admirable.",
  "Your open-mindedness is truly admirable.",
  "Your willingness to give it your all is truly admirable.",
  "Your ability to make things happen is truly admirable.",
  "Your communication skills are truly impressive.",
  "Your team-oriented approach is truly admirable.",
  "Your ability to inspire others to reach their full potential is truly admirable.",
  "Your initiative is truly admirable.",
  "Your ability to think on the fly is truly admirable.",
  "Your organization skills are truly admirable.",
  "Your motivation is truly admirable.",
  "Your commitment is truly admirable."
];

bot.onText(/\/joe/, (msg) => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  bot.sendMessage(msg.chat.id, compliments[randomIndex]);
});
