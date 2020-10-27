module.exports.run = async (bot, msg, args)=> {

  msg.channel.bulkDelete(1);
  mp = args


  /*---------- Vérification de l'id a mp ----------*/
  let target = msg.mentions.members.first();

  if(!target) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
  }
  else if(target.id === msg.author.id) {//Si l'id est pas celui de l'auteur
    msg.channel.send(`**${msg.author.username}**, T'es maso ou quoi`)
  }
  else if (mp != ''){  /*---------- code principale ----------*/
    target.send(`${mp}`)
  }
  else {
    msg.channel.send(`**${msg.author.username}**, Mais apprend à faire une commande`)
  }
}
module.exports.help = {
  name: 'godmod'
}
