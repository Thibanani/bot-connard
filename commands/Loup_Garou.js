module.exports.run = async (bot, msg, args)=> {
  const joueurMini = 5;
  tab_J [args.length];

/*---------- Vérification du nbr de joueurs ----------*/
  if (args.length <= (joueurMini-1)){
    return msg.channel.send(`Nombres de joueurs minimum : ${joueurMini}`)
  }

  for(i=0; i<=(args.length-1); i++){
     if(!args[i]) {//Si l'id est correct
       return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
     }
     for(y=0; y<=(args.length-1); y++){
       if((args[i].id === tab_J[y]) && (i != y)) {//Si l'id est correct
          return msg.channel.send(`**${args[y]}**, Il peux pas jouer deux fois`)
        }
        else {
          tab_J[i] = args[i];
        }
      }
  }

  for (i=0; i<=(tab_J.length-1; i++){
    msg.channel.send(`Joeur ${i} : ${tab_J[i]}`)
  }







    /*key = "Le cachot";
    newChannel = msg.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);

    target.voice.setChannel(newChannel)
    target.voice.setMute(true,"Oui")*/
}


module.exports.help = {
  name: 'LPG'
}
