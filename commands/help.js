module.exports.run = async (bot,msg,args) => {

  const exampleEmbed = new Discord.MessageEmbed()
  	.setColor('#0099ff')
  	.setTitle('Pour toi le boulet')
  	//.setURL('https://discord.js.org/')
  	.setAuthor('Par moi')
  	.setDescription('tu trouveras toutes mes fonction ici et tâche de ne plus de déranger')
  	//.setThumbnail('https://i.imgur.com/wSTFkRM.png')
  	.addFields( /*------------------- Pour Les commande vocale -------------*/
  		{ name: 'Mes meilleurs réactions vocale', value: '$c : Pour en mettre plein la geule à tes énemis', inline: true },
  		{ value: '$q : Pour reçevoir ta question exixtancielle'},
      { value: '$r : Pour reçevoir la réponse exixtancielle'},
      { value: '$qr : Pour un max de mix'},
      { value: '$qr : Pour un max de mix'},
      { value: '$oof : Pour exprimer ton soulagement'},
      { value: '$tg : Pour fermer le claper de tes adversaire'},
      { value: '$topette : Juste la meilleur commande'},
  	)
    .addFields(/*------------------- Pour Les commande texte -------------*/
  		{ name: '\u200B', value: '\u200B' },
  		{ name: 'Mes meilleurs commande texte', value: "$Leboss : C'est toi le Boss ?", inline: true },
  		{ value: '$Charlou : :sheep:'},
      { value: '$PDF : Pour un max de rigolade'},
      { value: '$PFC : Teste moi dans un duel a mort'},
      { value: '$motiv : Juste la meilleur commande a utiliser sans modération'},
  	)
  	.setTimestamp()
  	.setFooter("L'auteur c'est moi");

  msg.channel.send(exampleEmbed);

}

module.exports.help = {
  name: 'help'
}
