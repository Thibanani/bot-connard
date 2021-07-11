const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class PauseCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: "met en pause la musique.",
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
         const voiceChannel = message.member.voice.channel;
         const dispatcher = message.client.server.dispatcher;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.')
        }

        if(!message.client.voice.connections.first()) {
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Tape `$join` pour m'ajouter");
        }

        if(dispatcher) {
            dispatcher.pause();
        }

        return message.say(":pause_button: Pause :thumbsup:");
    }
}