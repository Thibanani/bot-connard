module.exports.run = async (bot,msg,args) => {
  msg.channel.send(`Ha ouai, tu veux qu'on se règle`)
  msg.channel.send(`On rappel pour les débiles : pierre:fist:; feuille:raised_hand:; ciseaux:v:`)

  const filter = m => m.content.includes('discord');
  const collector = message.channel.createMessageCollector(filter, { time: 15000 });

  collector.on('collect', m => {
  	console.log(`Collected ${m.content}`);
  });

  collector.on('end', collected => {
  	console.log(`Collected ${collected.size} items`);
  });

}

module.exports.help = {
  name: 'PFC'
}
