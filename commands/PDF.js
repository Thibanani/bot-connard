module.exports.run = async (bot,msg,args) => {
  msg.channel.send(`Respirez sinon vous allez mourir !`)
  msg.channel.send(`${./Respirez.pdf}`)
}

module.exports.help = {
  name: 'pdf'
}
