const { CommandoClient} = require('discord.js-commando');
const path = require('path');
const config = require('./config');

const client = new CommandoClient({
    commandPrefix: config.prefix,
    owner: '288369151687393281'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    //.registerDefaultCommands()
    .registerGroup('music','Music')
    .registerGroup('vocal','Vocal')
    .registerGroup('texte','Texte')
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.server = {
    queue: [],
    currentVideo: { url: "", title: "Rien"},
    dispatcher: null,
    connection: null
};


client.once('ready', () =>{
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`)
});

client.on('error',(error) => console.error(error));

client.login(config.token);