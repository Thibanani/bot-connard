const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class ResumeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'resume',
            group: 'music',
            memberName: 'resume',
            description: "Reprend la musique encours.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message, { query }) {
        /**
         * @type StreamDispatcher
         */
        const dispatcher = message.client.server.dispatcher;
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.')
        }

        if(!message.client.voice.connections.first()) {
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Tape `$join` pour m'ajouter");
        }

        if(dispatcher) {
            dispatcher.resume();
        }

        return message.say("Entrain de jouer :notes:");
    }
}