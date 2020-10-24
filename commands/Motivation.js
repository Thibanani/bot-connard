module.exports.run = async (bot,msg,args) => {
  if (args == "++") {
    msg.channel.send("Votre motivation",{files: ['./src/Photo/AM_6.png']})
  }
  else if (args != ''){
    for (i=0;i<=args-1;i++){
      msg.channel.send("Vos motivation")
      msg.channel.send({files: ['./src/Photo/AM_'+ (Math.floor(Math.random() * 38) +1) +'.png']})
    }
  }
  else {
    msg.channel.send("Votre motivation",{files: ['./src/Photo/AM_'+ (Math.floor(Math.random() * 38) +1) +'.png']})
  }


}

module.exports.help = {
  name: 'motiv'
}
