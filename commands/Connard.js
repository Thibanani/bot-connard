const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  if (args != ''){
    user = args
    if (msg.users == args) {

      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play('./connard.mp3');//, {volume: 2});

      dispatcher.setVolume(2);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });

    } else {
      msg.reply('Il est pas la!');
    }

  }else if (msg.member.voice.channel) {
    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./connard.mp3');//, {volume: 2});

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
