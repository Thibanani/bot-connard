const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


const bonjour = ["Salut beau gosse","Ouai, salut ouai","Yo","Bonjour à toi","HOOOO, sa gambit ou quoi ?","jtm bb"];
const bonsoir = ["Bonsoir","Bonsoir, jeune gueux","Comment von-je ?"];

bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé');
});

bot.on('message', async (msg) =>{
  if((msg.content == 'Bonjour')||(msg.content == 'Salut')){
    msg.channel.send(bonjour[Math.floor(Math.random() * (bonjour.length - 0)+ 0)])
  }
  if(msg.content == 'Bonsoir'){
    msg.channel.send(`https://tenor.com/view/penguin-hello-hi-heythere-cutie-gif-3950966`)
  }

  if(msg.content.startsWith(config.prefix)){
    cmdArray = msg.content.substring(config.prefix.length).split(" ")
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);

  }
});



bot.login(config.token);
