const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
const moment = require("moment");
const cmd = require("node-cmd");
const cnfg = JSON.parse(fs.readFileSync("./config.json", "utf8")); 
const {  prefix, devs } = require("./config.json");

client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`${prefix}help | FO CLAN`, { type: "WATCHING" });
});


client.on('message', msg => {
    if (msg.content === 'هاي') {
        msg.reply('**وعليكم الهاي**');
    }
});
client.on('message', msg => {
    if (msg.content === 'باي') {
        msg.reply('**الله معاك يا قلبي**');
    }
});

client.on('message', msg => {
    if (msg.content === 'سلام عليكم') {
        msg.reply('**و عليكم السلام**');
    }
});

client.on('message', msg => {
    if (msg.content === 'باك') {
        msg.reply('** :wink: وِلِـكُمِـ ﻧَوِرُتْ   :sparkling_heart:**');
    }
});

client.on('message', msg => {
    if (msg.content === `<@709917856900448305>`) {
        msg.reply('**الرئيس الاسطورة**');
    }
});

client.on('message', msg => {
    if (msg.content === `<@670993199011201025>`) {
        msg.reply('**انا وان الاسطوره**')
    }
});

client.on('message', msg => {
    if (msg.content === 'مرحبا') {
        msg.reply('**❤هلا بيك منور حمبي**');
    }
});

client.on('message', msg => {
    if (msg.content === 'هاي') {
        msg.reply('**و عليكم الهاي**');
    }
});

client.on('message', msg => {
    if (msg.content === 'احبك') {
        msg.reply('** و انا كمان**');
    }
});

client.on('message', msg => {
    if (msg.content === 'هلا') { 
        msg.reply('**هلا بيك :heart: **');
    }
});

client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
        msg.reply('**و عليكم السلام :heart: **');
    }
});

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to FO servers, ${member}`);
});



/////Help
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "help") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "**Please Check My Permission Embed_Links** "
      );
    let help = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .addField(
        `General`,
        `> **${prefix}user**
         > **${prefix}server**
         > **${prefix}avatar**
         > **${prefix}roles**
         > **${prefix}ping**
         > **${prefix}emojis**
         > **${prefix}find**
         > **${prefix}discrim**`,
        true
      )
      .addField(
        `Moderation`,
        `> **${prefix}kick**
         > **${prefix}ban**
         > **${prefix}unban**
         > **${prefix}mute**
         > **${prefix}unmute**
         > **${prefix}lock**
         > **${prefix}unlock**
         > **${prefix}clear**
         > **${prefix}nick**
         > **${prefix}move**
         > **${prefix}set-stayvoice**
         > **${prefix}stayvoice**`,
        true
      )
      .addField(
        `Ticket`,
        `> **${prefix}new**
         > **${prefix}add**
         > **${prefix}remove**
         > **${prefix}rename**
         > **${prefix}close**`,
        true
      )
      .setDescription(`**${prefix}help <cmd>**`)
      .setFooter(message.author.username, message.author.avatarURL())
      .setThumbnail(message.guild.iconURL())
      .setTimestamp();
    message.channel.send(help);
  }
});

//////
let limt2002 = JSON.parse(fs.readFileSync("./klimts.json", "utf8")); 
const banlimt4 = {};
const kicklimt14 = {};
function savelimt() {
    (require ("fs")).writeFileSync ("./klimts.json", JSON.stringify (limt2002, null, 4))
}
client.on("message", async kmesssage => {
if(!kmesssage.guild) return;
if(kmesssage.author.bot) return;
if(kmesssage.content.startsWith( prefix + "setlimtban")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(1).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}setlimtban [الحد]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (isNaN(args)) return kmesssage.channel.send(`**> Number Only.**`);
if (!limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id] = {
limtban: 5,
limtkick: 5,
delay: 5,
};
if (limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id].limtban = args
savelimt();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "setlimtkick")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(1).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}setlimtkick [الحد]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (isNaN(args)) return kmesssage.channel.send(`**> Number Only.**`);
if (!limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id] = {
limtban: 5,
limtkick: args,
delay: 5,
};
if (limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id].limtkick = args
savelimt();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "setdelay")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(1).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}setdelay [المدة ب الدقايق]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (isNaN(args)) return kmesssage.channel.send(`**> Number Only.**`);
if (!limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id] = {
limtban: 5,
limtkick: 5,
delay: args,
};
if (limt2002[kmesssage.guild.id])
limt2002[kmesssage.guild.id].delay = args
savelimt();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**${args}**`)  
kmesssage.channel.send(embed3)
}
 if (kmesssage.content.startsWith(prefix + 'help limts') || kmesssage.content.startsWith(prefix+'help setlimtban') || kmesssage.content.startsWith(prefix+'help setlimtkick') || kmesssage.content.startsWith(prefix+'help setdelay')){
let limts = new Discord.MessageEmbed()
.setTitle(`اوامر الحماية:lock: `)
.addField("Usage", `**${prefix}setlimtban [Limit]**\n**${prefix}setlimtkick [Limit]**\n**${prefix}setdelay [delay[MIN]]**`)
.addField("Information", "PROTECTION | BAN & KICK LIMTS.");
kmesssage.channel.send(limts);
}
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

/////Ban
client.on('message', message => {
if(message.author.bot) return undefined;
 if (message.content.startsWith(prefix + 'ban') || message.content.startsWith('طير') || message.content.startsWith(prefix +'حضر')){
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
return 
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
return message.channel.send("**> You dont have **BAN_MEMBERS** Permission**")
var args = message.content.split(" ");
var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if (!limt2002[message.guild.id])
limt2002[message.guild.id] = {
limtban: 5,
limtkick: 5,
delay: 5,
};
if (limt2002[message.guild.id])
savelimt();
var limtnum = limt2002[message.guild.id].limtban
if(!banlimt4[message.author.id]) banlimt4 [message.author.id] = {
banLimit: limtnum
};
if(banlimt4[message.author.id].banLimit == "0") return message.reply('**> Sorry, You have exceeded the server ban limit.**');
if(!user) return message.channel.send(`**> Command Usage:**${prefix}ban @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
if(!user.bannable) return message.channel.send(`**> I dont have permission to ban**`);
user.ban(reason)
banlimt4[message.author.id].banLimit -= 1;
   let time = limt2002[message.guild.id].delay *1000*60
setTimeout(() => {
banlimt4[message.author.id].banLimit += 1;
}, time);
message.channel.send(`**> ${user} Banned from the server :airplane:**`)
message.author.send(`**> Your Action limit per day: \`\` ${banlimt4[message.author.id].banLimit}\\${limtnum}
> Action : Banlimt.\`\`**`)
}
if (message.content.toLowerCase() === prefix + "help ban") {
let ban = new Discord.MessageEmbed()
.setTitle(`Command: ban`)
.addField("Usage", `${prefix}ban @user`)
.addField("Information", "Ban Members");
message.channel.send(ban);
}
})

client.on('message' , message => {
let user = message.mentions.users.first()|| client.users.cache.get(message.content.split(' ')[1])
if(message.content.startsWith(prefix + 'unban')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
if(!user) return  message.channel.send(`>>> Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
message.guild.unban(user);
message.guild.owner.send(`>>> لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
var embed = new Discord.MessaeEmbed()
.setThumbnail(message.author.avatarURL())
.setColor("RANDOM")
.setTitle('**>>> Unban** !')
.addField('**>>> User Unban :** ', `${user}` , true)
.addField('**>>> By :**' ,       ` <@${message.author.id}> ` , true)
.setAuthor(message.guild.name)
message.channel.send(embed)
}});



/////Kick
client.on('message', message => {
if(message.author.bot) return undefined;
 if (message.content.startsWith(prefix + 'kick') || message.content.startsWith('طرد')){
if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
return 
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
return message.channel.send("**> You dont have **KICK_MEMBERS** Permission**")
var args = message.content.split(" ");
var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if (!limt2002[message.guild.id])
limt2002[message.guild.id] = {
limtban: 5,
limtkick: 5,
delay: 5,
};
if (limt2002[message.guild.id])
savelimt();
var limtnum = limt2002[message.guild.id].limtkick
if(!kicklimt14[message.author.id]) kicklimt14 [message.author.id] = {
kickLimit: limtnum
};
if(kicklimt14[message.author.id].kickLimit == "0") return message.channel.send('**> Sorry, You have exceeded the server kick limit.**');
if(!user) return message.channel.send(`**> Command Usage:**${prefix}kick @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
user.kick(reason);
kicklimt14[message.author.id].kickLimit -= 1;
   let time = limt2002[message.guild.id].delay *1000*60
setTimeout(() => {
kicklimt14[message.author.id].kickLimit += 1;
}, time);
if(!user.bannable) return message.reply(`**> I dont have permission to ban**`);
message.channel.send(`**> ${user} Kicked from the server :airplane:**`)
message.author.send(`**> Your Action limit per day: \`\` ${kicklimt14[message.author.id].kickLimit}\\${limtnum}
> Action : Kicklimt.\`\`**`)
}
if (message.content.toLowerCase() === prefix + "help kick") {
let kick = new Discord.MessageEmbed()
.setTitle(`Command: Kick `)
.addField("الاستعمال", `**${prefix}kick @user**\n**${prefix}طرد @user**`)
.addField("Information", "kick Members");
message.channel.send(kick);
}
})


/////bans size
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "help bans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});
//=============================== - [ Security ] - ======================================




//=============================== - [ SecurityEND ] - ===================================

const user1 = JSON.parse(fs.readFileSync("./user.json"))
function saveuser() {
    (require ("fs")).writeFileSync ("./user.json", JSON.stringify (user1, null, 4))
}
client.on("message", async kmesssage => {
if(!kmesssage.guild) return;
if(kmesssage.author.bot) return;
if(kmesssage.content.startsWith( prefix + "set myname")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set myname [Custom-NAME]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].cusname = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your name has been changed to : ${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set myage")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set myage [your-age]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].age = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your age has been changed to : ${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set mycountry")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set mycountry [your-country]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].country = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your country has been changed to : ${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set mycity")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set mycity [your-city]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].city = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your city has been changed to : ${args}**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set mybio")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set mybio [your-description]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].description = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your description has been changed.**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set myinstagram")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set myinstagram [username-insta]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].userinsta = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your user-insta has been changed.**`)  
kmesssage.channel.send(embed3)
}
if(kmesssage.content.startsWith( prefix + "set mytwitter")){ // كههربا (حسن ياسر)
if (kmesssage.channel.type == 'dm') // جمــيع الحقوق محفوظة لدي "Kahrbaa"
return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
let args = kmesssage.content.split(' ').slice(2).join(' ');
let embed = new Discord.MessageEmbed()
.setDescription(`\`\`\`Usage: ${prefix}set mytwitter [username-twitter]\`\`\``)
if (!args) return kmesssage.channel.send(embed);
if (!user1[kmesssage.author.id])
user1[kmesssage.author.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
if (user1[kmesssage.author.id])
user1[kmesssage.author.id].usertwiter = args
saveuser();
let embed3 = new Discord.MessageEmbed()
.setDescription(`**Your user-twitter has been changed.**`)  
kmesssage.channel.send(embed3)
}
})
client.on("message", message => {
if(message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix+'id')){
moment.locale("en-TN");
var args = message.content.split(" ");
var user = message.mentions.users.first() || client.users.cache.get(args[1]) || message.author;
let roles = message.guild.member(user).roles.cache.map(m => "<@&"+m+">").join(" ")
if (!user1[user.id])
user1[user.id] = {
cusname: "Empty.",
age: "Empty.",
country: "Empty.",
city: "Empty.",
description: "Empty.",
userinsta: "Empty.",
usertwiter: "Empty.",
};
  let e1 = cnfg["emojis"].instagram
let e2 = cnfg["emojis"].twitter
let info = new Discord.MessageEmbed()
.setThumbnail(`${user.avatarURL()}`)
.addField("**"+user.username+" `INFO`**",` \`\`${user1[user.id].description || "non."}\`\` `)
.addField("📋 Name:", `** \`\`${user1[user.id].cusname || "non."}\`\` **`, true)
.addField("⚙️ Age:", `** \`\`${user1[user.id].age || "non."}\`\` **`, true)
.addField("🕊️ Country:", `** \`\`${user1[user.id].country || "non."}\`\` **`, true)
.addField("🌆 City:", `**\`\`${user1[user.id].city || "non."}\`\`**`,true)
.addField("📎 Social:", `**[${e1 || "Instagram"}](https://www.instagram.com/${user1[user.id].userinsta}/) | [${e2 || "Twitter"}](https://twitter.com/${user1[user.id].usertwiter}/)**`, true)
.addField("🎫 Status:", `**\`\`${user.presence.status}\`\`**`,true)
.addField("> Joined Discord At",`**\`\`${moment(user.createdTimestamp).format("YYYY/M/D HH:mm:ss")}\`\`**`,true)
.addField("> Joined Server At",`**\`\`${moment(user.joinedAt).format("YYYY/M/D HH:mm:ss")}\`\`**`,true)
message.channel.send(info).then(kahrba => {
       kahrba.react('🔧').then(r=>{
          var aaa = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
          var bbb = (reaction, user) => reaction.emoji.name === '⚡' && user.id === message.author.id;
          var aa = kahrba.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
          var bb = kahrba.createReactionCollector(bbb, { maxMatches:1 , time: 60000 , });
aa.on("collect", r => {
    kahrba.edit({embed: new Discord.MessageEmbed()
.setThumbnail(`${user.avatarURL()}`)
.addField(`${user.username}`, `** \`\`${prefix}set mybio\`\` **`, true)
.addField("📋 Name:", `** \`\`${prefix}set myname\`\` **`, true)
.addField("⚙️ Age:", `** \`\`${prefix}set myage\`\` **`, true)
.addField("🕊️ Country:", `** \`\`${prefix}set mycountry\`\` **`, true)
.addField("🌆 City:", `** \`\`${prefix}set mycity\`\` **`,true)
.addField("📎 Social:", `** \`\`${prefix}set myinstagram || ${prefix}set mytwitter \`\` **`, true)
 .setTimestamp()
    });
      kahrba.reactions.removeAll()
	  	kahrba.react('⚡')
  
    })
bb.on("collect", r => {
    kahrba.edit(info);
      kahrba.reactions.removeAll()
	  	kahrba.react('🔧')
 
    })


       })
})
}
if (message.content.toLowerCase() === prefix + "help user") {
let user = new Discord.MessageEmbed()
.setTitle(`Command: user`)
.addField("Usage", `${prefix}user - ${prefix}user @user`)
.addField("Informatiozn", "Info Users");
message.channel.send(user);
}});

/////Mute
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[1]);
if (message.content.startsWith(prefix + "mute") || message.content.startsWith(prefix + "اسكات")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user) return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#000000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`${user.username} Muted!`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

/////unmute
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first()
if (message.content.startsWith(prefix + "unmute") || message.content.startsWith(prefix + "تكلم")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user) return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`${user.username} Unmuted!`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

/////Server
client.on("message", message => {
  moment.locale("en-TN");
  if (message.content.toLowerCase() === prefix + "server") {
    let server = new Discord.MessageEmbed()
    .setAuthor('[GUILD INFO]',message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.author.username,message.author.displayAvatarURL())
      .setColor('RANDOM')
      .setTimestamp()
      .addField("Guild", `**ID: (${message.guild.id})\nOwner:👑 ${message.guild.owner}**`)
      .addField(
        "Guild Details",
        `**>>> Region: \`${message.guild.region.toString().toUpperCase()}\`\nMembers: \`${
        message.guild.members.cache.size}\` Bots: \`${message.guild.members.cache.filter(m=>m.user.bot).size}\`\nBoosts: \`${message.guild.premiumSubscriptionCount}\`\nAfkChannel: <#${message.guild.afkChannelID || "non"}> AfkTime: \`${message.guild.afkTimeout
        }\`\nNotifications:\`${message.guild.defaultMessageNotifications}\`\nVerification: \`${message.guild.verificationLevel}\`\nSystemChannel: \`${message.guild.systemChannelID || "non"
        }\`\nGuild Channels: \`🔊\`${message.guild.channels.cache.filter(m => m.type === 'voice').size} \`#\`${message.guild.channels.cache.filter(m => m.type === 'text').size}\nGuild Roles: \`${message.guild.roles.cache.size}\`\nGuild Emoji:\`${message.guild.emojis.cache.size}\` **`
      )
      .addField(
        "» Guild Creation Date:",
        `**${moment(message.guild.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )}**`
      )
      .addField("» More Info", `**${prefix}roles - ${prefix}emojis**`);
    message.channel.send(server);
  }
  if (message.content.toLowerCase() === prefix + "help server") {
    let hlp = new Discord.MessageEmbed()
      .setTitle(`Command: Server `)
      .addField("Usage", `${prefix}server`)
      .addField("Information", "Information server");
    message.channel.send(hlp);
  }
});

/////Tickets

///Open Ticket
const k2rba = JSON.parse(fs.readFileSync("./tickets.json", "utf8")); 
function k2br() {
    (require ("fs")).writeFileSync ("./tickets.json", JSON.stringify (k2rba, null, 4))
}

client.on("message", message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join("-");
if (message.content.startsWith(prefix + "new") || message.content.startsWith(prefix + "تكت") || message.content.startsWith(prefix + "مشكله")) {
  
let ticketReason = message.content.split(" ").slice(1).join(" ");
if (!ticketReason) return message.channel.send(`**ERORR: i can't find \`reason\` open ticket**`)
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check My Permission**");
    let Support = message.guild.roles.cache.find(
      role => role.name === cnfg.ticketrole
    );
    let everyone = message.guild.roles.cache.find(
      role => role.name === "@everyone"
    );
    if (!Support)
      return message.channel.send(`**I Can't find \`${cnfg.ticketrole}\` Role**`);
    if (
      message.guild.channels.cache.some(n => n.channelname === `ticket-${message.author.username}`)) return message.channel.send(`**Your Already Have Ticket.**`);
  let nCategory = cnfg.nCategory
          let ticketCategory = message.guild.channels.cache.find(kah => kah.name === `${nCategory}`);
     if (!ticketCategory) return message.channel.send(`**ERORR: I can't find \`${nCategory}\`**`)
  if (!k2rba[message.author.id])
k2rba[message.author.id] = {
limt: 0,
channelname: "kah",
};
        if(k2rba[message.author.id].limt === cnfg.limttick) return message.reply(`**ERORR: You need to close a ticket from \`${k2rba[message.author.id].limt}\`tickets.**`) 
    message.guild.channels.create(`ticket-${message.author.username}`, { type: "text" })
      .then(async ticket => {
        ticket.setParent(ticketCategory)
        ticket.createOverwrite(Support, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
        ticket.createOverwrite(everyone, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
        });
        ticket.createOverwrite(message.author, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
        });
      if (k2rba[message.author.id])
     k2rba[message.author.id].channelname = `ticket-${message.author.username}`
  k2rba[message.author.id].limt = `${k2rba[message.author.id].limt}`*1+2-1
    k2br();
        let embed = new Discord.MessageEmbed().setDescription(
          `Your Ticket <#${ticket.id}>`
        );
        message.channel.send(embed);
        let embed1 = new Discord.MessageEmbed()
          .addField(
            `Ticket information `,
            `\`\`\`By : ${message.author.username} ,- ID : ${message.author.id}\`\`\``
          ,true)
          .addField(
            `Ticket Reseon `,
            `\`\`\`${ticketReason}\`\`\``
          ,true)
          .addField(
            `${message.author.username}\`Ticket's limit\``,
            `\`\`\`${eval(`${cnfg.limttick} - ${k2rba[message.author.id].limt}`)}\`\`\``
          )

          .setFooter(message.author.username, message.author.avatarURL())
      .setTimestamp();
        ticket.send(embed1);
        ticket.send(`${Support} ..`).then(m => { 
        setTimeout(function() {
          m.edit(`**Please wait for the \`seller\` to come.**`);
        }, 5000)
          });
    });
  }
if (message.content.startsWith(prefix + "add")) {
  
    let args = message.content.split(" ")
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if(!user) {
    message.channel.send(`**>>> Please specify a friend to add, ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
 message.channel.createOverwrite(user.id,
    {
      'VIEW_CHANNEL': true,
      'SEND_MESSAGES': true
   });
    let embed = new Discord.MessageEmbed()
      .setTitle('Added')
          .addField(
            `**User:**`,
            `\`\`\`${user.username || user.user.username}\`\`\``
          ,true )
          .addField(
            `**By:**`,
            `\`\`\`${message.author.username}\`\`\``
          ,true )
      .setTimestamp()
      .setFooter(`added by: ${message.author.username}`, message.author.avatarURL());
    message.channel.send(`${message.author.tag} invited ${user} to the ticket`);
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "remove")) {
  
    let args = message.content.split(" ")
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if(!user) {
    message.channel.send(`**>>> Please specify a friend to remove, ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
 message.channel.createOverwrite(user.id,
    {
      'VIEW_CHANNEL': false,
      'SEND_MESSAGES': false
   });
    let embed = new Discord.MessageEmbed()
      .setTitle('Removed')
          .addField(
            `**User:**`,
            `\`\`\`${user.username || user.user.username}\`\`\``
          ,true )
          .addField(
            `**By:**`,
            `\`\`\`${message.author.username}\`\`\``
          ,true )
      .setTimestamp()
      .setFooter(`removed by: ${message.author.username}`, message.author.avatarURL());
    message.channel.send(`${message.author.tag} removed ${user} to the ticket`);
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "rename")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check My Permission**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
    if (!args)  
      return message.channel.send("**Please Type To Can Reanmed Ticket**");
    message.channel.setName(`ticket-${args}`);
    let embed = new Discord.MessageEmbed()
      .setDescription(`Ticket renamed To => ${args}`)
      .setTimestamp()
      .setFooter(`By :${message.author.username}`, message.author.avatarURL());
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "close")) {
    let args = message.content.split(" ")
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check My Permission**");
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
      if (!user) message.channel.send("**>>> mention to user or put him id**");
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
      let embed = new Discord.MessageEmbed()
      .setDescription("**```css\nTicket - Closing\nClosing your ticket in 5 seconds```**");
      message.channel.send(embed);
    setTimeout(function(){
      if (k2rba[message.author.id])
      k2rba[user.id].limt = `${k2rba[user.id].limt}`*1+2-1-1-1
      k2br();
      message.channel.delete();
    }, 5000);
  }
  if (message.content.toLowerCase() === prefix + "help new") {
    let newT = new Discord.MessageEmbed()
      .setTitle(`Command: new `)
      .addField("Usage", `${prefix}new [Reason]`)
      .addField("Information", "Open Ticket");
    message.channel.send(newT);
  }
  if (message.content.toLowerCase() === prefix + "help rename") {
    let rename = new Discord.MessageEmbed()
      .setTitle(`Command: rename `)
      .addField("Usage", `${prefix}rename [args]`)
      .addField("Information", "Renamed Ticket");
    message.channel.send(rename);
  }
});
/////clear messages
client.on("message", async message => {
if (message.content.startsWith(prefix + "clear") || message.content.startsWith("مسح") || message.content.startsWith(prefix + "مسح") ) {
    let args = message.content.substring(prefix.length).split(" ");
    message.delete();
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**Please Check Your Permission**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("Please check my permissions");
    if (!args[1]) {
      message.channel.messages.fetch().then(messages => {
        message.channel.bulkDelete(messages);
        let msgs = messages.array().length;
        let embed = new Discord.MessageEmbed().setDescription(
          "```javascript\n" + msgs + " message deleted```"
        );
        message.channel.send(embed);
      });
    }
  }
  else if (message.content.toLowerCase() === prefix + "help clear") {
    let clear = new Discord.MessageEmbed()
      .setTitle(`Command: clear `)
      .addField("Usage", `${prefix}clear | مسح`)
      .addField("Information", "Delete Messages");
    message.channel.send(clear);
  }
});

/////lock channeol
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "lock" || message.content.toLowerCase() === prefix + "قفل" || message.content.toLowerCase() === "قفل") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .send("**Please Check Your Permssion**")
        .then(m => m.delete({ timeout: 5000 }));
    message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false });
    let lock = new Discord.MessageEmbed()
      .setDescription("```تم قفل الشات بواسطة : " + message.author.username + "```")
      .setColor("None");
    message.channel.send(lock);
  }
  if (message.content.toLowerCase() === prefix + "unlock" || message.content.toLowerCase() === prefix + "فتح" || message.content.toLowerCase() === "فتح") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .send("**Please Check Your Permssion**")
        .then(m => m.delete({ timeout: 5000 }));
    message.channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true });
    let unlock = new Discord.MessageEmbed().setDescription(
      "```تم فتح الشات بواسطة : " + message.author.username + "``` "
    );
    message.channel.send(unlock);
  }
  if (message.content.toLowerCase() === prefix + "help lock") {
    let lock = new Discord.MessageEmbed()
      .setTitle(`Command: lock `)
      .addField("Usage", `${prefix}lock | قفل`)
      .addField("Information", "lock Channel");
    message.channel.send(lock);
  }
  if (message.content.toLowerCase() === prefix + "help unlock") {
    let unlock = new Discord.MessageEmbed()
      .setTitle(`Command: unlock `)
      .addField("Usage", `${prefix}unlock | فتح`)
      .addField("Information", "unlock Channel");
    message.channel.send(unlock);
  }
});


/////Avatar
client.on("message", message => {
  if (message.content.toLowerCase().startsWith(`${prefix}avatar`)) {
    let args = message.content.split(" ")
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "> **Please Check My Permission Embed_Links** "
      );
    let user = message.mentions.users.first() || message.author || message.guild.member.cache.get(args[1])
    if (user.avatarURL() === null)
      return message.channel.send(
        ` ${user.username} , this user has not have avatar.`
      );
    let avatar = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL())
      .setImage(user.avatarURL())
      .setTitle(`Avatar Link`)
      .setURL(user.avatarURL())
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.avatarURL()
      );
    message.channel.send(avatar);
  }
  if (message.content.toLowerCase() === prefix + "help avatar") {
    let avatar = new Discord.MessageEmbed()
      .setTitle(`Command: avatar`)
      .addField("Usage", `${prefix}avatar - ${prefix}avatar @user`)
      .addField("Information", "avatar Member");
    message.channel.send(avatar);
  }
});
/*
/////Show guild roles 
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles" || message.content.toLowerCase() === "تفضل") {
    let roles = message.guild.roles.cache
      .map(r => `[ ${r.name}  - Color ${r.color} ]`)
      .join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});
*/
/////show guild emojis
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "emojis") {
    let emojis = message.guild.emojis.cache.map(e => ` ${e}`).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Emojis")
      .setDescription(emojis);
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help emojis") {
    let emojis = new Discord.MessageEmbed()
      .setTitle(`Command: emojis `)
      .addField("Usage", `${prefix}emojis`)
      .addField("Information", "Show All Emojis For Server");
    message.channel.send(emojis);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "aserver") {
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "> **Please Check My Permission Embed_Links** "
      );
    if (message.guild.iconURL() === null)
      return message.channel.send(`This server has not have avatar.`);
    let avatar = new Discord.MessageEmbed()
      .setImage(message.guild.iconURL())
      .setTitle(`Avatar Server Link`)
      .setURL(message.guild.iconURL())
      .setFooter(
        `Requested by ${message.author.tag}`,
        message.author.avatarURL()
      );
    message.channel.send(avatar);
  }
  if (message.content.toLowerCase() === prefix + "help aserver") {
    let avatar = new Discord.MessageEmbed()
      .setTitle(`Command: aserver`)
      .addField("Usage", `${prefix}aserver`)
      .addField("Information", "avatar server");
    message.channel.send(avatar);
  }
});

/////bot ping
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "ping") {
    message.channel
      .send({ embed: new Discord.MessageEmbed().setDescription("Loading....") })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription("Pinging....")
          });
        }, 3000);
        let start = Date.now();
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription(
              `Time Take : ${Date.now() - start}ms \nPing : ${client.ws.ping}`
            )
          });
        }, 4000);
      });
  }
  if (message.content.toLowerCase() === prefix + "help ping") {
    let ping = new Discord.MessageEmbed()
      .setTitle(`Command: ping`)
      .addField("Usage", `${prefix}ping`)
      .addField("Information", "Ping Bot");
    message.channel.send(ping);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();
    
    if (!user) return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "find")) {
    var args1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let size = 1;
    if (message.author.bot) return;
    if (!message.guild.member) return;
    if (!args1)
      return message.channel.send(
        `**> ${prefix}find (A word or letter from the name)**`
      );

    var playersFind = new Discord.MessageEmbed()
      .setTitle(`**> Search : \`\`${args1}\`\`**`)
      .setDescription(
        `**>  Members Find : \`\`${
          message.guild.members.cache.filter(m =>
            m.user.username.toUpperCase().includes(args1.toUpperCase())
          ).size
        }\`\` .\n\n\`\`\`═════════════\n\n${message.guild.members.cache
          .filter(m =>
            m.user.username.toUpperCase().includes(args1.toUpperCase())
          )
          .map(m => size++ + ". " + m.user.tag)
          .slice(0, 20)
          .join("\n") ||
          `i can't find any user with the words`}\n\n═════════════\`\`\`**`
      )
      .setColor("GRAY")
      .setTimestamp()
      .setFooter(message.author.tag, message.author.avatarURL());

    message.channel.send(playersFind);
    message.delete();
  }
  if (message.content.toLowerCase() === prefix + "help find") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: find`)
      .addField("Usage", `${prefix}find <user>`)
      .addField("Information", "find any user by words");
    message.channel.send(move);
  }
});
////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "discrim")) {
    var args1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let size = 1;
    if (message.author.bot) return;
    if (!message.guild.member) return;

    if (args1 == "") {
      var tagkplayer = message.author.discriminator;
    } else {
      var tagkplayer = args1;
      if (isNaN(args1))
        return message.channel.send(`**> ${prefix}help discrim**`);
      if (args1.length != 4) return message.channel.send("**> Put 4 numbers**");
    }

    var playersFind = new Discord.MessageEmbed()
      .setTitle(`**> Search tag : \`\`#${tagkplayer}\`\`**`)
      .setDescription(
        `**>  Members They have tag  : \`\`${
          client.users.cache.filter(m => m.discriminator == tagkplayer).size
        }\`\` .\n\n\`\`\`═════════════\n\n${client.users.cache
          .filter(m => m.discriminator == tagkplayer)
          .map(m => size++ + ". " + m.tag)
          .slice(0, 20)
          .join("\n") ||
          `i can't find member with this tag`}\n\n═════════════\`\`\`**`
      )
      .setColor("GRAY")
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());

    message.channel.send(playersFind);
    message.delete();
  }
  if (message.content.toLowerCase() === prefix + "help discrim") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: discrim`)
      .addField("Usage", `${prefix}discrim Or ${prefix}discrim 0001`)
      .addField("Information", "search on users from tag");
    message.channel.send(move);
  }
});
////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "move")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** has been moved to **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
});

///Role
client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`I Need Permissions !!`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**>>> Role \`${role1.name}\` removed to ${user.user}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**>>> Role \`${role1.name}\` added to ${user.user}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
  if (message.content.toLowerCase() === prefix + "help role") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: role`)
      .addField("Usage", `${prefix}role @user role`)
      .addField("Information", "Change Roles");
    message.channel.send(move);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "vkick")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}vkick <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    await user.voice.kick();
    message.channel.send(
      `**${user.user.username}** has been kicked from **Voice Channel**`
    );
  }
  if (message.content.toLowerCase() === prefix + "help vkick") {
    let vkick = new Discord.MessageEmbed()
      .setTitle(`Command: vkick`)
      .addField("Usage", `${prefix}vkick @user`)
      .addField("Information", "voice kick members");
    message.channel.send(vkick);
  }
});

client.on("message", message => {
if (message.content.startsWith(prefix + "vmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
        if (!user) return message.channel.send(`**>>> ${prefix}vmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(true);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});
client.on("message", message => {
if (message.content.startsWith(prefix + "vunmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
            if (!user) return message.channel.send(`**>>> ${prefix}vunmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(false);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});


client.on("message", message => {
if(message.content.toLowerCase().startsWith(prefix + "roll")){
let roll = message.content.split(" ").slice(1).join(" ")
if(isNaN(roll)) return message.channel.send("**Number.!**")
if(!roll) return message.channel.send(`${Math.floor(Math.random() * 100)}`)
message.channel.send(Math.floor(Math.random() * roll))
}})


const db = JSON.parse(fs.readFileSync("./stay.json", "UTF8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "stayvoice")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!db)
      db = {
        onoff: "Off"
      };
    if (db.onoff === "Off")
      return [
        message.channel.send(`**The stayvoice Is __On__ !**`),
        (db.onoff = "On"),
        client.channels.cache.get(db.svoice,"voice").join()
      ];
    if (db.onoff === "On")
      return [
        message.channel.send(`**The stayvoice Is __Off__ !**`),
        (db.onoff = "Off")
      ];
    fs.writeFile("./stay.json", JSON.stringify(db), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on ("voiceStateUpdate", async (kahrbaa) => {
    if (!db)
    db = {onoff: "Off"}
  if (db.onoff === "Off") return;
    if (!db) return console.log ("nope");
  client.channels.cache.get(db.svoice,"voice").join()
})
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if (message.content.startsWith(prefix + "set-stayvoice")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let roomid = message.content.split(' ').slice(1).join(" ")
    if(!roomid) return message.reply(`${prefix}stayvoice \`iD ROOM\``)
    db.svoice = roomid
    message.channel.send(`**> StayVoice-ID has been changed to \`\`${roomid}\`\`**`);
  }
fs.writeFile("./stay.json", JSON.stringify(db), function(e){
    if (e) throw e;
})
});




client.on("message", message => {
    var args = message.content.split(" ");
    var sugg = message.content.split(" ").slice(1).join(" ");
    if (args[0] === prefix+"suggest" || args[0] === prefix+"sug" || args[0] === prefix+"اقتراح"){
    if (!sugg){
        return message.channel.send("Usage : `"+args[0]+" <your suggest>`");
    }
    var chname = "النصائح『💌』"; // اسم الروم
    var sugchanel = message.guild.channels.cache.find(ch => ch.name == chname); // اسم الروم 
    if (!sugchanel){
        return message.channel.send("**i can't find a suggestion channel please create one with name `"+chname+"`**");
    }
    message.channel.send("شكرا على الاقتراح  تم ارسال رسالتك في شات<#"+sugchanel.id+">")
    message.delete();
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Suggestion By '+message.author.tag)
    .setDescription(`${sugg}`)
    sugchanel.send(embed).then(mes => {
    mes.react("⬆️").then(rec =>{
        mes.react("⬇️")
    })
    
    });
    }
});



client.login(process.env.token);
