const Discord = require('discord.js');

module.exports.run = async (bot, msg, args)=> {
  test = new Discord.Guild(bot, "YO");
  test.channels.create("hello",{ reason: 'Needed a cool new channel' })
}
module.exports.help = {
  name: 'test'
}
