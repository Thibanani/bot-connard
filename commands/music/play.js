const { VoiceConnection } = require('discord.js');
const { Command } = require("discord.js-commando");

const ytdl = require('ytdl-core');
const ytsr = require('youtube-search');
const config = require('../../config');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'music',
            memberName: 'play',
            description: "Lit une musique depuis Youtube.",
            args: [
                {
                    key: 'query',
                    prompt: 'Quel musique veux tu lire ?',
                    type: 'string'
                }
            ]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message, { query }) {
        const server = message.client.server;
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) {
            return message.say(':x: Tu dois être dans un salon vocal pour utiliser cette commande.')
        }

        await message.member.voice.channel.join().then((connection) =>{

            ytsr(query, { key: config.Google, maxResults: 1, type: 'video'}).then((results) => {

                if(results.results[0]){
                    const foundVideo = { url: results.results[0].link, title: results.results[0].title};

                    if (server.currentVideo.url != "") {
                        server.queue.push( foundVideo );
                        return message.say( foundVideo.url + "- Ajouté à la file d'attente");
                    }
        
                    server.currentVideo = foundVideo;
                    this.runVideo(message, connection);
                }
            });

        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {VoiceConnection} connection 
     * @param {*} video 
     */
    async runVideo(message, connection) {
        const server = message.client.server;
        const dispatcher = connection.play( await ytdl(server.currentVideo.url, {filter: 'audioonly'}));

        server.queue.shift();
        server.dispatcher = dispatcher;
        server.connection = connection;

        dispatcher.on('finish', () => {
            if (server.queue[0]) {
                server.currentVideo = server.queue[0];
                return this.runVideo(message, connection, server.currentVideo.url);
            }
            message.member.voice.channel.leave();
        });

        return message.say("En train de jouer :" +server.currentVideo.url +" :notes:");
    }
}