
module.exports.run = async (bot,msg,args) => {
  msg.channel.send("PDF",{file: ['./Respirez.pdf']})
}

module.exports.help = {
  name: 'pdf'
}
