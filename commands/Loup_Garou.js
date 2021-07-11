const f = require('./L_G/Fonction.js');

module.exports.run = async (bot, msg, args)=> {
  const joueurMini = 5;
  tab_J = args;
  var var_temp = 0;

/*--------------------  Vérification du nbr de joueurs  --------------------*/
  if (args.length <= (joueurMini-1)){
    return msg.channel.send(`Nombres de joueurs minimum : ${joueurMini}`)
  }

  for(i=0; i<=(args.length-1); i++){
     if(!args[i]) {//Si l'id est correct
       return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
     }
     for(y=0; y<=(args.length-1); y++){
       if((args[i] == tab_J[y]) && (i != y)) {//Si l'id est correct
         return msg.channel.send(`**${args[y]}**, Il peux pas jouer deux fois`)
       }
     }
  }

  //----------------------DEBUG
  for (i=0; i<=(tab_J.length-1); i++){
    msg.channel.send(`Joueur ${i+1} : ${tab_J[i]}`)
  }
  msg.channel.send("=====================================")

/*--------------------  Attribution des rôles  --------------------*/
//Nombre de chaque rôle
  var nbr_lg = tab_J.length/4;
  var nbr_voy = 1;
  var nbr_vill = tab_J.length - nbr_voy - nbr_lg;

  lg = f.attrib_lg(tab_J, nbr_lg);
  voy = f.attrib_voy(tab_J, nbr_voy, lg);

  //----------------------DEBUG
  msg.channel.send(`Joueur ${lg[0]+1} : ${tab_J[lg[0]]}, L_G`)
  msg.channel.send(`Joueur ${voy[0]+1} : ${tab_J[voy[0]]}, Voy`)
  msg.channel.send("=====================================")


  /*--------------------  Jeu  --------------------*/
  var fin = 0;
  do {
    // -------------------- Nuit
    msg.channel.send("La nuit tombe")
    






    // -------------------- vote
    if (fin == 0){
      msg.channel.send("Le soleil se lève")
    }



    // -------------------- fin
    if (((nbr_vill + nbr_voy) <= 1) && (nbr_lg > 0)){
      msg.channel.send("=====================================")
      msg.channel.send("Les loup_Garous ont anéantis le village !")
      fin == 1;
    }
    else if (nbr_lg <= 0) {
      msg.channel.send("=====================================")
      msg.channel.send("Le village gagne !")
      fin == 1
    }


  } while (fin == 0);


    /*key = "Le cachot";
    newChannel = msg.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);

    target.voice.setChannel(newChannel)
    target.voice.setMute(true,"Oui")*/
}


module.exports.help = {
  name: 'LG'
}
