const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cuddle',
    execute(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.cuddle();
                const embed = new Discord.MessageEmbed()
                .setColor('#202225')
                .setTitle(`Увуву!`)
                .setDescription(`<@${message.author.id}> Увуву!`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.cuddle();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Увуву!`)
            .setDescription(`<@${message.author.id}> трётся об <@${member.user.id}>`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}