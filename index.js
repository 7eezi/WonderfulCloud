
const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms")
const fs = require("fs")
const prefix = '$W';



bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.

    `)
})










bot.login(process.env.TOKEN);
