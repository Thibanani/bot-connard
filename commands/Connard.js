const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./audio.mp3');//, {volume: 2});

    dispatcher.setVolume(3);

     dispatcher.on('finish', () => {
       dispatcher.destroy();
    });

    connection.disconnect();
  } else {
    msg.reply('Seules les dieux me donne des ordres. Connard!');
  }


}


module.exports.help = {
  name: 'parle'
}
