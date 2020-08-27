module.exports.run = async (bot,msg,args) => {
  msg.channel.send("PDF",{files: ['./src/Respirez.pdf']})
}

module.exports.help = {
  name: 'pdf'
}
