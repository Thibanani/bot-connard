module.exports.run = async (bot, msg, args)=> {
  const joueurMini = 5;
  tab_J = args;
  var var_temp = 0;

/*---------- Vérification du nbr de joueurs ----------*/
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
    msg.channel.send(`Joueur ${i} : ${tab_J[i]}`)
  }
  msg.channel.send("=====================================")

/*---------- Attribution des rôles ----------*/
  var nbr_lg = tab_J.length/4;
  var[] lg[nbr_lg];
  i = 0;
  do{
    var_temp = 0;
    numéroJ_lg = Math.floor(Math.random() * tab_J.length)

    for (y=0; y<=(nbr_lg-1); y++){
      if ((y != i) && (numéroJ_lg == lg[y])){
        var_temp = 1;
      }
    }

    if (var_temp == 0){
      lg[i] = numéroJ_lg;
      i++;
    }

  } while (i <=(nbr_lg-1));




  msg.channel.send(`Joueur ${numéroJ_lg} : ${tab_J[lg[0]]}, L_G`)





    /*key = "Le cachot";
    newChannel = msg.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);

    target.voice.setChannel(newChannel)
    target.voice.setMute(true,"Oui")*/
}


module.exports.help = {
  name: 'LG'
}
