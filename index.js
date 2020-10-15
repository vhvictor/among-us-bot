const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NzY2MDgzMTc0OTkxNjU5MDM5.X4eMjg.t9rsd8EN6HESeMYDHNpHo5zkXw0';


client.on('message', message => {
    if (message.content == '!shh') {
      const members = message.member.voice.channel.members;
  
      members.forEach(member => {
        member.voice.setMute(true);
      });
    }
});

client.on('message', message => {
    if (message.content == '!talk') {
      const members = message.member.voice.channel.members;
  
      members.forEach(member => {
        member.voice.setMute(false);
      });
    }
});

client.on ('message', msg =>{
    if(msg.content === "hello"){
        msg.reply('Hello!');
    }
})


client.login(token);
