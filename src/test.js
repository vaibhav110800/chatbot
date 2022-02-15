const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: false });

bot.sendMessage(1892277414, 'hiii 2');