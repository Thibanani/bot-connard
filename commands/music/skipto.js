const { Command, CommandoMessage } = require("discord.js-commando");
const ytdl = require("ytdl-core");


module.exports = class SkipToCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'skipto',
            group: 'music',
            memberName: 'skipto',
            description: "Saute le titre en cours pour un titre à la position x.",
            args: [
                {
                    key: 'index',
                    prompt: "A quelle position de la ile d'attente veux tu te rendre ?",
                    type: 'integer'
                }
            ]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} index 
     */
    async run(message, { index }) {
        const voiceChannel = message.member.voice.channel;
        const server = message.client.server;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.')
        }

        if(!message.client.voice.connections.first()) {
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Tape `$join` pour m'ajouter");
        }

        index--;

        if (!server.queue[index]){
            server.currentVideo = {url: "", title: "Rien"};
            return message.say("Il n'y a rien a skip");
        }

        server.currentVideo = server.queue[index];
        server.dispatcher = server.connection.play( await ytdl(server.currentVideo.url, {filter: 'audioonly'}));
        server.queue.splice(index, 1);

        return message.say(":fast_forward: Ignoré :thumbsup:");
    }
}