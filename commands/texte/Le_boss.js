const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class LeBossCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'le_boss',
            aliases: ['leboss'],
            group: 'texte',
            memberName: 'le_boss',
            description: "C'est toi le Boss ?",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
    async run(message) {
        if ((message.author.username == 'Kiko-kun' )||(message.author.username == 'Thibanani' )||(message.author.username == 'Seyross' )){
            message.channel.send(`Le boss, mais c'est ${message.author.username}`)
          }
          else{
            message.channel.send(`Le boss, mais c'est MOI ici OK !`)
          }
    }
}