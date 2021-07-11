const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class MotivCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'motivation',
            aliases: ['motiv'],
            group: 'texte',
            memberName: 'motivation',
            description: "A utiliser sans modération :Motiv:"
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} query 
     */
     async run(message, { query },) {
        if (query == null) {
            message.channel.send("Votre motivation",{files: ['./src/Photo/AM_6.png']})
        }
        else {
            message.channel.send("Vos motivation")
            if (query >= 10) {
                query = 10;
            }
            for (let i=0;i<=query-1;i++){
                message.channel.send({files: ['./src/Photo/AM_'+ (Math.floor(Math.random() * 38) +1) +'.png']})
            }
        }

    }
}