module.exports.run = async (bot,msg,args) => {
  msg.channel.send("PDF",{files: ['./Respirez.pdf']})
}

module.exports.help = {
  name: 'pdf'
}
