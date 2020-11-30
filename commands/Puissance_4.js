module.exports.run = async (bot, msg, args)=> {
  //let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;
  let joueur_2 = msg.author;

  /*if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }*/



  var fin = 0, joueur_prec,joueur_actif, gagant,i;
  const tab_joueur = [joueur_1,joueur_2];
  /*var tab_grille = [
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '},
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '},
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '},
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '},
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '},
                    {'|      ','|      ','|      ','|      ','|      ','|      ','|      '} ];*/

  //Piste a dévelloper
  var tab_grille = [
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//1
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//2
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//3
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//4
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//5
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//6
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '}//7
];

//https://stackoverflow.com/questions/48909283/discord-js-how-do-i-set-a-value-to-an-array-string




  //coniguration tab_grille[ligne][colonne]

  // ---------- Affichage de la grille
  for (i=0;i<=tab_grille.length;i++){
    msg.channel.send(`${tab_grille[i].c1}${tab_grille[i].c2}${tab_grille[i].c3}${tab_grille[i].c4}${tab_grille[i].c5}${tab_grille[i].c6}|`)
  }
  do {
    // ---------- Collecteur de la colonne ou jettons a placer

    /*
    //collecteur pour être sure que le message est envoyée
    const filter_0 = m => m.author.id === bot.user.id && m.content === `<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>:octagonal_sign:`;
    const collector_0 = channel_1.createMessageCollector(filter_0, { max: 1,time: 15000 });
    msg.channel.send(`<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>:octagonal_sign:`)

    collector_0.on('collect', m => {
      console.log(`Collected :${m.content}`);
      //collecteur de l'émote
      const filter_1 = (reaction, user) => tab_joueur[joueur_actif].id === msg.author.id;
      const collector_1 = m.createReactionCollector(filter_1, { max: 1,time: temps });

      collector_1.on('collect', (reaction_1, user) => {
         console.log(`Collected ${reaction_1.emoji.name}`);
         if(reaction_1 = '1️⃣'){
           //Vérifier si ligne complète
           //poser le simbole
         }
         if(reaction_1 = '1️⃣'){

         }
         if(reaction_1 = '1️⃣'){

         }
         if(reaction_1 = '1️⃣'){

         }
         if(reaction_1 = '1️⃣'){

         }
         if(reaction_1 = '1️⃣'){

         }
         else {

         }
       });
    });*/
    // ---------- Affichage de la grille


    // ---------- Vérification du gagnant
    if (1){
      gagant = joueur[joueur_prec];
    }
    if (gagnant != ''){
      fin = 1;
    }

    // ---------- Vérification du joueur actif
    if(joueur_prec == 0){
      joueur_prec = 1;
      joueur_actif =0;
    }
    else {
      joueur_prec = 0;
      joueur_actif =1;
    }

  }while (fin == 0);




}
module.exports.help = {
  name: 'P4'
}
