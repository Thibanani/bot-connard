const { Command, CommandoMessage } = require("discord.js-commando");


module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: "Ajoute le bot au salon vocal.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message, { query }) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.');
        }

        await voiceChannel.join();

        return message.say(":thumbsup: J'ai rejoin " + "`" + voiceChannel.name + "`");
    }
}