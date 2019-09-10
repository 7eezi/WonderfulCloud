
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





const Captcha = JSON.parse(fs.readFileSync("./Captcha.json","utf8"));
 bot.on("message", msg => {
    if(!msg.guild) return;
    if(msg.author.bot) return;
    if(!Captcha[msg.guild.id]) Captcha[msg.guild.id] = {
        role: "Nothing",
        room: "Nothing",
        cmd: "Captcha"
    } 
    if(msg.content.startsWith(prefix + "setCaptcharole")){
                if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`> **Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
        let args = msg.content.split(' ').slice(1).join(' ');
        if(!args) return msg.channel.send(`> **Please write Activation role**`).then(m => m.delete(5000));
        if(!msg.guild.roles.find("name",args)) return msg.channel.send(`> **No role name is : \`${args}\`** `).then(m => m.delete(5000));
        Captcha[msg.guild.id].role = args
  msg.channel.send(`> **Activation role Changing To : \`${args}\`**`).then(m => m.delete(5000));
                    fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
    }
    if(msg.content.startsWith(prefix + "setCaptcharoom")){
if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`> **Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
         let args2 = msg.content.split(' ').slice(1).join(' ');
        if(!args2) return msg.channel.send(`> **Please write Activation room**`).then(m => m.delete(5000));
         if(!msg.guild.channels.find("name",args2)) return msg.channel.send(`> **No room name is : \`${args2}\`**`).then(m => m.delete(5000));
        Captcha[msg.guild.id].room = args2
  msg.channel.send(`> **Activation room Changing To : \`${args2}\`**`).then(m => m.delete(5000));
            fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
    }
      if(msg.content.startsWith(prefix + "setCaptchaprefix")){
if(!msg.guild.member(msg.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`> **Sorry But You Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
         let args3 = msg.content.split(' ').slice(1).join(' ');
        if(!args3) return msg.channel.send(`> **You need to write Activation Prefix**`).then(m => m.delete(5000));

        Captcha[msg.guild.id].cmd = args3
  msg.channel.send(`> **Activation Prefix Changing To :\`${args3}\` **`).then(m => m.delete(5000));
            fs.writeFile("./Captcha.json", JSON.stringify(Captcha), function(a) {
        if (a) throw a;
    })
	  }
});

        bot.on("message",async message => {
        if(!message.channel.guild) return;
        if(!Captcha[message.guild.id]) Captcha[message.guild.id] = {
        role: "Nothing",
        room: "Nothing",
        cmd: "Captcha"
        } 
        if(message.content.startsWith(prefix + Captcha[message.guild.id].cmd || "Captcha")){
        if(Captcha[message.guild.id].role === 'Nothing') return message.channel.send(`> **Don't chose role Activation write : \`${prefix}setCaptcharole\`**`).then(m => m.delete(5000));
        if(Captcha[message.guild.id].room === 'Nothing') return message.channel.send(`**Dont' chose room Activation write : \`${prefix}setCaptcharoom\`**`).then(m => m.delete(5000));
        if (message.guild.member(message.author).roles.find(x => x.name === `${Captcha[message.guild.id].role}`)) return message.channel.send(`**${message.author}, You have role**`).then(m => m.delete(5000));
        if(!message.channel.guild) return message.channel.send(`**This command just for servers**`).then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`**Sorry But I Don\'t Have Permission \`MANAGE_GUILD\`**`).then(m => m.delete(5000));
        if(message.channel.name !== `${Captcha[message.guild.id].room}`) return message.channel.send(`> **You not on right room please going to : \`${Captcha[message.guild.id].room}\`**`).then(m => m.delete(5000));
    	const canvas = Canvas.createCanvas(108 , 40);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/608278049091223552/617791172810899456/hmmm.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
        var one = Math.floor(Math.random() * 9) + 1;
        var two = Math.floor(Math.random() * 9) + 1;
        var three = Math.floor(Math.random() * 9) + 1;
        var four = Math.floor(Math.random() * 9) + 1;
        var number = `${one}${two}${three}${four}`;
        ctx.font = '20px Arial Bold';
        ctx.fontSize = '20px';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(number, canvas.width / 2.4, canvas.height / 1.7);
        const attachment = new Discord.Attachment(canvas.toBuffer());
        message.channel.send(attachment).then(m => {
        message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 60000}).then(c => {
        if(c.first().content !== number) {
        m.delete();
        }else if(c.first().content === number) {
        m.delete();
        message.member.addRole(message.guild.roles.find("name", Captcha[message.guild.id].role));    
        message.channel.send(`**${message.author.username}, You Activated**`).then(m => m.delete(1000));
        }
		})
	    });
        }
        });




bot.login(process.env.TOKEN);
