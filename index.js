const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start ((ctx) => {
    ctx.reply(`
        Hi ${ctx.message.from.first_name} ${ctx.message.from.last_name}
         I am bot created by Artur Stepanyan.
    `)
    console.log(ctx.message)

    //https://tlgrm.ru/_/stickers/3dc/9f9/3dc9f995-0816-3e23-89a0-08a47d03701b/4.webp
})

bot.launch()





//
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
//