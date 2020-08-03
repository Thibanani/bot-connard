module.exports.run = async (bot,msg,args) => {
  const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'"];
  msg.channel.send(charlou[Math.floor(Math.random() * (charlou.length - 0)+ 0)])
}

module.exports.help = {
  name: 'Charlou'
}
