module.exports.run = async (bot, msg, args)=> {
  let cible = msg.mentions.members.first();
  const audio = './src/Audio/Netoyer.mp3'
  const volume = 0.25


  if (args != ''){
    if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
      msg.channel.bulkDelete(1);
      const connection = await cible.voice.channel.join();
      const dispatcher = connection.play(audio);

      dispatcher.setVolume(volume);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });

    } else {
      msg.reply('Il existe pas ! Connard');
    }

  }else {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play(audio);

    dispatcher.setVolume(volume);

    dispatcher.on('finish', () => {
       connection.disconnect();
    });
  }
}


module.exports.help = {
  name: 'nettoyer'
}
