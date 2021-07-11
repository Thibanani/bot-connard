const { Command, CommandoMessage } = require("discord.js-commando");


module.exports = class TGCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'taggle',
            aliases: ['tg'],
            group: 'vocal',
            memberName: 'taggle',
            description: "Pour fermer le claper de tes adversaire."
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} arg 
     */
    async run(message, { arg }) {
        let cible = message.mentions.members.first();
        const audio = './src/Audio/taggl.mp3'
        const volume = 0.5
      
        if (arg != null){
          if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
            message.channel.bulkDelete(1);
            const connection = await cible.voice.channel.join();
            const dispatcher = connection.play(audio);
      
            dispatcher.setVolume(volume);
      
            dispatcher.on('finish', () => {
               connection.disconnect();
            });
      
          } else {
            message.reply('Il existe pas ! Connard');
          }
      
        }else {
      
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play(audio);
      
          dispatcher.setVolume(volume);
      
          dispatcher.on('finish', () => {
             connection.disconnect();
          });
        }
    }
}