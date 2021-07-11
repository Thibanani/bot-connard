const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class TinderCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tinder',
            group: 'texte',
            memberName: 'tinder',
            description: "Si tu habite dans la Moselle, et que tu cherche des milfs.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
     async run(msg) {
        msg.channel.send("Bas alors charmy")
        msg.channel.send({files: ['./src/Photo/Charlou_tinder_2.png']})
    
    
    
        msg.channel.send({files: ['./src/Photo/Conv_tinder_1.jpg']})
    }
}