const { Command, CommandoMessage } = require("discord.js-commando");

module.exports = class LoupGarouCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'loup_garou',
            group: 'texte',
            memberName: 'loup_garou',
            description: "En_cours.",
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} query 
     */
     async run(message, { query }) {
        const joueurMini = 5;
        tab_J = args;
        var var_temp = 0;
      
      /*--------------------  Vérification du nbr de joueurs  --------------------*/
        if (query.length <= (joueurMini-1)){
          return message.channel.send(`Nombres de joueurs minimum : ${joueurMini}`)
        }
      
        for(i=0; i<=(query.length-1); i++){
           if(!query[i]) {//Si l'id est correct
             return message.channel.send(`**${query[i]}**, Putain mais c'est personne`)
           }
           for(y=0; y<=(query.length-1); y++){
             if((query[i] == tab_J[y]) && (i != y)) {//Si l'id est correct
               return message.channel.send(`**${query[y]}**, Il peux pas jouer deux fois`)
             }
           }
        }
      
        //----------------------DEBUG
        for (i=0; i<=(tab_J.length-1); i++){
            message.channel.send(`Joueur ${i+1} : ${tab_J[i]}`)
        }
        message.channel.send("=====================================")
      
      /*--------------------  Attribution des rôles  --------------------*/
      //Nombre de chaque rôle
        var nbr_lg = tab_J.length/4;
        var nbr_voy = 1;
        var nbr_vill = tab_J.length - nbr_voy - nbr_lg;
      
        lg = f.attrib_lg(tab_J, nbr_lg);
        voy = f.attrib_voy(tab_J, nbr_voy, lg);
      
        //----------------------DEBUG
        message.channel.send(`Joueur ${lg[0]+1} : ${tab_J[lg[0]]}, L_G`)
        message.channel.send(`Joueur ${voy[0]+1} : ${tab_J[voy[0]]}, Voy`)
        message.channel.send("=====================================")
      
      
        /*--------------------  Jeu  --------------------*/
        var fin = 0;
        do {
          // -------------------- Nuit
          message.channel.send("La nuit tombe")
          
      
      
      
      
      
      
          // -------------------- vote
          if (fin == 0){
            message.channel.send("Le soleil se lève")
          }
      
      
      
          // -------------------- fin
          if (((nbr_vill + nbr_voy) <= 1) && (nbr_lg > 0)){
            message.channel.send("=====================================")
            message.channel.send("Les loup_Garous ont anéantis le village !")
            fin == 1;
          }
          else if (nbr_lg <= 0) {
            message.channel.send("=====================================")
            message.channel.send("Le village gagne !")
            fin == 1
          }
      
      
        } while (fin == 0);
      
      
          /*key = "Le cachot";
          newChannel = msg.guild.channels.cache.find((val) =>  val.name === key ||val.id === key);
      
          target.voice.setChannel(newChannel)
          target.voice.setMute(true,"Oui")*/
    }
}