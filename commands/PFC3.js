module.exports.run = async (bot,msg,args) => {
  //const rep = require('/app/repartie.js');

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  const pfc = ['✊','✋','✌️'];

  msg.channel.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)
  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

  const user = msg.author.id
  const filter = m => user === m.author.id;
  const collector = msg.createReactionCollector(filter, { max: 1,time: 15000 });

  symb = pfc[Math.floor(Math.random() * pfc.length)]



  collector.on('collect', m => {
  	console.log(`Collected :${m.content}`);
    if (symb ==  '✊'){
      msg.react(`✊`)
      if (m.content == '✊'){
        msg.channel.send(`Tu copie`)

      }else if (m.content == '✋') {
        msg.channel.send(`Vous êtes mon maitre`)

      }else if (m.content == '✌️') {
        msg.channel.send(`Bas alors on est nul!`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }

    else if (symb ==  '✋'){
      msg.react(`✋`)
      if (m.content == '✊'){
        msg.channel.send(`Bas alors on est nul!`)

      }else if (m.content == '✋') {
        msg.channel.send(`Tu copie`)

      }else if (m.content == '✌️') {
        msg.channel.send(`Vous êtes mon maitre`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }

    else if (symb ==  '✌️'){
      msg.react(`✌️`)
      if (m.content == '✊'){
        msg.channel.send(`Vous êtes mon maitre`)

      }else if (m.content == '✋') {
        msg.channel.send(`Bas alors on est nul!`)

      }else if (m.content == '✌️') {
        msg.channel.send(`Tu copie`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }
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
