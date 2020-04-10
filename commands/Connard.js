module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./audio.mp3');

    dispatcher.setVolume(3);
    dispatcher.on('start', () => {
    	console.log('audio.mp3 is now playing!');
    });



    dispatcher.on('finish', () => {
      console.log('Finished playing!');
    });

    dispatcher.destroy(); // end the stream

  } else {
    msg.reply('Seules les dieux me donne des ordres. Connard!');
  }
}


module.exports.help = {
  name: 'parle'
}
