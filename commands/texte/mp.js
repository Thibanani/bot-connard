const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class MpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mp2',
            group: 'texte',
            memberName: 'mp2 @somebody',
            description: "JE SUIS PAS UN PUTAIN PIGEON VOYAGEUR.",
            args: [
                {
                    key: 'query',
                    prompt: 'A qui envoyer le message ?',
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
          target.send(`Message d'un anonyme : ${mp}`)
        }
        else {
            message.channel.send(`**${message.author.username}**, Mais apprend à faire une commande`)
        }
    }
}