const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class UnMuteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'un_mute',
            aliases: ['u'],
            group: 'vocal',
            memberName: 'un_mute',
            description: "Clean tout les effects du salon vocal."
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
     async run(message) {
        message.channel.bulkDelete(1);

        /*---------- Vérification de la permission ----------*/
        if(!message.member.hasPermission("MUTE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, Ta crus t'étais dieux ?`)
        }
        if(!message.guild.me.hasPermission("MUTE_MEMBERS")) {
          return message.channel.send(`**${message.author.username}**, ... j'aimerai bien`)
        }
      
        let channel = message.member.voice.channel;
      
        for (let member of channel.members) {
          member[1].voice.setDeaf(false)
          member[1].voice.setMute(false)
        }
    }
}