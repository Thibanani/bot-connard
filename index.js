const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé')
});

bot.on('message', async (msg) =>{
  if(msg.content == 'bonjour'){
    msg.channel.send('Yo!')
  }
});

bot.login(config.token);
