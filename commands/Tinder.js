module.exports.run = async (bot,msg,args) => {
    msg.channel.send("Bas alors charmy")
    msg.channel.send({files: ['./Photo/Charlou_tinder_2.png']})
    msg.channel.send({files: ['./Photo/Conv_tinder_1.jpg']})
}

module.exports.help = {
  name: 'Tinder'
}
