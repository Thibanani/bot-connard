module.exports.run = async (bot, msg, args)=> {
  //msg.channel.bulkDelete(1);

  var newChannel;


  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, Ta crus t'étais dieux ?`)
  }
  if(!msg.guild.me.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, ... j'aimerai bien`)
  }

  if (args != ''){
    /*---------- Vérification de l'id a kick ----------*/
    let target = msg.mentions.members.first();

     if(!target) {//Si l'id est correct
       return msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
     }
     if(target.id === msg.author.id) {//Si l'id est pas celui de l'auteur
       return msg.channel.send(`**${msg.author.username}**, T'es maso ou quoi`)
      }

      target.voice.setMute(true,"Oui")
    }
    else {
      let channel = message.author.voiceChannel;
      for (let member of channel.members) {
          member[1].setMute(true)
      }
    }
}


module.exports.help = {
  name: 'm'
}
