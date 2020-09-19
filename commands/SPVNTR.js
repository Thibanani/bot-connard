module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play('./src/Audio/SPVNTR.mp3');//, {volume: 2});

    dispatcher.setVolume(0.5);

     dispatcher.on('finish', () => {
       connection.disconnect();
    });

  } else {
    msg.reply('Seules les dieux me donne des ordres!');
  }
}


module.exports.help = {
  name: 'SPVNTR'
}
