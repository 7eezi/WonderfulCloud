
const Discord = require("discord.js");
const bot = new Discord.Client();
const ms = require("ms")
const fs = require("fs")
const developers = '552322709292580875';
const prefix = '$W';



bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.

    `)
})



bot.on('message', message => { // State
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'play')) {
    bot.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'wat')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'lis')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/7eezi");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(prefix + 'nm')) {
  bot.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'avatar')) {
  bot.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});






bot.login(process.env.TOKEN);
