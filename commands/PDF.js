module.exports.run = async (bot,msg,args) => {
  //const respirez = require('./Respirez.pdf');
  msg.channel.send(`Respirez sinon vous allez mourir !`)
  msg.channel.send(`${require('./Respirez.pdf')}`)
}

module.exports.help = {
  name: 'pdf'
}
