module.exports.run = async (bot, msg, args)=> {
  var temps = 100000;

  /*const Discord = require('discord.js');
  const aff_grille = new Discord.MessageEmbed()*/
  //let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;
  let joueur_2 = msg.author;

  /*if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }*/



  var fin = 0, joueur_prec,joueur_actif, gagnant ='',i,ligne,tour =0;;
  let tab_joueur = [joueur_1,joueur_2];
  var tab_grille = [
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '] ];
  //coniguration tab_grille[ligne][colonne]


  // ---------- Affichage de la grille
  for (i=0;i<=tab_grille.length-1;i++){
    msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
  }

  /*aff_grille
    .setColor('#0099ff')
    .setTitle('Puissance 4')
    .setDescription(`Au tour de ${joueur_1}`)
    .addFields(
  		{ name: '<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>:octagonal_sign:',
      value: "$Leboss : C'est toi le Boss ? \n $Charlou : :sheep: \n $PDF : Pour un max de rigolade \n $PFC : Teste moi dans un duel a mort \n $clean [N] Pour suprimer N message \n $motiv : A utiliser sans modération :Motiv:", inline: true },
      { name: '\u200B', value: '\u200B' },
  	)*/


  //do {
    // ---------- Collecteur de la colonne ou jettons a placer

      //collecteur pour être sur que le message est envoyée
      msg.channel.send(`|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|   🛑`)

      const filter_1 = (reaction, user) => user.id === joueur_2.id;
      msg.awaitReactions(filter_1, { max: 1, time: temps, errors: ['time'] })
        .then(collected => {
          const reaction_1 = collected.first();
          //collecteur de l'émote
          console.log(`Collected ${reaction_1.emoji.name}`);
          if((reaction_1 = '1️⃣')&&(tab_grille[0][0]=='|      ')){//Vérifier si ligne complète
            //poser le simbole
            ligne = 0;
            for(i=tab_grille[0].lenght-1;i>=0;i--){
              if((ligne==0)&&(tab_grille[0][i]=='|      ')){
                ligne = i;
              }
            }
            if (joueur_actif == joueur_1){
              tab_grille[0][ligne]=='|🔴';
            }
            else {
              tab_grille[0][ligne]=='|🟠';
            }
           }
           if((reaction_1 = '2️⃣')&&(tab_grille[1][0]=='|      ')){//Vérifier si ligne complète
             //poser le simbole
             ligne = 0;
             for(i=tab_grille[1].lenght-1;i>=0;i--){
               if((ligne==0)&&(tab_grille[1][i]=='|      ')){
                 ligne = i;
               }
             }
             if (joueur_actif == joueur_1){
               tab_grille[1][ligne]=='|🔴';
             }
             else {
               tab_grille[1][ligne]=='|🟠';
             }
           }
           if((reaction_1 = '3️⃣')&&(tab_grille[2][0]=='|      ')){//Vérifier si ligne complète
             //poser le simbole
             ligne = 0;
             for(i=tab_grille[2].lenght-1;i>=0;i--){
               if((ligne==0)&&(tab_grille[2][i]=='|      ')){
                 ligne = i;
               }
             }
             if (joueur_actif == joueur_1){
               tab_grille[2][ligne]=='|🔴';
             }
             else {
               tab_grille[2][ligne]=='|🟠';
             }
           }
           if((reaction_1 = '4️⃣')&&(tab_grille[3][0]=='|      ')){//Vérifier si ligne complète
             //poser le simbole
             ligne = 0;
             for(i=tab_grille[3].lenght-1;i>=0;i--){
               if((ligne==0)&&(tab_grille[3][i]=='|      ')){
                 ligne = i;
               }
             }
             if (joueur_actif == joueur_1){
               tab_grille[3][ligne]=='|🔴';
             }
             else {
               tab_grille[3][ligne]=='|🟠';
             }
           }
           if((reaction_1 = '5️⃣')&&(tab_grille[4][0]=='|      ')){//Vérifier si ligne complète
             //poser le simbole
             ligne = 0;
             for(i=tab_grille[4].lenght-1;i>=0;i--){
               if((ligne==0)&&(tab_grille[4][i]=='|      ')){
                 ligne = i;
               }
             }
             if (joueur_actif == joueur_1){
               tab_grille[4][ligne]=='|🔴';
             }
             else {
               tab_grille[4][ligne]=='|🟠';
             }
           }
           if((reaction_1 = '6️⃣')&&(tab_grille[5][0]=='|      ')){//Vérifier si ligne complète
             //poser le simbole
             ligne = 0;
             for(i=tab_grille[5].lenght-1;i>=0;i--){
               if((ligne==0)&&(tab_grille[5][i]=='|      ')){
                 ligne = i;
               }
             }
             if (joueur_actif == joueur_1){
               tab_grille[5][ligne]=='|🔴';
             }
             else {
               tab_grille[5][ligne]=='|🟠';
             }
           }
           if (reaction_1 = '🛑'){
             fin = 1;
             gagant = joueur[joueur_prec];
           }
           else {
             msg.channel.send('Apprend a jouer');
           }

           // ---------- Affichage de la grille
           msg.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
             for (i=0;i<=tab_grille.length-1;i++){
               msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
             }
           })
           tour = tour +1;
        })
        .catch(collected => {
          if (collected.size == 0) {
            msg.channel.send('Sale couard !')
            gagnant = tab_joueur[joueur_prec];
          }
        });

    if (tour == 3){
      fin = 1;
    }

    // ---------- Vérification du gagnant
    /*if (gagnant == ''){
      gagnant = tab_joueur[joueur_prec];
    }
    if (gagnant != ''){
      fin = 1;
    }*/

    // ---------- Vérification du joueur actif
    if(joueur_prec == 0){
      joueur_prec = 1;
      joueur_actif = 0;
    }
    else {
      joueur_prec = 0;
      joueur_actif = 1;
    }
  msg.channel.send("wsh")

  //msg.channel.send(`${gagnant} à gagner`)
}
module.exports.help = {
  name: 'P4'
}
