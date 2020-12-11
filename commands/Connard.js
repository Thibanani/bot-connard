const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {

  let cible = msg.mentions.members.first();
  console.log(args);
  if (args != ''){
    user = args
    if (msg.author == cible) {

      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play('./src/Audio/connard.mp3');//, {volume: 2});

      dispatcher.setVolume(2);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });

    } else {
      msg.reply('Il est pas la!');
    }

  }else if (cible.voice.channel != 0) {

    const connection = await cible.voice.channel.join();
    const dispatcher = connection.play('./src/Audio/connard.mp3');//, {volume: 2});

    dispatcher.setVolume(2);

    dispatcher.on('finish', () => {
       connection.disconnect();
    });

  }else {
    msg.reply('Seules les dieux me donne des ordres!');
  }
}


module.exports.help = {
  name: 'connard'
}
