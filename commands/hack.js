const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hack',
    execute(client, message, args){
        if (!message.guild) return;
            async function goose() {
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`Производится взлом сервера.......Сервер успешно взломан!`)
            message.channel.send(embed);
            }
            goose();
    }
}