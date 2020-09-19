module.exports.run = async (bot, msg, args)=> {

  var newChannel;
  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("MOVE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, You do not have enough permission to use this command`)
  }
  if(!msg.guild.me.hasPermission("MOVE_MEMBERS")) {
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

    key = "Le cachot";
    newChannel = message.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);

    //target.edit(newChannel,"Parceque")
    target.voice.setChannel(newChannel)
}


module.exports.help = {
  name: 'Test'
}
