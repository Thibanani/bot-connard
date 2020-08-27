const Duration = require('humanize-duration')
module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  const temps = Duration(Date.now(), { units: ['h', 'm'], round: true});
  msh.reply(temps)

}

module.exports.help = {
  name: 'Teasing'
}
