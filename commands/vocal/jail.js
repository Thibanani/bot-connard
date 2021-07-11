const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class JailCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'jail',
            group: 'vocal',
            memberName: 'jail @somebody',
            description: "Emprisone quelqu'un.",

        });
    }

    /**
     * 
     * @param {CommandoMessage} message  
     */
     async run(message) {
        message.channel.bulkDelete(1);

        var newChannel;
        /*---------- Vérification de la permission ----------*/
        if(!message.member.hasPermission("MOVE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, Ta crus t'étais dieux ?`)
        }
        if(!message.guild.me.hasPermission("MOVE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, ... j'aimerai bien`)
        }
      
        /*---------- Vérification de l'id a kick ----------*/
        let target = message.mentions.members.first();
      
         if(!target) {//Si l'id est correct
           return message.channel.send(`**${message.author.username}**, Putain mais gros mentionne quelqu'un`)
         }
         if(target.id === message.author.id) {//Si l'id est pas celui de l'auteur
           return message.channel.send(`**${message.author.username}**, T'es maso ou quoi`)
          }
      
          key = "Le cachot";
          newChannel = message.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);
      
          target.voice.setChannel(newChannel)
          target.voice.setMute(true,"Oui")
    }
}