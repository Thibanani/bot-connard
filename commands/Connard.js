const fs = require('fs');

module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./audio.mp3');//, {volume: 2});
    dispatcher.on('start', () => {
	     console.log('audio.mp3 is now playing!');
     });
     dispatcher.setVolume(0.25);

     dispatcher.on('finish', () => {
	      console.log('audio.mp3 has finished playing!');
    });
    //connection.play('./audio.mp3', resume());
    //connection.disconnect();

  } else {
    msg.reply('Seules les dieux me donne des ordres. Connard!');
  }


}


module.exports.help = {
  name: 'parle'
}
