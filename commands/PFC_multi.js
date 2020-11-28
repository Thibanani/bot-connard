module.exports.run = async (bot,msg,args) => {

  let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;

  if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }

  const pfc1 =["C'est entre vous","Quelqu'un ose te défier"]
  dm_j1 = joueur_1.createDM()
  dm_j1.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)


  //collecteur du message envoyée
  const filter_0 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
  const collector_0 = dm_j1.createMessageCollector(filter_0, { max: 1,time: 15000 });
  joueur_1.send(`On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`)

//---------------------------Message au joueur 1
  collector_0.on('collect', m => {
  	console.log(`Collected :${m.content}`);

//---------------------------collecteur de l'émoji du joueur 1
    const filter_1 = (reaction, user) => user.id === msg.author.id;
    const collector_1 = m.createReactionCollector(filter_1, { max: 1,time: 15000 });

    collector_1.on('collect', (reaction_1, user) => {
	     console.log(`Collected ${reaction_1.emoji.name}`);

//---------------------------Message au joueur 2
       joueur_2.send(`${pfc1[Math.floor(Math.random() * pfc1.length)]}`)
       const filter_01 = m => m.author.id === bot.user.id && m.content === `On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`;
       const collector_01 = joueur_2.createMessageCollector(filter_0, { max: 1,time: 15000 });
       joueur_2.send(`On rappelle pour les débiles :  pierre :fist:    feuille :raised_hand:    ciseaux :v:`)
       //collecteur du message envoyée
       collector_01.on('collect', m => {
        console.log(`Collected :${m.content}`);

//---------------------------collecteur de l'émoji du joueur 2
        const filter_2 = (reaction, user) => user.id === joueur_2.id;
        const collector_2 = m.createReactionCollector(filter_2, { max: 1,time: 15000 });
        collector_2.on('collect', (reaction_2, user) => {
           console.log(`Collected ${reaction_2.emoji.name}`);

           if (reaction_1.emoji.name ==  '✊'){
             if (reaction_2.emoji.name == '✊'){
               joueur_1.send(`Egalité, QUI COPIE`)
               joueur_2.send(`Egalité, QUI COPIE`)

             }else if (reaction_2.emoji.name == '✋') {
               msg.channel.send(`Vous êtes mon maitre`)
               joueur_1.send(`T'a perdue gros naze`)
               joueur_2.send(`T'a gagné ptite salope`)

             }else if (reaction_2.emoji.name == '✌️') {
               joueur_2.send(`T'a perdue gros naze`)
               joueur_1.send(`T'a gagné ptite salope`)

             }else{joueur_2.send(`Apprend à jouer avec $help`)}
           }

           else if (reaction_1.emoji.name ==  '✋'){
             if (reaction_2.emoji.name == '✊'){
               joueur_2.send(`T'a perdue gros naze`)
               joueur_1.send(`T'a gagné ptite salope`)

             }else if (reaction_2.emoji.name == '✋') {
               joueur_2.send(`Egalité, QUI COPIE`)
               joueur_1.send(`Egalité, QUI COPIE`)

             }else if (reaction_2.emoji.name == '✌️') {
               joueur_1.send(`T'a perdue gros naze`)
               joueur_2.send(`T'a gagné ptite salope`)

             }else{joueur_2.send(`Apprend à jouer avec $help`)}
           }

           else if (reaction_1.emoji.name ==  '✌️'){
             if (reaction_2.emoji.name == '✊'){
               joueur_1.send(`T'a perdue gros naze`)
               joueur_2.send(`T'a gagné ptite salope`)

             }else if (reaction_2.emoji.name == '✋') {
               joueur_2.send(`T'a perdue gros naze`)
               joueur_1.send(`T'a gagné ptite salope`)

             }else if (reaction_2.emoji.name == '✌️') {
               joueur_2.send(`Egalité, QUI COPIE`)
               joueur_1.send(`Egalité, QUI COPIE`)

             }else{joueur_2.send(`Apprend à jouer avec $help`)}
           }else{joueur_1.send(`Apprend à jouer avec $help`)}
        });

        collector_2.on('end', collected => {
          if (collected.size == 0) {
            joueur_1.send('Sale couard !')
            joueur_2.send('Ton adversaire a fui !')
          }
        });

      });
    });


    collector_1.on('end', collected => {
      if (collected.size == 0) {
        joueur_1.send('Sale couard !')
        joueur_2.send('Ton adversaire a fui !')
      }
    });
  });

  collector_0.on('end', collected => {
    if (collected.size == 0) {
      msg.channel.send("Et la c'est le bug, appeller le 36-30")
    }
  });
}

module.exports.help = {
  name: 'PFC_multi'
}
