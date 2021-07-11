const { Command, CommandoMessage } = require("discord.js-commando");
const ytdl = require('ytdl-core');

module.exports = class JauneCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'jaune',
            group: 'vocal',
            memberName: 'jaune',
            description: "Un pti verre ?"
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} arg 
     */
    async run(message, { arg }) {

        let cible = message.mentions.members.first();
        const audio = 'https://www.youtube.com/watch?v=wNch1OqYgIM';
        const volume = 0.25;
      
        if (arg != ''){
          if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
            message.channel.bulkDelete(1);
            const connection = await cible.voice.channel.join();
            const dispatcher = connection.play( await ytdl(audio, {filter: 'audioonly'}));
      
            dispatcher.setVolume(volume);
      
            dispatcher.on('finish', () => {
               connection.disconnect();
            });
      
          } else {
            message.reply('Il existe pas ! Connard');
          }
      
        }else {
      
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play( await ytdl(audio, {filter: 'audioonly'}));
      
          dispatcher.setVolume(volume);
      
          dispatcher.on('finish', () => {
             connection.disconnect();
          });
        }
    }
}