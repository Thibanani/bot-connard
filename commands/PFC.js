module.exports.run = async (bot,msg,args) => {
  msg.channel.send(`Ha ouai, tu veux qu'on se règle`)
  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)
  const user = msg.author.id
  const filter = m => user === m.author.id;
  const collector = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });

  collector.on('collect', m => {
  	console.log(`Collected :${m.content}`);
    //const rep = m.content.substring(' ')

    if (m.content == '✊'){
      msg.channel.send(`:raised_hand:`)
      msg.channel.send(`Bas alors on est nul, tocard`)
      msg.channel.send('1')

    }else if (`${m.content}` == ':raised_hand:') {
      msg.channel.send(`:v:`)
      msg.channel.send(`Bas alors on est nul, tocard`)
      msg.channel.send('2')

    }else if (`${m.content}` == ':v:') {
      msg.channel.send(`:fist:`)
      msg.channel.send(`Bas alors on est nul, tocard`)
      msg.channel.send('3')

    }else{msg.channel.send(`Sale couard !`)}

  });





}

module.exports.help = {
  name: 'PFC'
}
