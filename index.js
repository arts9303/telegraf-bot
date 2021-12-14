const { Telegraf } = require('telegraf');

const bot = new Telegraf('5054740946:AAHPZr3ihBLI9NhFCgbxOYagjc7DlYruW9E')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()