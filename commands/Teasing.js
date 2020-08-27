const humanizeDuration = require("humanize-duration");
module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  const temps = Date.now()
  /*const h = Date.now() % 3600000;
  const m = Date.now() ;
  const s =;*/
  msg.channel.send(temps)

}

module.exports.help = {
  name: 'Teasing'
}
