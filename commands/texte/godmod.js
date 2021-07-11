const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class MpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mp',
            group: 'texte',
            memberName: 'mp @somebody',
            description: "JE SUIS PAS UN PUTAIN PIGEON VOYAGEUR.",
            args: [
                {
                    key: 'query',
                    prompt: 'Pas pour le commum des mortelles ?',
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
        message.channel.bulkDelete(1);
  
        mp = query.slice(1).join(' ')
      
        /*---------- Vérification de l'id a mp ----------*/
        let target = message.mentions.members.first();
      
        if(!target) {//Si l'id est correct
            message.channel.send(`**${message.author.username}**, Putain mais gros mentionne quelqu'un`)
        }
        else if(target.id === message.author.id) {//Si l'id est pas celui de l'auteur
            message.channel.send(`**${message.author.username}**, T'es maso ou quoi`)
        }
        else if (mp != ''){  /*---------- code principale ----------*/
          target.send(`${mp}`)
        }
        else {
            message.channel.send(`**${message.author.username}**, Mais apprend à faire une commande`)
        }
    }
}