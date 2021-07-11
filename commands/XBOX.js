module.exports.run = async (bot, msg, args)=> {
    let cible = msg.mentions.members.first();
    //const audio = './src/Audio/XBOX_1.mp3'
    const audio = './src/Audio/XBOX_'+ (Math.floor(Math.random() * 4) +1) +'.mp3'
    const volume = 1
    //console.log(cible);

    if (args != ''){
      if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
        msg.channel.bulkDelete(1);
        const connection = await cible.voice.channel.join();
        const dispatcher = connection.play(audio);

        dispatcher.setVolume(1);

        dispatcher.on('finish', () => {
           connection.disconnect();
        });

      } else {
        msg.reply('Il existe pas ! Connard');
      }

    }else {

      const connection = await msg.member.voice.channel.join();
      const dispatcher = connection.play(audio);

      dispatcher.setVolume(1);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });
    }
}


module.exports.help = {
  name: 'xbox'
}
