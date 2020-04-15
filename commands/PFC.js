module.exports.run = async (bot,msg,args) => {
  msg.channel.send(`Ha ouai, tu veux qu'on se règle`)
  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)
  const user = msg.author.id
  const filter = m => user === m.author.id;
  const collector = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });
  console.log(`Collected2 ${collector.content}`);

  collector.on('collect', m => {
  	console.log(`Collected ${m.content}`);
  });

  //const rep = collector.on('collect', m => {m.content});
  console.log(`Collected2 ${collector.on('collect', m.content)}`);

  /*if (m.content == ':fist:'){
    msg.channel.send(`:raised_hand:`)
    msg.channel.send(`Bas alors on est nul, tocard`)

  }else if (m.content == ':raised_hand:') {
    msg.channel.send(`:v:`)
    msg.channel.send(`Bas alors on est nul, tocard`)

  }else if (m.content == ':v:') {
    msg.channel.send(`:fist:`)
    msg.channel.send(`Bas alors on est nul, tocard`)

  }else{msg.channel.send(`Sale couard !`)}*/


}

module.exports.help = {
  name: 'PFC'
}
