module.exports.run = async (bot, msg, args)=> {
  //let joueur_2 = msg.mentions.members.first();
  let joueur_1 = msg.author;
  let joueur_2 = msg.author;

  /*if(!joueur_2) {//Si l'id est correct
    msg.channel.send(`**${msg.author.username}**, Putain mais gros mentionne quelqu'un`)
    return msg.channel.send(`**${args[i]}**, Putain mais c'est personne`)
  }*/



  var fin = 0, joueur_prec,joueur_actif, gagant,i,ligne;
  const tab_joueur = [joueur_1,joueur_2];
  var tab_grille = [
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '],
                    ['|      ','|      ','|      ','|      ','|      ','|      ','|      '] ];

  //Piste a dévelloper
  /*var tab_grille = [
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//1
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//2
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//3
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//4
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//5
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '},//6
    {c1: '|      ',c2: '|      ',c3: '|      ',c4: '|      ',c5: '|      ',c6: '|      '}//7
];

//https://stackoverflow.com/questions/48909283/discord-js-how-do-i-set-a-value-to-an-array-string
*/



  //coniguration tab_grille[ligne][colonne]

  // ---------- Affichage de la grille
  for (i=0;i<=tab_grille.length-1;i++){
    msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
  }
  do {
    // ---------- Collecteur de la colonne ou jettons a placer


    //collecteur pour être sure que le message est envoyée
    const filter_0 = m => m.author.id === bot.user.id && m.content === `<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>:octagonal_sign:`;
    const collector_0 = msg.channel.createMessageCollector(filter_0, { max: 1,time: 15000 });
    msg.channel.send(`<1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣>:octagonal_sign:`)

    collector_0.on('collect', m => {
      console.log(`Collected :${m.content}`);
      //collecteur de l'émote
      const filter_1 = (reaction, user) => tab_joueur[joueur_actif].id === msg.author.id;
      const collector_1 = m.createReactionCollector(filter_1, { max: 1,time: temps });

      collector_1.on('collect', (reaction_1, user) => {
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
         if (reaction_1 = ':octagonal_sign:'){
           fin = 1;
           gagant = joueur[joueur_prec];
         }
         else {
           msg.channel.send('Apprend a jouer');
         }
       });
    });
    // ---------- Affichage de la grille
    msg.channel.bulkDelete(8).then(() => {//suprimer l'ancienne grille
      for (i=0;i<=tab_grille.length-1;i++){
        msg.channel.send(`${tab_grille[i][0]}${tab_grille[i][1]}${tab_grille[i][2]}${tab_grille[i][3]}${tab_grille[i][4]}${tab_grille[i][5]}${tab_grille[i][6]}|`)
      }
    })

    // ---------- Vérification du gagnant
    /*if (1){
      gagant = joueur[joueur_prec];
    }
    if (gagnant != ''){
      fin = 1;
    }*/

    // ---------- Vérification du joueur actif
    if(joueur_prec == 0){
      joueur_prec = 1;
      joueur_actif =0;
    }
    else {
      joueur_prec = 0;
      joueur_actif =1;
    }

  }while (fin == 0);




}
module.exports.help = {
  name: 'P4'
}
