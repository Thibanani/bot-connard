const humanizeDuration = require("humanize-duration");
module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  Date temps = new Date.now();
  Date evenement = new Date(2020,08,27).setHours(20);
  Date restant = new Date;

  restant = evenement - temps;

  const h = restant.getHours();
  const m = restant.getMinutes() ;
  const s = restant.getSeconds();
  msg.channel.send(h:m:s)

}

module.exports.help = {
  name: 'Teasing'
}
