const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  let cible = msg.mentions.members.first();
  //console.log(cible);

  if (args != ''){
    user = args
    if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre

      const connection = await cible.voice.channel.join();
      const dispatcher = connection.play('./src/Audio/connard.mp3');//, {volume: 2});

      dispatcher.setVolume(2);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });

    } else {
      msg.reply('Il existe pas ! Connard');
    }

  }else {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./src/Audio/connard.mp3');//, {volume: 2});

    dispatcher.setVolume(2);

    dispatcher.on('finish', () => {
       connection.disconnect();
    });

  }
}


module.exports.help = {
  name: 'c'
}
