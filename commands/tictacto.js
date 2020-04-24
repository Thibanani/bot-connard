module.exports.run = async (bot, msg, args)=> {
  const Game = require('./tictacto/Game');

  Game.newMember(msg.author.username)
  Game.newMember(args)
  //Game.runGame();



}


module.exports.help = {
  name: 'ttt'
}
