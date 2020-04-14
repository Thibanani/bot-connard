const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    connection.play('./audio.mp3', {volume: 2});
    connection.play('./audio.mp3', resume());
    bot.connection.disconnect();

  } else {
    msg.reply('Seules les dieux me donne des ordres. Connard!');
  }

  connection.disconnect();
}


module.exports.help = {
  name: 'parle'
}
