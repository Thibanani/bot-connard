module.exports.run = async (bot,msg,args) => {
  if (args == "++") {
    msg.channel.send("Votre motivation",{files: ['./src/Photo/AM_6.png']})
  }
  else {
    msg.channel.send("Votre motivation",{files: ['./src/Photo/AM_'+ (Math.floor(Math.random() * 38) +1) +'.png']})
  }


}

module.exports.help = {
  name: 'motiv'
}
