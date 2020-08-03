module.exports.run = async (bot,msg,args) => {
  //const rep = require('/app/repartie.js');

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  const pfc = ['✊','✋','✌️'];

  msg.channel.send(`${pfc1[Math.floor(Math.random() * ((pfc1.length-1 -0 +1))+ 0]}`)
  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

  const user = msg.author.id
  const filter = m => user === m.author.id;
  const collector = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });

  symb = pfc[Math.floor(Math.random() * ((pfc.length-1 -0 +1))+ 0]



  collector.on('collect', m => {
  	console.log(`Collected :${m.content}`);
    if (symb ==  '✊'){
      msg.channel.send(`:fist:`)
      if (m.content == '✊'){
        msg.channel.send(`Tu copie`)

      }else if (m.content == '✋') {
        msg.channel.send(`Vous êtes mon maitre`)

      }else if (m.content == '✌️') {
        msg.channel.send(`Bas alors on est nul!`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }

    else if (symb ==  '✋'){
      msg.channel.send(`:raised_hand:`)
      if (m.content == '✊'){
        msg.channel.send(`Bas alors on est nul!`)

      }else if (m.content == '✋') {
        msg.channel.send(`Tu copie`)

      }else if (m.content == '✌️') {
        msg.channel.send(`Vous êtes mon maitre`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }

    else if (symb ==  '✌️'){
      msg.channel.send(`:v:`)
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
  name: 'PFC2'
}
