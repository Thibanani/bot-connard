const { Command, CommandoMessage } = require("discord.js-commando");
//const fonction = require('./src/Lib/fonction_puissance_4.js');

module.exports = class P4Command extends Command {
    constructor(client) {
        super(client, {
            name: 'p4',
            group: 'texte',
            memberName: 'p4',
            description: "En cours.",
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
        var temps = 100000;

        /*const Discord = require('discord.js');
        const aff_grille = new Discord.MessageEmbed()*/
        //let joueur_2 = msg.mentions.members.first();
        let joueur_1 = message.author;
        let joueur_2 = message.author;
      
        /*if(!joueur_2) {//Si l'id est correct
          msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
          return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
        }*/
      
        var fin = 0, joueur_prec,joueur_actif, gagnant ='',i,ligne,tour =0;;
        let tab_joueur = [joueur_1,joueur_2];
        var tab_grille = [
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                          ['|      ','|      ','|      ','|      ','|      ','|      ','|      '] ];
        //coniguration tab_grille[ligne][colonne]
      
      
        // ---------- Affichage de la grille
        for (i=0;i<=tab_grille.length-1;i++){
          message.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
        }
      
          // ---------- Collecteur de la colonne ou jettons a placer
      
            //collecteur pour être sur que le message est envoyée
            message.channel.send(`|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|   🛑`)
      
            const filter_1 = (reaction, user) => user.id === joueur_1.id;
            const filter_2 = (reaction, user) => user.id === joueur_2.id;
      
            // ---------------- Tour joueur 1 : tour 1
            message.awaitReactions(filter_1, { max: 1, time: temps, errors: ['time'] })
              .then(collected => {
                const reaction_1 = collected.first();
                //collecteur de l'émote
                console.log(`Collected ${reaction_1.emoji.name}`);
      
                 if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
                  message.channel.send('Apprend a jouer');
                 }
                 // ---------- Affichage de la grille
                 message.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
                   for (i=0;i<=tab_grille.length-1;i++){
                    message.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
                   }
                 })
              })
              .catch(collected => {
                if (collected.size == 0) {
                  message.channel.send('Sale couard !')
                  gagnant = joueur_2;
                }
              });
      
              // ---------------- Tour joueur 2 : tour 2
              message.awaitReactions(filter_2, { max: 1, time: temps, errors: ['time'] })
                .then(collected => {
                  const reaction_1 = collected.first();
                  //collecteur de l'émote
                  console.log(`Collected ${reaction_1.emoji.name}`);
      
                   if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
                    message.channel.send('Apprend a jouer');
                   }
                   // ---------- Affichage de la grille
                   message.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
                     for (i=0;i<=tab_grille.length-1;i++){
                      message.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
                     }
                   })
                })
                .catch(collected => {
                  if (collected.size == 0) {
                    message.channel.send('Sale couard !')
                    gagnant = joueur_1;
                  }
                });
      
      
                // ---------------- Tour joueur 1 : tour 3
                message.awaitReactions(filter_1, { max: 1, time: temps, errors: ['time'] })
                  .then(collected => {
                    const reaction_1 = collected.first();
                    //collecteur de l'émote
                    console.log(`Collected ${reaction_1.emoji.name}`);
      
                     if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
                      message.channel.send('Apprend a jouer');
                     }
                     // ---------- Affichage de la grille
                     message.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
                       for (i=0;i<=tab_grille.length-1;i++){
                        message.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
                       }
                     })
                  })
                  .catch(collected => {
                    if (collected.size == 0) {
                      message.channel.send('Sale couard !')
                      gagnant = joueur_2;
                    }
                  });
      
                  // ---------------- Tour joueur 2 : tour 4
                  message.awaitReactions(filter_2, { max: 1, time: temps, errors: ['time'] })
                    .then(collected => {
                      const reaction_1 = collected.first();
                      //collecteur de l'émote
                      console.log(`Collected ${reaction_1.emoji.name}`);
      
                       if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
                        message.channel.send('Apprend a jouer');
                       }
                       // ---------- Affichage de la grille
                       message.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
                         for (i=0;i<=tab_grille.length-1;i++){
                          message.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
                         }
                       })
                    })
                    .catch(collected => {
                      if (collected.size == 0) {
                        message.channel.send('Sale couard !')
                        gagnant = joueur_1;
                      }
                    });
      
        //msg.channel.send(`${gagnant} à gagner`)
    }
}