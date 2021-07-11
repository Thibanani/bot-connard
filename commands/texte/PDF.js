const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class PDFCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pdf',
            group: 'texte',
            memberName: 'pdf',
            description: "Pour un max de rigolade.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
    async run(message) {
        message.channel.send("PDF",{files: ['./src/Respirez.pdf']})
    }
}