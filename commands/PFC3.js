module.exports.run = async (bot,msg,args) => {
  //const rep = require('/app/repartie.js');

  const pfc1 = [`Ha ouai, tu veux qu'on se règle`,`Viens chte bz`];
  const pfc = ['✊','✋','✌️'];


  msg.channel.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)

  const filter = m => bot.user.id === m.author.id;
  const collector_1 = msg.channel.createMessageCollector(filter, { max: 1,time: 15000 });
  symb = pfc[Math.floor(Math.random() * pfc.length)]

  msg.channel.send(`On rappel pour les débiles : pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

  collector_1.on('collect', m => {
  	console.log(`Collected :${m.content}`);

    const filter = reaction => user.id === reaction.author.id;
    const collector_2 = m.createReactionCollector(filter, { max: 1,time: 15000 });


    collector_2.on('collect', (reaction) => {
	     console.log(`Collected ${reaction.emoji.name}`);

       if (symb ==  '✊'){
         m.react(`✊`)
         if (reaction.emoji.name == '✊'){
           msg.channel.send(`Tu copie`)

         }else if (reaction.emoji.name == '✋') {
           msg.channel.send(`Vous êtes mon maitre`)

         }else if (reaction.emoji.name == '✌️') {
           msg.channel.send(`Bas alors on est nul!`)

         }else{msg.channel.send(`Apprend à jouer avec $help`)}
       }

       else if (symb ==  '✋'){
         m.react(`✋`)
         if (reaction.emoji.name == '✊'){
           msg.channel.send(`Bas alors on est nul!`)

         }else if (reaction.emoji.name == '✋') {
           msg.channel.send(`Tu copie`)

         }else if (reaction.emoji.name == '✌️') {
           msg.channel.send(`Vous êtes mon maitre`)

         }else{msg.channel.send(`Apprend à jouer avec $help`)}
       }

       else if (symb ==  '✌️'){
         m.react(`✌️`)
         if (reaction.emoji.name == '✊'){
           msg.channel.send(`Vous êtes mon maitre`)

         }else if (reaction.emoji.name == '✋') {
           msg.channel.send(`Bas alors on est nul!`)

         }else if (reaction.emoji.name == '✌️') {
           msg.channel.send(`Tu copie`)

         }else{msg.channel.send(`Apprend à jouer avec $help`)}
       }
    });


    collector_2.on('end', collected => {
      if (collected.size == 0) {
        msg.channel.send('Sale couard !')
      }
    });
  });

  collector.on('end', collected => {
    if (collected.size == 0) {
      msg.channel.send("Et la c'est le bug, appeller le 36-30")
    }
  });


}

module.exports.help = {
  name: 'PFC3'
}
