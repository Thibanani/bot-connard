const { Command, CommandoMessage } = require("discord.js-commando");
const ytdl = require("ytdl-core");


module.exports = class SkipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: "Saute le titre en cours de lecture.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message, { query }) {
        const voiceChannel = message.member.voice.channel;
        const server = message.client.server;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.')
        }

        if(!message.client.voice.connections.first()) {
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Tape `$join` pour m'ajouter");
        }

        if (!server.queue[0]) {
            server.currentVideo = {url: "", title: "Rien"};
            return message.say("Il n'y a rien a skip");
        }

        server.currentVideo = server.queue[0];
        server.dispatcher = server.connection.play( await ytdl(server.currentVideo.url, {filter: 'audioonly'}));
        server.queue.shift();

        return message.say(":fast_forward: Ignoré :thumbsup:");
    }
}