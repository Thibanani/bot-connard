module.exports.run = async (bot,msg,args) => {
  const am_1 = require('../Photo/AM_1.png');
  //const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:"];
  //msg.channel.send(charlou[Math.floor(Math.random() * (charlou.length - 0)+ 0)])
  msg.channel.send_file(am_1)
}

module.exports.help = {
  name: 'motiv'
}