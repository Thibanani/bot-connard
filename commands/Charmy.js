module.exports.run = async (bot,msg,args) => {

  const charlou = ["Hello","Helloooooooooooooooooooooooooooo","Wow '^'","'^'","C'est Génial!",":sheep:","C'était Génial!"];
  var_temp = Math.floor(Math.random() * charlou.length+1)

  if (var_temp == charlou.length) {
    msg.channel.send("Coucou '^'",{files: ['./src/Photo/Coucou.png']})
  }
  else {
    msg.channel.send(charlou[var_temp])
  }

}

module.exports.help = {
  name: 'Charlou'
}
