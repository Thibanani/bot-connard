const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class CleanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clean',
            group: 'texte',
            memberName: 'clean [x]',
            description: "Pour suprimer N message.",
            args: [
                {
                    key: 'query',
                    prompt: 'Combien de message à suprimer ?',
                    type: 'integer'
                }
            ]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} query 
     */
     async run(message, { query }) {
        message.channel.bulkDelete(query);
    }
}