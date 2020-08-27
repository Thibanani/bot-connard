module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  const temps = Date.getHours();
  const evenement = Date.setHours(20);

  const h = temps.getHours();
  const m = temps.getMinutes();
  const s = temps.getSeconds();

  msg.channel.Send(evenement)
  msg.channel.Send(h);
  msg.channel.Send(m);
  msg.channel.Send(s);
  //msg.channel.send(h +':'+ m +':'+ s)
}

module.exports.help = {
  name: 'Teasing'
}
