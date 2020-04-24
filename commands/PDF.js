module.exports.run = async (bot,msg,args) => {
  const respirez = require('./Respirez.pdf');
  msg.channel.send(`Respirez sinon vous allez mourir !`)
  msg.channel.send(`${respirez}`)
}

module.exports.help = {
  name: 'pdf'
}
