const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });


bot.on('message', (msg) => {
    let chatId = msg.from.id;

    bot.sendMessage(chatId, 'hello from vaibhav');

    console.log(chatId);
    console.log(msg.text);
    console.log(msg.chat.id);
    console.log(msg.chat.first_name);
    console.log(msg.chat.last_name);
});