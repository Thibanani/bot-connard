const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./topette.mp3');//, {volume: 2});

    dispatcher.setVolume(10);

     dispatcher.on('finish', () => {
       connection.disconnect();
    });

  } else {
    msg.reply('Seules les dieux me donne des ordres. Connard!');
  }


}


module.exports.help = {
  name: 'topette'
}
