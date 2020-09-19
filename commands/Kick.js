module.exports.run = async (bot, msg, args)=> {

  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("KICK_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, You do not have enough permission to use this command`)
  }
  if(!msg.guild.me.hasPermission("KICK_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, I do not have enough permission to use this command`)
  }

  /*---------- Vérification de l'id a kick ----------*/
  let target = msg.mentions.members.first();

   if(!target) {//Si l'id est correct
     return msg.channel.send(`**${msg.author.username}**, Please mention the person who you want to kick`)
   }
   if(target.id === msg.author.id) {//Si l'id est pas celui de l'auteur
     return msg.channel.send(`**${msg.author.username}**, You can not kick yourself`)
    }
    target.disconnect(args[1]);

}


module.exports.help = {
  name: 'kick'
}
