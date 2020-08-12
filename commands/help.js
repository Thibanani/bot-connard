module.exports.run = async (bot,msg,args) => {
  const Discord = require('discord.js');
  const exampleEmbed = new Discord.MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle('Pour toi le boulet')
  	//.setURL('https://discord.js.org/')
  	.setAuthor('Par moi')
  	.setDescription('Tu trouveras toutes mes fonctions ici et tâche de ne plus de déranger')
  	//.setThumbnail('https://i.imgur.com/wSTFkRM.png')
  	.addFields( /*------------------- Pour Les commande vocale -------------*/
      { name: '\u200B', value: '\u200B' },
  		{ name: 'Mes meilleurs réactions vocale',
      value: '$c : Pour en mettre plein la geule à tes énnemis \n $tg : Pour fermer le claper de tes adversaires \n $q : Pour reçevoir ta question existentielle \n $r : Pour reçevoir la réponse existentielle \n $qr : Pour un max de mix \n $oof : Pour exprimer ton soulagement  \n $topette : Juste la meilleur commande', inline: true },
  	)
    .addFields(/*------------------- Pour Les commande texte -------------*/
  		{ name: '\u200B', value: '\u200B' },
  		{ name: 'Mes meilleurs commandes texte',
      value: "$Leboss : C'est toi le Boss ? \n $Charlou : :sheep: \n $PDF : Pour un max de rigolade \n $PFC : Teste moi dans un duel a mort \n $motiv : Juste la meilleure commande à utiliser sans modération", inline: true },
      { name: '\u200B', value: '\u200B' },
  	)
  	.setTimestamp()
  	.setFooter("L'auteur c'est moi");

  msg.channel.send(exampleEmbed);

}

module.exports.help = {
  name: 'help'
}
