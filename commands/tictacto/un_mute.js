module.exports.run = async (bot, msg, args)=> {
  msg.channel.bulkDelete(1);

  var newChannel;
  var tab_membres = [];


  /*---------- Vérification de la permission ----------*/
  if(!msg.member.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, Ta crus t'étais dieux ?`)
  }
  if(!msg.guild.me.hasPermission("MUTE_MEMBERS")) {
    return msg.channel.send(`**${msg.author.username}**, ... j'aimerai bien`)
  }

  tab_membres = msg.member.voice.channel.members;

  for(i=0; i<=tab_membres.length-1; i++){
    tab_membres[i].voice.setMute(false,"Non")
  }
}


module.exports.help = {
  name: 'u'
}
