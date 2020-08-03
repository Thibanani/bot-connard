const Attachment = require('discord.js')
module.exports.run = async (bot,msg,args) => {
  const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:","C'était Génial!"];
  msg.channel.send(charlou[Math.floor(Math.random() * charlou.length)])
}

module.exports.help = {
  name: 'Charlou'
}
