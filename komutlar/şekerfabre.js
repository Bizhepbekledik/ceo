const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        
            const kahve = new Discord.MessageEmbed()
            .setDescription(`${message.author}, **DÜNYANIN EN TATLI ŞEKERİ !**`)
            .setColor('0xff6f9c')
            .setImage('https://cdn.discordapp.com/avatars/597115051127603210/e07439569756b1525a36ebca15b8a3ce.png?size=1024')
            .setFooter('fabrêin#4482 💖');
            message.channel.send(kahve)
        }
   

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Şeker'],
    permLevel: 0
}

exports.help = {
    name: 'şeker',
    description: 'fabrêin özel komut <3'
}