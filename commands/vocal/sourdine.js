const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class SourdineCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sourdine',
            aliases: ['s'],
            group: 'vocal',
            memberName: 'sourdine',
            description: "Met en sourdine tout le monde dans le salon.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} query 
     */
     async run(message, { query }) {
        const audio = './src/Audio/taggl.mp3'
        const volume = 0.5
      
        message.channel.bulkDelete(1);
      
      
        /*---------- Vérification de la permission ----------*/
        if(!message.member.hasPermission("MUTE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, Ta crus t'étais dieux ?`)
        }
        if(!message.guild.me.hasPermission("MUTE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, ... j'aimerai bien`)
        }
      
        if (query != ''){
          /*---------- Vérification de l'id a kick ----------*/
          let target = message.mentions.members.first();
      
           if(!target) {//Si l'id est correct
             return message.channel.send(`**${message.author.username}**, Putain mais gros mentionne quelqu'un`)
           }
           if(target.id === message.author.id) {//Si l'id est pas celui de l'auteur
             return message.channel.send(`**${message.author.username}**, T'es maso ou quoi`)
            }
      
            target.voice.setDeaf(true,"Oui")
          }
          else {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(audio);//, {volume: 2});
      
            dispatcher.setVolume(volume);
      
            dispatcher.on('finish', () => {
               connection.disconnect();
      
               let channel = message.member.voice.channel;
               for (let member of channel.members) {
                   do {
                       member[1].voice.setDeaf(true)
                   } while (member[1].voice.deaf);
               }
            });
          }
    }
}