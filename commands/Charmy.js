module.exports.run = async (bot,msg,args) => {
  const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!"];
  msg.channel.send(charlou[Math.floor(Math.random() * (charlou.length - 0)+ 0)])
}

module.exports.help = {
  name: 'Charlou'
}
