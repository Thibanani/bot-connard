module.exports.run = async (bot,msg,args) => {
    msg.channel.send("Bas alors charmy")
    msg.channel.send({files: ['./src/Photo/Conv_tinder_1.jpg']})
    msg.channel.send({files: ['./src/Photo/Charlou_tinder_2.png']})

}

module.exports.help = {
  name: 'Tinder'
}
