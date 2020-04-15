module.exports.run = async (bot,msg,args) => {
  //const rep = require('/app/repartie.js');

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  console.log(Math.floor(Math.random() * (pfc1.length - 0+1)+ 0));
  msg.channel.send(`${pfc1[0]}`)
  msg.channel.send(`${pfc1[1]}`)
  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

  const user = msg.author.id
  const filter = m => user === m.author.id;
  const collector = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });

  collector.on('collect', m => {
  	console.log(`Collected :${m.content}`);
    if ((m.author.username == 'Kiko-kun' )||(m.author.username == 'Thibanani' )||(m.author.username == 'Seyross' )){
      if (m.content == '✊'){
        msg.channel.send(`:v:`)
        msg.channel.send(`Vous êtes mon maitre`)

      }else if (m.content == '✋') {
        msg.channel.send(`:fist:`)
        msg.channel.send(`Vous êtes mon maitre`)

      }else if (m.content == '✌️') {
        msg.channel.send(`:raised_hand:`)
        msg.channel.send(`Vous êtes mon maitre`)

      }else{msg.channel.send(`Apprend à jouer avec $help`)}
    }

    else{
      if (m.content == '✊'){
        msg.channel.send(`:raised_hand:`)
        msg.channel.send(`Bas alors on est nul, tocard`)

      }else if (m.content == '✋') {
        msg.channel.send(`:v:`)
        msg.channel.send(`Bas alors on est nul, tocard`)

      }else if (m.content == '✌️') {
        msg.channel.send(`:fist:`)
        msg.channel.send(`Bas alors on est nul, tocard`)

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
  name: 'PFC'
}
