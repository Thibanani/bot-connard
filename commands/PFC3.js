module.exports.run = async (bot,msg,args) => {
  //const rep = require('/app/repartie.js');

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  const pfc = ['✊','✋','✌️'];



  const filter = m => bot.id === msg.author.id;
  const collector = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });

  symb = pfc[Math.floor(Math.random() * pfc.length)]



  collector.on('collect', m => {
    msg.channel.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)
    msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

  	console.log(`Collected :${m.content}`);
  });

  collector.on('end', collected => {
    if (collected.size == 0)
    {
      msg.channel.send('Sale couard !')
    }
  });


}

module.exports.help = {
  name: 'PFC3'
}
