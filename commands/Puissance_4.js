module.exports.run = async (bot, msg, args)=> {
  //let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;
  let joueur_2 = msg.author;

  /*if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }*/



  var fin = 0, joueur_prec, gagant,i;
  const tab_joueur = [joueur_1,joueur_2];
  var tab_grille = new Array();
  tab_grille = [['|      ','|      ','|      ','|      ','|      ','|      ','|      '],['|      ','|      ','|      ','|      ','|      ','|      ','|      '],['|      ','|      ','|      ','|      ','|      ','|      ','|      '],['|      ','|      ','|      ','|      ','|      ','|      ','|      '],['|      ','|      ','|      ','|      ','|      ','|      ','|      '],['|      ','|      ','|      ','|      ','|      ','|      ','|      ']];
  //coniguration tab_grille[ligne][colonne]

  // ---------- Affichage de la grille
  for (i=0;i<=tab_grille.length;i++){
    msg.channel.send(`${tab_grille[i]}${tab_grille[i]}${tab_grille[i]}${tab_grille[i]}${tab_grille[i]}${tab_grille[i]}|`)
  }
  do {
    // ---------- Collecteur de la colonne ou jettons a placer
    msg.channel.send(`<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>`)
    //collecteur pour être sure que le message est envoyée
    const filter_0 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
    const collector_0 = channel_1.createMessageCollector(filter_0, { max: 1,time: 15000 });

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
    }
    else {
      joueur_prec = 0;
    }

  }while (fin == 0);




}
module.exports.help = {
  name: 'P4'
}
