const datetime = require('datetime')
module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  now_utc = datetime.datetime.now(tz=pytz.utc)
  now_luxembourg = now_utc.astimezone(pytz.timezone('Europe/Luxembourg'))
  msg.channel.send(now_luxembourg);


}

module.exports.help = {
  name: 'Teasing'
}
