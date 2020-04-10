const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');



bot.on('ready', async() =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Québecqwé')
});

bot.on('message', async (msg) =>{
  if(msg.content == 'jtm'){
    msg.channel.send('Connard!')
  }

  if(msg.content.startsWith(config.prefix)){
    cmdArray = msg.content.substring(config.prefix.length).split(" ")
    cmd = cmdArray[0]
    args = cmdArray.slice(1)

    //let command = commands.getCommand(cmd);
    //if(command) command.run(bot, msg, args)

    if (cmd === 'viens') {
      if (msg.member.voice.channel) {

        const connection = await msg.member.voice.channel.join();
        const dispatcher = connection.play('./audio.mp3');

        dispatcher.pause();
        dispatcher.resume();

        dispatcher.setVolume(0.5); // half the volume

        dispatcher.on('finish', () => {
          console.log('Finished playing!');
        });

        dispatcher.destroy(); // end the stream

      } else {
        msg.reply('You need to join a voice channel first!');
      }
    }

    }

  }
});



bot.login(config.token);
