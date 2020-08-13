module.exports.run = async (bot,msg,args) => {
  if (args == "++") {
    msg.channel.send("Votre motivation",{files: ['./Photo/AM_6.png']})
  }
  else {
    msg.channel.send("Votre motivation",{files: ['./Photo/AM_'+ (Math.floor(Math.random() * (31 + 1)) +1) +'.png']})
  }


}

module.exports.help = {
  name: 'motiv'
}
