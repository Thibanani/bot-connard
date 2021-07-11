const { Command, CommandoMessage } = require("discord.js-commando");


module.exports = class XBOXCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'xbox',
            group: 'vocal',
            memberName: 'xbox',
            description: "TA LA XBOX ?"
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} arg 
     */
    async run(message, { arg }) {
        let cible = message.mentions.members.first();
        const audio = './src/Audio/XBOX_'+ (Math.floor(Math.random() * 4) +1) +'.mp3'
        const volume = 1
    
        if (arg != null){
          if (cible) {//Si la cible existe que se soit l'autheur ou un autre membre
            message.channel.bulkDelete(1);
            const connection = await cible.voice.channel.join();
            const dispatcher = connection.play(audio);
    
            dispatcher.setVolume(1);
    
            dispatcher.on('finish', () => {
               connection.disconnect();
            });
    
          } else {
            message.reply('Il existe pas ! Connard');
          }
    
        }else {
    
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play(audio);
    
          dispatcher.setVolume(1);
    
          dispatcher.on('finish', () => {
             connection.disconnect();
          });
        }
    }
}