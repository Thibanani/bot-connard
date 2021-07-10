const config = require('./config.js');

const ytdl = require('ytdl-core');
const ytsr = require('youtube-search');


module.exports.run = async (bot, msg, args)=> {

  if(args != '') {
    const serveur = message.bor.serveur;
    const audio = args;

    const volume = 0.25;
    await msg.member.voice.channel.join().then((connection) => {

      ytsr(args,{key: config.Google, maxResults: 1,type: 'video'}).then((results) => {
          console.log(results); return;
      });


      /*const dispatcher = connection.play( await ytdl(audio, {filter: 'audioonly'}));

      dispatcher.setVolume(volume);

      dispatcher.on('finish', () => {
         connection.disconnect();
      });*/

    });
  }
}


module.exports.help = {
  name: 'play'
}
