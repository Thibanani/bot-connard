module.exports.run = async (bot, msg, args)=> {
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

module.exports.help = {
  name: 'viens'
}
