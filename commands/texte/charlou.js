const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher } = require('discord.js');


module.exports = class LeBossCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'charlou',
            group: 'texte',
            memberName: 'charlou',
            description: ":sheep:",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 

     */
    async run(message) {
        const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:","C'était Génial!"];
        var var_temp = Math.floor(Math.random() * charlou.length+1)
      
        if (var_temp == charlou.length) {
          message.channel.send("Coucou '^'",{files: ['./src/Photo/Coucou.png']})
        }
        else {
          message.channel.send(charlou[var_temp])
        }
    }
}