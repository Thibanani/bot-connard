module.exports.run = async (bot, msg, args)=> {
  const ytdl = require('ytdl-core-discord');
  let cible = msg.mentions.members.first();
  const audio = 'https://www.youtube.com/watch?v=wNch1OqYgIM'
  const volume = 0.25

  if (args != ''){
    if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
      msg.channel.bulkDelete(1);
      const connection = await cible.voice.channel.join();
      const dispatcher = connection.play( await ytdl(audio, {filter: 'audioonly'}), { type: 'opus' });

      dispatcher.setVolume(volume);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });

    } else {
      msg.reply('Il existe pas ! Connard');
    }

  }else {

    const connection = await msg.member.voice.channel.join();
    const dispatcher = connection.play( await ytdl(audio, {filter: 'audioonly'}), { type: 'opus' });

    dispatcher.setVolume(volume);

    dispatcher.on('finish', () => {
       connection.disconnect();
    });
  }
}


module.exports.help = {
  name: 'jaune'
}
