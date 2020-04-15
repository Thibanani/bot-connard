module.exports.run = async (bot,msg,args) => {
  msg.channel.send(`Ha ouai, tu veux qu'on se règle`)
  msg.channel.send(`On rappel pour les débiles : pierre:fist:; feuille:raised_hand:; ciseaux:v:`)

  // Await !vote messages
  const filter = m => msg.author.username;
  // Errors: ['time'] treats ending because of the time limit as an error
  channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
    .then(collected => console.log(collected.size))
    .catch(collected => console.log(`After a minute,  ${collected.content}.`));

}

module.exports.help = {
  name: 'PFC'
}
