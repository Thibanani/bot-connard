const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');

bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé')
});

bot.on('message', async (msg) =>{
  if(msg.content == 'jtm'){
    msg.channel.send('Connard!')
  }
  if(msg.content.startsWith(config.prefix)){
    cmdArray = msg.content.split()
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    msg.channel.send('Seules les dieux me donne des ordres. Connard!')
  }
});

bot.login(config.token);
