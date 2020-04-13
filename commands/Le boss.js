module.exports.run = async (bot,msg,args) => {
    msg.channel.send("Le boss, mais c'est ", msg.author)
}

module.exports.help = {
  name: 'Leboss'
}
