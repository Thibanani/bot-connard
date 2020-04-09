module.exports.run = async (bot, msg, args)=> {
  if (msg.member.voice.channel) {
    const connection = await msg.member.voice.channel.join();
  } else {
    msg.reply('You need to join a voice channel first!');
  }
}

module.exports.help = {
  name: 'Viens'
}
