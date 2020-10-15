const Discord = require('discord.js');
const client = new Discord.Client();



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


client.login(process.env.token);
