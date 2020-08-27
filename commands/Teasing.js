module.exports.run = async (bot,msg,args) => {
  msg.channel.send("Ce soir en avant premiére se dévoile Charlou du 57")

  ZoneId zoneId = ZoneId.of("UTC+2");
  ZonedDateTime now = ZonedDateTime.now(); // Default time zone
  msg.channel.send(now);


}

module.exports.help = {
  name: 'Teasing'
}
