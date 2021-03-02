const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const { prefix2 } = require('./config.json');
let fs = require('fs');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`${prefix}help`, { type: 'WATCHING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./commands/' + file_name)) return undefined;
    if(fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.on('message', async message => {
  if (message.content.startsWith(`${prefix2}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix2, '')}.js`;
    if(!fs.existsSync('./commands/' + file_name)) return undefined;
    if(fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.on('message', message => {
  if(message.content === "!roll"){
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      var nbrRandom = getRandomInt(3);
      if(nbrRandom == 1){
          message.reply("Test 1")
      }
      if(nbrRandom == 2){
        message.reply("Test 2")
      }
      if(nbrRandom == 3){
        message.reply("Test 3")
      }
  }
  })

client.login(process.env.BOT_TOKEN);
