const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hug',
    execute(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.hug();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`Обнимашки!`)
                .setDescription(`${message.author.ping} всё будет хорошо, солнышко!`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const GIF = await neko.sfw.hug();
            let botmessage = args.join(" ");
            message.catch();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Обнимашки!`)
            .setDescription(`${message.author.ping} обнял(а) ${message.channel.send(botmessage)}`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}