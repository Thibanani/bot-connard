const config = require('./config.js');
const ytdl = require('ytdl-core');


module.exports.run = async (bot, msg, args)=> {



  if(args != '') {
    const audio = args[1];
    const volume = 0.25;
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
