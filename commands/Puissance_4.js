module.exports.run = async (bot, msg, args)=> {
  let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;

  if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }



  var fin = 0, joueur_prec, gagant;
  const tab_joueur = [joueur_1,joueur_2];
  var tab_grille = [['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','','']];
  // ---------- Affichage de la grille
  msg.channel.send()
  do {
    // ---------- Collecteur de la colonne ou jettons a placer


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

void aff_grille {

}
