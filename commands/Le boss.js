module.exports.run = async (bot,msg,args) => {
  if ((msg.author.username == 'Kiko-kun' )||(msg.author.username == 'Thibanani' )||(msg.author.username == 'Seyross' )){
    msg.channel.send(`Le boss, mais c'est ${msg.author.username}`)
  }
  else{
    msg.channel.send(`Le boss, mais c'est MOI ici OK !`)
  }

}

module.exports.help = {
  name: 'Leboss'
}
