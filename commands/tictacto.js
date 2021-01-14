const fonction = require('./src/Lib/fonction_tictacto.js');

module.exports.run = async (bot, msg, args)=> {
  var temps = 100000;

  let joueur_1 = msg.author;
  let joueur_2 = msg.mentions.members.first();


  var joueur_actif, gagnant ='';

  var tab_grille = [
                    ['|      ','|      ','|      '],
                    ['|      ','|      ','|      '],
                    ['|      ','|      ','|      '] ];

  // --------- Affichage de la grille :
  for (i=0;i<=tab_grille.length-1;i++){
    msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}|`)
  }
  msg.channel.send(`|1️⃣|2️⃣|3️⃣|   🛑`)

  const filter_1 = (reaction, user) => user.id === joueur_1.id;
  const filter_2 = (reaction, user) => user.id === joueur_2.id;



  // ---------------- Tour joueur 1 : tour 1
  joueur_actif = joueur_1;
  msg.awaitReactions(filter_1, { max: 1, time: temps, errors: ['time'] })
    .then(collected => {
      const reaction_1 = collected.first();
      //collecteur de l'émote
      console.log(`Collected ${reaction_1.emoji.name}`);

       if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
         msg.channel.send('Apprend a jouer');
       }
       // ---------- Affichage de la grille
       msg.channel.bulkDelete(4).then(() => {//suprimer l'ancienne grille
         for (i=0;i<=tab_grille.length-1;i++){
           msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}|`)
         }
         msg.channel.send(`|1️⃣|2️⃣|3️⃣|   🛑`)
       })
    })
    .catch(collected => {
      if (collected.size == 0) {
        msg.channel.send('Sale couard !')
        gagnant = joueur_2;
      }
    });



    // ---------------- Tour joueur 2 : tour 2
    if (gagant == '') {
      joueur_actif = joueur_2;
      msg.awaitReactions(filter_2, { max: 1, time: temps, errors: ['time'] })
        .then(collected => {
          const reaction_1 = collected.first();
          //collecteur de l'émote
          console.log(`Collected ${reaction_1.emoji.name}`);

           if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
             msg.channel.send('Apprend a jouer');
           }
           // ---------- Affichage de la grille
           msg.channel.bulkDelete(4).then(() => {//suprimer l'ancienne grille
             for (i=0;i<=tab_grille.length-1;i++){
               msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}|`)
             }
             msg.channel.send(`|1️⃣|2️⃣|3️⃣|   🛑`)
           })
        })
        .catch(collected => {
          if (collected.size == 0) {
            msg.channel.send('Sale couard !')
            gagnant = joueur_1;
          }
        });
    }


    // ---------------- Tour joueur 1 : tour 3
    if (gagant == '') {
      joueur_actif = joueur_1;
      msg.awaitReactions(filter_2, { max: 1, time: temps, errors: ['time'] })
        .then(collected => {
          const reaction_1 = collected.first();
          //collecteur de l'émote
          console.log(`Collected ${reaction_1.emoji.name}`);

           if(fonction.jouer_tour(tab_grille,reaction_1,joueur_actif,joueur_1,gagnant)) {
             msg.channel.send('Apprend a jouer');
           }
           // ---------- Affichage de la grille
           msg.channel.bulkDelete(4).then(() => {//suprimer l'ancienne grille
             for (i=0;i<=tab_grille.length-1;i++){
               msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}|`)
             }
             msg.channel.send(`|1️⃣|2️⃣|3️⃣|   🛑`)
           })
        })
        .catch(collected => {
          if (collected.size == 0) {
            msg.channel.send('Sale couard !')
            gagnant = joueur_2;
          }
        });
    }


}


module.exports.help = {
  name: 'ttt'
}
