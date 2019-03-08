console.log("Running Bot");

const Telegraf = require('telegraf'); //import lib

const URL = process.env.URL || 'https://garagechatbot.herokuapp.com';
const PORT = process.env.PORT || 3000;
const API_KEY = "749566027:AAFof_Mw7NKfKfCxS4KCCdzJKT0GE0mNq9I"; //Authentication

const bot = new Telegraf(API_KEY); //Create new bot

bot.help(ctx => ctx.reply("Sorry can't help! Bye!")); //same as const Help=ctx => ctx.reply("Hello"); bot.help(Help)


bot.hears(/hello/i, ctx => ctx.reply('Hello there!')); // /hello/i = (/../i: Regular Experession+case-sensitive)

bot.start(ctx => ctx.reply("Hello"));

if (process.env.NODE_ENV === "production") {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
  bot.launch();
}





