module.exports.run = async (bot,msg,args) => {
  const thib = ["Thib est le pére de toutes choses vous le saviez ?","Vous voulez dire Dieux ?","Juste le boss","Que voulez vous a mon créateur","C'est moi","C'est lui","Fun fact il fait 1m85"];

    msg.channel.send(thib[Math.floor(Math.random() * thib.length)]);

}

module.exports.help = {
  name: 'Thib'
}
