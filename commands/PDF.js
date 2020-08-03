const Attachment = require('discord.js')
module.exports.run = async (bot,msg,args) => {
  const respirez = new Attachment('./Respirez.pdf');
  msg.channel.send(respirez)
}

module.exports.help = {
  name: 'pdf'
}
