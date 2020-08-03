module.exports.run = async (bot,msg,args) => {
  //const AM = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:"];
  //msg.channel.send(charlou[Math.floor(Math.random() * (charlou.length - 0)+ 0)])
  msg.channel.send("Votre motivation",{files: ['./Photo/AM_'+ Math.floor(Math.random() * (30 - 0)+ 1) +'.png']})
}

module.exports.help = {
  name: 'motiv'
}
