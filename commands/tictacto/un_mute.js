module.exports.run = async (bot, msg, args)=> {
  msg.channel.bulkDelete(1);


  console.log("YO");
  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, Ta crus t'étais dieux ?`)
  }
  if(!msg.guild.me.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, ... j'aimerai bien`)
  }

  let channel = msg.member.voice.channel;
  for (let member of channel.members) {
      member[1].voice.setMute(false)
      console.log(member[1]);
  }
}


module.exports.help = {
  name: 'u'
}
