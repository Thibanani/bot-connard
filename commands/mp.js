module.exports.run = async (bot, msg, args)=> {
  /*---------- Vérification de l'id a mp ----------*/
  let target = msg.mentions.members.first();

  if(!target) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
  }
  else if(target.id === msg.author.id) {//Si l'id est pas celui de l'auteur
    msg.channel.send(`**${msg.author.username}**, T'es maso ou quoi`)
  }
  else {  /*---------- code principale ----------*/
    msg.channel.send(`Mentions : ${target.username}, arguments : ${args}, arguments 0 : ${args[0]}, arguments 1 : ${args[1]}`);
    target.send(args[0])
  }
}
module.exports.help = {
  name: 'mp'
}
