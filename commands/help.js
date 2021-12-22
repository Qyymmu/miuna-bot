const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message, args){
        const embed = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('Команды для бота')
        .addField(prefix + 'help', 'Данное сообщение')
        .addField(prefix + 'hug', 'Обнять кого-то')
        .addField(prefix + 'kiss', 'Поцеловать кого-то')
        .addField(prefix + 'pat', 'Погладить кого-то')
        .addField(prefix + 'slap', 'Ударить кого-то')
        .addField(prefix + 'tickle', 'Пощекотать кого-то')
        .addField(prefix + 'cuddle', 'Потереться(обнять) кого-то')
        .addField(prefix + 'feed', 'Покормить кого-то')
        .addField(prefix + 'cat', 'Показывает рандомное изображение/гиф кота')
        .addField(prefix + 'dog', 'Показывает рандомное изображение/гиф собаки')
        .addField(prefix + 'goose', 'Показывает рандомное изображение гуся')
        .addField(prefix + 'smug', 'Показывает рандомное изображение/гиф Самодовольного')
        .addField(prefix + 'baka', 'Показывает рандомное изображение/гиф "Бака"')
        .addField(prefix + 'neko', 'Показывает рандомное изображение неко')
        .addField(prefix + 'nekogif', 'Показывает рандомное гиф неко')
        .addField(prefix + 'foxgirl', 'Показывает рандомное изображение/гиф лисодевочки')
        .addField(prefix + 'cattext', 'Показывает сообщение с котиком')
        message.author.send(embed);
    }
}
