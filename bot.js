const Discord = require('discord.js');

const client = new Discord.Client();

const moment = require('moment');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();
const fs = require('fs');



const prefix = "4"

client.on('ready', () => {
  console.log('cxxxx[]̲̅ ̲̅ ̲̅ ̲̅.̲̅ ̲̅ ̲̅.̲̅ ̲̅ ̲̅.̲̅ ̲̅ ̲̅.̲̅ ̲̅ ̲̅.̲̅ ̲̅ ̅/')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('Go TO TesT')
});


  client.on('ready', async () => {
      let ToRnEdO  = ["fuck","off","off"]
  setInterval(() => {
client.channels.get("504015425672314880").send(`${ToRnEdO [Math.floor(Math.random() *ToRnEdO .length)]}`)
},500);
});
  



client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});




client.on('message', message => {
    if(message.content === '1amount'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === '1@'){
        message.channel.send('#rep <@504016941179076610>')
    }
});

client.on('message', message => {
    if (message.content === "Shake you" + "<@" + `${client.user.id}` + ">") {
        message.channel.send('#credit <@504016941179076610>')
    }
});



client.login(process.env.BOT_TOKEN);
