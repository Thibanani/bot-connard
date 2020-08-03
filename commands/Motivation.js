module.exports.run = async (bot,msg,args) => {
  //const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:"];
  //msg.channel.send(charlou[Math.floor(Math.random() * (charlou.length - 0)+ 0)])
  msg.channel.send("Votre motivation",{files: ['./Photo/AM_1.png']})
}

module.exports.help = {
  name: 'motiv'
}
