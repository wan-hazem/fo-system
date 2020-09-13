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
//const db = require("quick.db")
//const enmap = require('enmap');
const {  prefix, devs ,ticketrole ,nCategory} = require("./config");

client.on("ready", () => {
  console.log(`${client.user.tag}`);
   console.log(`${client.guilds.cache.size} Servers`);
  console.log(`${client.users.cache.size} Members`);
   console.log(`${client.channels.cache.size} Channels`);
  console.log(`[ ${client.guilds.cache.map(g => g.name).join(", \n ")} ]`);
  client.user.setActivity(`${prefix}help | ${prefix}inv | v2`, { type: "WATCHING" });
});

//=============================== - [ message ] - ======================================
client.on('message', msg => {
    if (msg.content === 'كفو') {
        msg.reply('**كفوك الطيب يا الغالي النفيس**');
    }
});
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.channel.send('hello');
  }
});
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.channel.send('hello');
  }
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
    if (msg.content === 'مرحبا') {
        msg.reply('**❤هلا بيك منور حمبي**');
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
client.on('message', msg => {
  if (msg.content === prefix + 'inv') {
      msg.author.send(`رابط اضافه البوت الى سيرفرك
      https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`) 
      msg.react("✅").catch(error => {
      msg.react("❌")})
    }
});


//=============================== - [ end-message ] - ======================================


//=============================== - [ welocme ] - ======================================
client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === '😍┫welcome۞');
  if (!channel) return;
  channel.send(`Welcome to FO servers, ${member}`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`🌹  ولكم نورت السيرفر🌹 
👑اسم العضو  ${member}👑  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`رابط سيرفر البوت 
https://discord.gg/jyKqshn`) 
}).catch(console.error)
});
//=============================== - [ end-welocme ] - ======================================



//=============================== - [ help ] - ======================================


//<a:pp920:752246035245432834>

client.on('message', message => {
  if (message.content === prefix + 'admin') { 
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "**Please Check My Permission Embed_Links** "
      );
    let help_admin = new Discord.MessageEmbed()
    .setTitle(`اوامر الادمنيه`)
    .setDescription(`${prefix}ban <a:pp920:752246035245432834> لتبنيد عضو
    ${prefix}kick <a:pp920:752246035245432834> لطرد عضو من السيرفر
    `)
    
      message.author.send(help_admin);
  }
});



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
        `> **${prefix}user: عرض معلومات الحساب**
         > **${prefix}server: عرض معلومات السيرفر**
         > **${prefix}avatar: اضهار صورتك الشخصيه**
         > **${prefix}roles: الامر متوقف حاليا**
         > **${prefix}ping: اضهار سرعه استجابه البوت**
         > **${prefix}emojis: الامر متوقف حاليا**
         > **${prefix}find: للبحث عن عضو**
         > **${prefix}discrim: يضهر لك الاشخاص يلي بنفس اسمك**`,
        true
      )
      .addField(
        `Moderation`,
        `> **${prefix}kick: طرد عضو من السيرفر**
         > **${prefix}ban: تبنيد عضو من السيرفر**
         > **${prefix}unban: فك البان عن عضو في السيرفر**
         > **${prefix}mute: اعصاء العضو ميوت كتابي**
         > **${prefix}unmute: فك الميوت الكتابي من العضو**
         > **${prefix}lock: قفل الشات**
         > **${prefix}unlock: فتح الشات**
         > **${prefix}clear: مسح الشات**
         > **${prefix}nick: اختيار اسم العضو**
         > **${prefix}move: سحب عضو**
         > **${prefix}set-stayvoice: اختيار روم صوتيه الى تثبيت البوت**
         > **${prefix}stayvoice: تفعيل ثبات البوت في روم صوتي**`,
        true
      )
      .addField(
        `Musice`,
        `> **${prefix}play: تشغيل اغنيه**
         > **${prefix}search: للبحث على اغنيه**
         > **${prefix}skip: تخطي اغنيه**
         > **${prefix}stop: ايقاف الميزك و مسح قائمه التشغيل**
         > **${prefix}volume: تعديل مستوى الصوت**
         > **${prefix}nowplaying: عرض قائمه التشغيل**
         > **${prefix}pause: ايقاف مؤقتا**
         > **${prefix}resume: اكمل الاغنيه**`
         ,
        true
      )
       .addField(
        `Games`,
        `> **${prefix}cut: لعبه كت تويت**
         > **${prefix}لو خيروك**
         > **${prefix}فكك**
         > **${prefix}اسرع**
         > **${prefix}صراحه**`,
        true
      )
      .addField(
        `Ticket`,
        `> **${prefix}new: فتح تكت مع السبب**
         > **${prefix}add: اضافه شخص يشوف التكت**
         > **${prefix}remove: اخفاء التكت عن شخص**
         > **${prefix}rename: اعادة تسمية التكت**
         > **${prefix}close: قفل التكت**`,
        true
      )
      .setDescription(`**${prefix}help <cmd>**`)
      .setFooter(message.author.username, message.author.avatarURL())
      .setThumbnail(message.guild.iconURL())
      .setTimestamp();
    message.channel.send(help);
  }
});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help play") {
let play = new Discord.MessageEmbed()
.setTitle(`Command: play`)
.addField("Usage", `\`\`\`${prefix}play <اسم الاغنيه او رابط الاغنيه>
${prefix}p <اسم الاغنيه او رابط الاغنيه>
${prefix}ش
${prefix}شغل
\`\`\``)
.addField("Informatiozn", "play music");
message.channel.send(play);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help search") {
let search = new Discord.MessageEmbed()
.setTitle(`Command: search`)
.addField("Usage", `\`\`\`${prefix}search <اسم الاغنيه>
${prefix}sc
${prefix}بحث
\`\`\``)
.addField("Informatiozn", "search music");
message.channel.send(search);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help skip") {
let skip = new Discord.MessageEmbed()
.setTitle(`Command: search`)
.addField("Usage", `\`\`\`${prefix}skip
${prefix}s
${prefix}تخطي
\`\`\``)
.addField("Informatiozn", "skip music");
message.channel.send(skip);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help stop") {
let stop = new Discord.MessageEmbed()
.setTitle(`Command: search`)
.addField("Usage", `\`\`\`${prefix}stop
${prefix}leave
${prefix}disconnect
${prefix}قف
\`\`\``)
.addField("Informatiozn", "stop music");
message.channel.send(stop);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help volume") {
let volume = new Discord.MessageEmbed()
.setTitle(`Command: volume`)
.addField("Usage", `\`\`\`${prefix}volume
${prefix}vol
${prefix}v
${prefix}صوت
\`\`\``)
.addField("Informatiozn", "volume music");
message.channel.send(volume);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help nowplaying") {
let nowplaying = new Discord.MessageEmbed()
.setTitle(`Command: nowplaying`)
.addField("Usage", `\`\`\`${prefix}nowplaying
${prefix}np
\`\`\``)
.addField("Informatiozn", "nowplaying music");
message.channel.send(nowplaying);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help pause") {
let pause = new Discord.MessageEmbed()
.setTitle(`Command: pause`)
.addField("Usage", `\`\`\`${prefix}pause
${prefix}q
\`\`\``)
.addField("Informatiozn", "pause music");
message.channel.send(pause);
}});
client.on("message", message => {
if (message.content.toLowerCase() === prefix + "help resume") {
let resume = new Discord.MessageEmbed()
.setTitle(`Command: resume`)
.addField("Usage", `\`\`\`${prefix}resume
${prefix}كمل
${prefix}اكمل
\`\`\``)
.addField("Informatiozn", "resume music");
message.channel.send(resume);
}});

//=============================== - [ end-help ] - ======================================

//=============================== - [ admin ] - ======================================
client.on('message', message => {
if(message.author.bot) return undefined;
 if (message.content.startsWith(prefix + 'ban') || message.content.startsWith(prefix +'حضر')){
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
return 
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
return message.channel.send("**> You dont have **BAN_MEMBERS** Permission**")
var args = message.content.split(" ");
var user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if(!user) return message.channel.send(`**> Command Usage:**${prefix}ban @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
user.ban(reason)
message.channel.send(`**> ${user} Banned from the server :airplane:**`)

}
if (message.content.toLowerCase() === prefix + "help ban") {
let ban = new Discord.MessageEmbed()
.setTitle(`Command: ban`)
.addField("Usage", `${prefix}ban @user
${prefix}حضر
طير`)
.addField("Information", "Ban Members");
message.channel.send(ban);
}
})






/*
client.on('message' , message => {
let user = message.mentions.users.first()|| client.users.cache.get(message.content.split(' ')[1])
if(message.content.startsWith(prefix + 'unban')) {
if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('❌|**\`BAN_MEMBERS\`لا يوجد لديك الصلاحيه`**');
if(!user) return message.channel.send(`>>> Do this ${prefix}unban <@ID user> \n or \n ${prefix}unban ID user`);
message.guild.members.unban(user);
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
*/




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
if(!user) return message.channel.send(`**> Command Usage:**${prefix}kick @user reason`)
let reason = message.content.split(" ").slice(2).join(" ");
user.kick(reason);
if(!user.bannable) return message.reply(`**> I dont have permission to ban**`);
message.channel.send(`**> ${user} Kicked from the server :airplane:**`)
 }
if (message.content.toLowerCase() === prefix + "help kick") {
let kick = new Discord.MessageEmbed()
.setTitle(`Command: Kick `)
.addField("الاستعمال", `**${prefix}kick @user**\n**${prefix}طرد @user**`)
.addField("Information", "kick Members");
message.channel.send(kick);
}
})
/*
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
*/






/*
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
    message.channel.send(`✅ muted @${user.username} from the text! 🤐`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});
*/




client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first()
if (message.content.startsWith(prefix + "unmute") || message.content.startsWith(prefix + "تكلم")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**لا يوجد اديك الصلاحيات الكلافيه**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**لا يوجد لديا الصلاحيات الكافيه**"
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
    message.channel.send(`✅ muted @${user.username} from the text! 🤐`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});



client.on('message' , message =>{
  let commands = message.content.split(" ");
  if(commands[0] == prefix + "embed"){
  if(!message.guild) return;
if(!message.guild.member(message.author).hasPermission("EMBED_LINKS")) return message.reply("**You Dont Have [--EMBED_LINKS--] Permission .**");
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Please Check My Role Permission To [--EMBED_LINKS--]	");
  var args = message.content.split(" ").slice(1).join(' ')
  if (!args){
      return message.channel.send("`Usage : "+prefix+"embed <message>`");
  }
  message.delete()
  var embed = new Discord.MessageEmbed()
  .setAuthor(`message embed ${client.user.username}`, message.author.avatarURL())
  .setThumbnail(message.guild.iconURL())
  .setColor(`Black`)
  .setDescription(`${args}`)
  .setFooter(`By ${message.author.tag}`)
  message.channel.send(embed);
  }
});

client.on("message",message => {
	var args = message.content.split(" ");
	var command = args[0];
	var emojisname = args[1];
	var emojislink = args[2];
	if (command === prefix + "emoji-add"){
		if (!message.guild){
			return message.channel.send("Only SERVER Commands");
		}
		if (!message.guild.member(client.user).hasPermission("MANAGE_EMOJIS")){
			return message.channel.send("لا تتوفر لدى البوت صلاحية  `MANAGE_EMOJIS`");
		}
		if(!message.guild.member(message.author).hasPermission("MANAGE_EMOJIS")) {
			return message.channel.send("لا تتوفر لديك صلاحيات `MANAGE_EMOJIS`");
		}
		if(!emojisname){
			return message.channel.send("يرجى ادراج اسم الايموجي");
		}
		if (!emojislink){
			return message.channel.send("يرجى ادراج رابط الايموجي");
		}
		message.guild.emojis.create(emojislink, emojisname).then(emoji =>{
			message.channel.send("Emoji Created . <:"+emoji.name+":"+emoji.id+">")
		}).catch(err => message.channel.send("يجب ان يكون حجم الصورة اقل من `256` كيلوبايت"));
	}
});


client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send("Thanks for invite me")
});




const logid = "750408623913697370"; // ايدي روم اللوق
client.on("guildCreate" , guild =>{
	var logchannel = client.channels.cache.get(logid);
	if(logchannel){
		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setDescription(` ** 
__Bot Status__
:desktop: :  ${client.guilds.cache.size}
:busts_in_silhouette: : ${client.users.cache.size}
**
`) 
    .setTimestamp()
	.setFooter('(bot info)')
	logchannel.send(embed);
	}
});


client.on("guildDelete" , guild =>{
	var logchannel = client.channels.cache.get(logid);
	if(logchannel){
		let embed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setDescription(` ** 
__Bot Status__
:desktop: :  ${client.guilds.cache.size}
:busts_in_silhouette: : ${client.users.cache.size}
**
`) 
    .setTimestamp()
	.setFooter('(bot info)')
	logchannel.send(embed);
	}
});







client.on('message' , message =>{
  let commands = message.content.split(" ");
  if(commands[0] == prefix + "say"){
  if(!message.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Dont Have `MANAGE_MESSAGES` Permission .**");
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Please Check My Role Permission To `MANAGE_MESSAGES`");
  var args = message.content.split(" ").slice(1).join(' ')
  if (!args){
      return message.channel.send("`Usage : "+prefix+"say <message>`");
  }
  message.delete()
  message.channel.send(args);
  }

});




/*
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
  */



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
      message.channel.send(`🔒 <#${message.channel.id}> تم قفل`);
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
      message.channel.send(`🔓 <#${message.channel.id}> تم فتح`);
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

  const mute = JSON.parse(fs.readFileSync("./mute.json"))
client.on("message", async message => {
if(message.content.startsWith(prefix + "mute")) {
let timefilter;
if(!message.guild.member(message.author).hasPermission("MUTE_MEMBRS"))
return;
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
return message.channel.send(":rolling_eyes: - I couldn't mute that user. Please check my permissions and role position.")
let args = message.content.split(" ")
let user = message.mentions.users.first() || message.guild.members.cache.get(args[1])
if(!user) return message.channel.send("**:rolling_eyes: - I can't find this member**")
let Timer = message.content.split(" ").slice(2).join(" ");
if (!Timer) return message.channel.send("**Please Type Mute Time `1m` `1h` `1d` `1w` `1m` `1y`**")
let mute = message.guild.roles.cache.find(role => role.name === "Muted") 
if(!mute) 
mute = await message.guild.createRole({name: "Muted",color: "#000000",permissions:[]})
message.guild.channels.cache.forEach(async channel => {await channel.createOverwrite(mute, {SEND_MESSAGES: false,ADD_REACTIONS: false});});
fs.writeFile("./mute.json", JSON.stringify(mute), err => {
message.guild.member(user).roles.add(mute)
message.channel.send("**:white_check_mark: @"+user.username+" has been muted**")
if ((Timer = "15m")) {timefilter = 150000;
} else if ((Timer = "30m")) {timefilter = 300000;} else if ((Timer = "1h")) {timefilter = 600000;
} else if ((Timer = "3h")) {timefilter = 1800000;} else if ((Timer = "1d")) {timefilter = 14400000;
} else if ((Timer = "3d")) {timefilter = 43200000;} else if ((Timer = "1w")) {timefilter = 604800000;
} else if ((Timer = "1m")) {timefilter = 60000;} else if ((Timer = "2m")) {timefilter = 120000;
} else if ((Timer = "3m")) {timefilter = 180000;} else if ((Timer = "4m")) {timefilter = 240000;
} else if ((Timer = "5m")) {timefilter = 300000;} else if ((Timer = "1y")) {timefilter = 31557600000;
} else if ((Timer = "2y")) {timefilter = 63115200000;} else if ((Timer = "3y")) {timefilter = 94672800000;
} else if ((Timer = "4y")) {timefilter = 126230400000;} else if ((Timer = "5y")) {timefilter = 157788000000;}
else if ((Timer = "1s")) {timefilter = 1000;}
setTimeout(() => {
message.guild.member(user).roles.remove(mute);
message.channel.send("Unmuted User @" + user.username + " : Time Up");
}, timefilter);
})}})
  
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
    if (cmd === `${prefix}role` ||cmd === `${prefix}خذ` || cmd === `تفضل` ) {
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
      let role = new Discord.MessageEmbed()
        .setTitle(`Command: role`)
        .addField("Usage", `\`\`\`${prefix}role @user role
  ${prefix}خذ @user role
  تفضل @user role\`\`\``)
        .addField("Information", "Change Roles");
      message.channel.send(role);
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
  
  
//=============================== - [ end-admin ] - ======================================


//=============================== - [ general ] - ======================================
  
const user1 = JSON.parse(fs.readFileSync("./user.json"))
function saveuser() {
  (require ("fs")).writeFileSync ("./user.json", JSON.stringify (user1, null, 4))
}

client.on("message", async kmesssage => {
  if(!kmesssage.guild) return;
  if(kmesssage.author.bot) return;
  if(kmesssage.content.startsWith( prefix + "set myname")){ 
  if (kmesssage.channel.type == 'dm') 
  return kmesssage.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
  let args = kmesssage.content.split(' ').slice(2).join(' ');
  let embed = new Discord.MessageEmbed()
  .setDescription(`\`\`\`Usage: ${prefix}set myname [Custom-NAME]\`\`\``)
  if (!args) return kmesssage.channel.send(embed);
  if (!user1[kmesssage.author.id])
  user1[kmesssage.author.id] = {
  cusname: "Empty.",
  };
  if (user1[kmesssage.author.id])
  user1[kmesssage.author.id].cusname = args
  saveuser();
  let embed3 = new Discord.MessageEmbed()
  .setDescription(`**Your name has been changed to : ${args}**`)  
  kmesssage.channel.send(embed3)
  }
})
client.on("message", message => {
if(message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix+'id') || message.content.startsWith(prefix+'معلوماتي')){
moment.locale("en-TN");
var args = message.content.split(" ");
var user = message.mentions.users.first() || client.users.cache.get(args[1]) || message.author;
let roles = message.guild.member(user).roles.cache.map(m => "<@&"+m+">").join(" ")
if (!user1[user.id])
user1[user.id] = {
cusname: `${message.author.username}`,
};
let info = new Discord.MessageEmbed()
.setThumbnail(`${message.author.displayAvatarURL()}`)
.setColor("RANDOM")
.setDescription(`** \`معلومات\` ${user.username}**

> 📋 الاسم : \n**\`${user.username}\`** 
 
> 🎫 الحاله : \n**\`${user.presence.status}\`**
 
> ℹ️ تاريخ الانضمام للدسكورد : \n**\`${moment(user.createdTimestamp).format("YYYY/M/D HH:mm:ss")}\`**
 
> 💢 تاريخ الانضمام للسيرفر : \n**\`${moment(user.joinedAt).format("YYYY/M/D HH:mm:ss")}\`**`)
.setFooter(`بطلب من ${message.author.username}`)
message.channel.send(info)
}
if (message.content.toLowerCase() === prefix + "help user") {
let user = new Discord.MessageEmbed()
.setTitle(`الامر: user`)
.addField("Usage", `${prefix}user - ${prefix}user @user`)
.addField("الاختصارات", `${prefix}id , ${prefix}معلوماتي`)
.addField("Informatiozn", "Info Users");
message.channel.send(user);
}});

client.on("message", message => {
  moment.locale("en-TN");
  if (message.content.toLowerCase() === prefix + "server") {
    let server = new Discord.MessageEmbed()
    .setAuthor('[GUILD INFO]',message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.author.username,message.author.displayAvatarURL({dynamic : true}))
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
      .setImage(user.avatarURL({dynamic : true}))
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

client.on("message", message =>{
  if(message.content.startsWith(prefix + "roles")) {
  const f = '                        ' 
  const roles = message.guild.roles.cache.map(role => {
  const d = f.slice(role.name.length)
  return `${role.name}${d}${role.members.size} Members`}).join(`\n`)
  message.channel.send(`\`\`\`${roles}\`\`\``)
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let emojis = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All roles For Server");
    message.channel.send(emojis);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "emojis") {
    let emojis = message.guild.emojis.cache.map(e => `${e}`).join("\n");
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

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "ping") {
    message.channel
      .send({ embed: new Discord.MessageEmbed().setDescription("Loading....") })
      .then(function(m) {
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription("Pinging....")
          });
        }, 200);
        let start = Date.now();
        setTimeout(function() {
          m.edit({
            embed: new Discord.MessageEmbed().setDescription(
              `Time Take : ${Date.now() - start}ms \nPing : ${client.ws.ping}`
            )
          });
        }, 1000);
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



client.on("message", message => {
if(message.content.toLowerCase().startsWith(prefix + "roll")){
let roll = message.content.split(" ").slice(1).join(" ")
if(isNaN(roll)) return message.channel.send("**Number.!**")
if(!roll) return message.channel.send(`${Math.floor(Math.random() * 100)}`)
message.channel.send(Math.floor(Math.random() * roll))
}})




client.on('guildMemberAdd', member => {
  const moment = require("moment")
        const welcomer = member.guild.channels.cache.find(
            (d) => d.name == 'welcome'
        );
        if (!welcomer) return;
        if (welcomer) {
            moment.locale('en');
            var m = member.user;
            let Discord = require('discord.js');

            member.guild.fetchInvites().then((guildInvites) => {
                setTimeout(() => {
                    const invite = guildInvites.find((i) => i.uses);

                    let embed = new Discord.MessageEmbed()
                        .setAuthor(member.user.tag, member.user.avatarURL({dynamic : true}))
                        .setTitle('**لقد انضم عضو جديد**')
                        .setThumbnail(member.user.avatarURL())
                        .setTimestamp()
                        .setDescription(`اسم العضو : ${member}
اضيف بواسطه: <@${invite.inviter.id}>
رابط الدعوه : https://discord.gg/${invite.code}
عمر الحساب : ${moment(member.user.createdTimestamp).fromNow()}
العضو رقم : ${member.guild.memberCount}`
                        );
                        
                    welcomer.send(embed)
                  }, 2000);
            });
        }
});


client.on('guildMemberAdd', member => {
  const moment = require("moment")
        const welcomer = member.guild.channels.cache.find(
            (d) => d.name == 'invite'
        );
        if (!welcomer) return;
        if (welcomer) {
            moment.locale('en');
            var m = member.user;
            let Discord = require('discord.js');

            member.guild.fetchInvites().then((guildInvites) => {
                setTimeout(() => {
                    const invite = guildInvites.find((i) => i.uses);
                    welcomer.send(`${member}**joined**; invite by <@${invite.inviter.id}>`)
                  }, 2000);
            });
        }
});



client.on("message", async message => {
  if (message.content.startsWith(prefix + 'inviet') || message.content.startsWith(prefix + 'دعواتي')) {
      var nul = 0
      var guild = message.guild
      await guild.fetchInvites()
          .then(invites => {
              invites.forEach(invite => {
                  if (invite.inviter === message.author) {
                      nul += invite.uses
                  }
              });
          });
      if (nul > 0) {
          var embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.avatarURL())
              .setColor("#000000")
              .addField(`لقد قمت بدعوة`, ` **${nul}** شخص`)
          message.channel.send({ embed: embed });
          return;
      } else {
          var embed = new Discord.MessageEmbed()
              .setAuthor(client.user.username, client.user.avatarURL())
              .setColor("#000000")
              .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

          message.channel.send({ embed: embed });
          return;
      }
  }
})





client.on("message" , message => { 
     if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
      return message.channel.send(
        "**Please Check My Permission Embed_Links** "
      );
	var args = message.content.split(" ");
	var command = args[0];
	var anum = args[1];
	var tax = 5; 
	if(command == prefix + "tax"){
		if(!anum){
			return message.reply("`"+command+" <number>`");
		}
		var fnum = Math.floor(anum);
		if(fnum < 0 || fnum == NaN || !fnum){
			return message.reply("**يجب ان تكون القيمة صحيحة.**");
		}
		var taxval = Math.floor(fnum*(tax/100));
    var total = Math.floor(fnum-taxval);
    var tax1 = new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL())
    .setFooter(`طلب يواسطه ${message.author.username}`)
    .setTitle("الضريبه")
    .setDescription(`**
    المبلغ الأساسي : ${fnum}
    الضريبة : ${tax}%
    قيمة الضريبة : ${taxval}
    المبلغ مع الضريبة : ${total}
    **	`)
		message.channel.send(tax1);
	}
});


//=============================== - [ tickets ] - ======================================

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
if (!ticketReason) return message.channel.send(`**🙄 | يجيب عليك كتابه السبب بعد الامر**`)
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**🙄 | لا يوجد لدي الصلاحيات الكافيه**");
    let Support = message.guild.roles.cache.find(
      role => role.name === ticketrole
    );
    let everyone = message.guild.roles.cache.find(
      role => role.name === "@everyone"
    );
    if (!Support)
      return message.channel.send(`**🙄 | يجب وجود رتبه باسم \`${ticketrole}\`**`);
    if (
      message.guild.channels.cache.some(n => n.channelname === `ticket-${message.author.username}`)) return message.channel.send(`**Your Already Have Ticket.**`);
          let ticketCategory = message.guild.channels.cache.find(kah => kah.name === `${nCategory}`);
     if (!ticketCategory) return message.channel.send(`**🙄 | يجب وجود قناه باسم \`${nCategory}\`**`)
  if (!k2rba[message.author.id])
k2rba[message.author.id] = {
limt: 0,
channelname: "wan",
};
let limttick = 1
        if(k2rba[message.author.id].limt === limttick) return message.reply(`**ERORR: You need to close a ticket from \`${k2rba[message.author.id].limt}\`tickets.**`) 
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
          .setDescription(`معلومات التكت
            الاسم : \`\`\`${message.author.username} \`\`\`
                  الايدي : \`\`\`${message.author.id}\`\`\`
                  سبب التكت : \`\`\`${ticketReason}\`\`\`
                  عدد التكتات : \`\`\`${eval(`${limttick} - ${k2rba[message.author.id].limt}`)}\`\`\` `)
          .setFooter(message.author.username, message.author.avatarURL())
          .setTimestamp(`${message.author.username}`);
        ticket.send(embed1);
        ticket.send(`${Support} ..`).then(m => { 
        setTimeout(function() {
          m.edit(`**انتضر الرد من مسؤال التكتات | 👋**`);
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
    message.channel.send(`**حدد الشخص , ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**يمكن استعمال هاذ الامر في التكت فقط, ${message.author}**`);
 message.channel.createOverwrite(user.id,
    {
      'VIEW_CHANNEL': true,
      'SEND_MESSAGES': true
   });
    let embed = new Discord.MessageEmbed()
      .setTitle('تم اضافه')
      .setDescription(`**الاسم :**
      \`\`\`${user.username || user.user.username}\`\`\`
      **بواسطه:**
\`\`\`${message.author.username}\`\`\` `,true)
      .setTimestamp()
      .setFooter(`اضيف بواسطه: ${message.author.username}`, message.author.avatarURL());
    //message.channel.send(`${message.author.tag}الى التكت  ${user} اضاف`);
    message.channel.send(`${user} تم اضافتك للتكت`);
    message.channel.send(embed);
  }
if (message.content.startsWith(prefix + "remove")) {
  
    let args = message.content.split(" ")
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if(!user) {
    message.channel.send(`**حدد الشخص لحذفه من التكت, ${message.author}**`);
    return;
  }
    if (!message.channel.name.startsWith("ticket-"))
      return message.channel.send(`**🙄 | حدد الشخص داخل التكت, ${message.author}**`);
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
    if (!message.channel.name.startsWith(""))
      return message.channel.send(`**You must be in a ticket to do that, ${message.author}**`);
    if (!args)  
      return message.channel.send("**Please Type To Can Reanmed Ticket**");
    message.channel.setName(`${args}`);
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


//=============================== - [ end-ticket ] - ======================================



client.on('message', message => {
  const swearWords = ["كس", "اختك","امك", "يلعن", "المنيكوه", "منيك", "زب", "طيز", "طيزك", "خرا", "fuke", "vixen", "nude", "sow", "theocrasy", "hussy", "vice", "chorus girl", "lusts", "dram", "adulterer", "eccentricity", "adultery", "charm", "base born", "base-born", "bawdy", "bawdy", "prostitute", "tippler", "atheist"];
  if( swearWords.some(word => message.content.includes(word)) ) {
      message.delete();
      message.reply('يمنع ذكر اشياء ممنوع اختصر لو سمحت');
    }
})







client.on('channelCreate', channel => {

  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if (!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = channel.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  if (channel.type === 'text') {
      var roomType = 'Text';
  } else
  if (channel.type === 'voice') {
      var roomType = 'Voice';
  } else
  if (channel.type === 'category') {
      var roomType = 'Category';
  }

  channel.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL({dynamic : true});

      let channelCreate = new Discord.MessageEmbed()
          .setTitle('**:white_check_mark: تم بي نجاح صناعة روم **')
          .setThumbnail(userAvatar)
          .setDescription(`
          **النوع**  : __${roomType}__
          **اسم الروم** : ${channel.name}
          **ايدي الروم** : ${channel.id}
          **منشن الروم** : <#${channel.id}>
          **الفاعل** : <@${userID}>
          **ايدي الفاعل** : ${userID}
           `)
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL({dynamic : true}))

      logChannel.send(channelCreate);
  })
});
client.on('channelDelete', channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if (!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = channel.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  if (channel.type === 'text') {
      var roomType = 'Text';
  } else
  if (channel.type === 'voice') {
      var roomType = 'Voice';
  } else
  if (channel.type === 'category') {
      var roomType = 'Category';
  }

  channel.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL({dynamic : true});

      let channelDelete = new Discord.MessageEmbed()
          .setTitle('**:white_check_mark: تم بي نجاح حذف روم**')
          .setThumbnail(userAvatar)
          .setDescription(`
          **اسم الروم** :${channel.name}
          **منشن الروم** :<#${channel.id}>
          **ايدي الروم** : ${channel.id}
          **نوع الروم** :${roomType}
          **الفاعل** :<@${userID}> 
          **ايدي الفاعل** :${userID}
          `)
          .setColor('RED')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL({dynamic : true}))

      logChannel.send(channelDelete);
  })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;

  var logChannel = oldChannel.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  if (oldChannel.type === 'text') {
      var channelType = 'Text';
  } else
  if (oldChannel.type === 'voice') {
      var channelType = 'Voice';
  } else
  if (oldChannel.type === 'category') {
      var channelType = 'Category';
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL;

      if (oldChannel.name !== newChannel.name) {
          let newName = new Discord.MessageEmbed()
              .setTitle('**تم تعديل اسم روم :wrench:**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`
              **الاسم القديم** : \`\`${oldChannel.name}
              **الاسم الجديد** : \`\`${newChannel.name}
              **نوع الروم** :${channelType}
              **ايدي الروم** :${oldChannel.id}
              **منشن الروم** : <#${oldChannel.id}>
              **الفاعل**: <@${userID}> 
              **ايدي الفاعل** :${userID}
              `)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

          logChannel.send(newName);
      }
      if (oldChannel.topic !== newChannel.topic) {
          let newTopic = new Discord.MessageEmbed()
              .setTitle('**تم تحديث صلاحيات الروم**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:wrench:تم تعديل **${channelType}** صلاحيات الرومn\n**الصلاحيات القديمة:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**الصلاحيات الجديدة:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**اسم الروم:** ${oldChannel} (ID: ${oldChannel.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

          logChannel.send(newTopic);
      }
  })
});



client.on('guildBanAdd', (guild, user) => {

  if (!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if (!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();

      if (userID === client.user.id) return;

      let banInfo = new Discord.MessageEmbed()
          .setTitle('**تم حظر**')
          .setThumbnail(userAvatar)
          .setColor('DARK_RED')
          .setDescription(`**\n**:airplane:تم بي نجاح\`\`حظر\`\` **${user.username}** من هاذ السيرفر!\n\n**المستخدم:** <@${user.id}> (ID: ${user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)

      logChannel.send(banInfo);
  })
});
client.on('guildBanRemove', (guild, user) => {
  if (!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if (!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();

      let unBanInfo = new Discord.MessageEmbed()
          .setTitle('**تم فك الحظر**')
          .setThumbnail(userAvatar)
          .setColor('GREEN')
          .setDescription(`**\n**:unlock: تم بي نجاح \`\`فك الحظر عن\`\` **${user.username}** في هاذ السيرفر\n\n**المستخدم:** <@${user.id}> (ID: ${user.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)

      logChannel.send(unBanInfo);
  })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
  var logChannel = oldMember.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userAvatar = logs.entries.first().executor.avatarURL();
      var userTag = logs.entries.first().executor.tag;

      if (oldMember.nickname !== newMember.nickname) {
          if (oldMember.nickname === null) {
              var oldNM = '\`\`اسمه الاصلي\`\`';
          } else {
              var oldNM = oldMember.nickname;
          }
          if (newMember.nickname === null) {
              var newNM = '\`\`اسمه الاصلي\`\`';
          } else {
              var newNM = newMember.nickname;
          }

          let updateNickname = new Discord.MessageEmbed()
              .setTitle('**تغير اسم العضو**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:spy: تم بي نجاح \`\`تغير\`\`اسم العضو.\n\n**المستخدم:** ${oldMember} (ID: ${oldMember.id})\n**الاسم القديم:** ${newNM}\n**الاسم الجديد:** ${newNM}\n**بواسطة:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldMember.guild.name, oldMember.guild.iconURL)

          logChannel.send(updateNickname);
      }
      if (oldMember.roles.size < newMember.roles.size) {
          let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();

          let roleAdded = new Discord.MessageEmbed()
              .setTitle('**تم تحديث رتبة العضو**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('GREEN')
              .setDescription(`**\n**:white_check_mark: تم بي نجاح \`\`تحديث\`\`رتبة **${oldMember.user.username}**\n\n**المستخدم:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**رتبة:** \`\`${role.name}\`\` (ID: ${role.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar())

          logChannel.send(roleAdded);
      }
      if (oldMember.roles.size > newMember.roles.size) {
          let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();

          let roleRemoved = new Discord.MessageEmbed()
              .setTitle('**تم حذف الرتبة من العضو**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('RED')
              .setDescription(`**\n**:negative_squared_cross_mark: تم بي نجاح\`\`حذف\`\`الرتبة من **${oldMember.user.username}**\n\n**المستخدم:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**رتبة:** \`\`${role.name}\`\` (ID: ${role.id})\n**بواسطة:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar())

          logChannel.send(roleRemoved);
      }
  })
  if (oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
      let newOwner = new Discord.MessageEmbed()
          .setTitle('**[UPDATE GUILD OWNER]**')
          .setThumbnail(oldMember.guild.iconURL)
          .setColor('GREEN')
          .setDescription(`**\n**:white_check_mark: تم بي نجاح \`\`تغير المالك\`\` The Owner Ship.\n\n**المالك القديم:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**المالك الجديد:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
          .setTimestamp()
          .setFooter(oldMember.guild.name, oldMember.guild.iconURL)

      logChannel.send(newOwner);
  }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  let newMember = new Discord.MessageEmbed()
      .setTitle('**انضم العضة**')
      .setThumbnail(member.user.avatarURL())
      .setColor('GREEN')
      .setDescription(`**\n**:arrow_lower_right: تم بي نجاح انضمام العضو **${member.user.username}**لهاذ السيرفر!\n\n**المستخدم:** <@${member.user.id}> (ID: ${member.user.id})\n**في يوم:** ${Days(member.user.createdAt)}`)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL())

  logChannel.send(newMember);
});

function Days(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  let leaveMember = new Discord.MessageEmbed()
      .setTitle('**[LEAVE MEMBER]**')
      .setThumbnail(member.user.avatarURL)
      .setColor('GREEN')
      .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
      .setTimestamp()
      .setFooter(member.user.tag, member.user.avatarURL())

  logChannel.send(leaveMember);
});



client.on('voiceStateUpdate', (voiceOld, voiceNew) => {

  if (!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if (!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

  var logChannel = voiceOld.guild.channels.cache.find(c => c.name === 'log');
  if (!logChannel) return;

  voiceOld.guild.fetchAuditLogs().then(logs => {
      var userID = logs.entries.first().executor.id;
      var userTag = logs.entries.first().executor.tag;
      var userAvatar = logs.entries.first().executor.avatarURL;


      if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
          let serverMutev = new Discord.MessageEmbed()
              .setTitle('**[VOICE MUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)

          logChannel.send(serverMutev);
      }

      if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
          let serverUnmutev = new Discord.MessageEmbed()
              .setTitle('**[VOICE UNMUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar())

          logChannel.send(serverUnmutev);
      }

      if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
          let serverDeafv = new Discord.MessageEmbed()
              .setTitle('**[VOICE DEAFEN]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar())

          logChannel.send(serverDeafv);
      }

      if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
          let serverUndeafv = new Discord.MessageEmbed()
              .setTitle('**[VOICE UNDEAFEN]**')
              .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar())

          logChannel.send(serverUndeafv);
      }
  })

  if (voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
      let voiceJoin = new Discord.MessageEmbed()
          .setTitle('**[JOIN VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL())
          .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

      logChannel.send(voiceJoin);
  }

  if (voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
      let voiceLeave = new Discord.MessageEmbed()
          .setTitle('**[LEAVE VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

      logChannel.send(voiceLeave);
  }

  if (voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
      let voiceLeave = new Discord.MessageEmbed()
          .setTitle('**[CHANGED VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL())
          .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

      logChannel.send(voiceLeave);
  }
});


/*
const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true
});
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  if(command == "ticket-setup") {
      // ticket-setup #channel

      let channel = message.mentions.channels.first();
      if(!channel) return message.reply("Usage: `!ticket-setup #channel`");

      let sent = await channel.send(new Discord.MessageEmbed()
          .setTitle("Ticket System")
          .setDescription("React to open a ticket!")
          .setFooter("Ticket System")
          .setColor("00ff00")
      );

      sent.react('🎫');
      settings.set(`${message.guild.id}-ticket`, sent.id);

      message.channel.send("Ticket System Setup Done!")
  }

  if(command == "close") {
      if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
      message.channel.delete();
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if(user.partial) await user.fetch();
  if(reaction.partial) await reaction.fetch();
  if(reaction.message.partial) await reaction.message.fetch();

  if(user.bot) return;

  let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

  if(!ticketid) return;

  if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
      reaction.users.remove(user);

      reaction.message.guild.channels.create(`ticket-${user.username}`, {
          permissionOverwrites: [
              {
                  id: user.id,
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              },
              {
                  id: reaction.message.guild.roles.everyone,
                  deny: ["VIEW_CHANNEL"]
              }
          ],
          type: 'text'
      }).then(async channel => {
          channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("We will be with you shortly").setColor("00ff00"))
      })
  }
});
*/

//games

client.on("message", async message=>{
  if(message.author.bot)return;
  function ChackWiner(score){
  for (let i = 0; i < winningConditions.length; i++) {
          let a = score[winningConditions[i][0]];
          let b = score[winningConditions[i][1]];
          let c = score[winningConditions[i][2]];
          if (a === '' || b === '' || c === '')continue;
          if (a === b && b === c) return true;
  }
  return false;
  }
  const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
  winningConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    if(message.content.startsWith(prefix + "xo")){
  const member = message.mentions.users.first();
  if(!member)return message.reply("**Mention someone to play with him..**");
  var message_content = "1️⃣ 2️⃣ 3️⃣\n4️⃣ 5️⃣ 6️⃣\n7️⃣ 8️⃣ 9️⃣",
      msg = await message.channel.send('**Loading ...** Wait for the reaction :ok:'),
      game_state = ["", "", "", "", "", "", "", "", ""],
      collected = [],
      ActivePlayer = message.author.id;
  try { for (let emoji of emojis) await msg.react(emoji); } finally {msg.edit(message_content);} // يسوي الرياشكن وبعد ما يسوي يعدل للشكل الطبيعي
  const msg_two = await message.channel.send(`${message.author}`);
  const collector = msg.createReactionCollector((reaction, user) => {return emojis.includes(reaction.emoji.name) && (user.id == message.author.id || user.id == member.id);}, { time: 60 * 1000 * 5 }); // ييراكب الرياكشن اللي بيتحط علي الرسالة
  collector.on('collect', (reaction, user) => {
  reaction.users.remove(user).catch(console.error);
  if(ActivePlayer !== user.id)return;
  if(collected.find(x=> x == reaction.emoji.name))return;
  else collected.push(reaction.emoji.name);
  message_content = message_content.replace(new RegExp(reaction.emoji.name ,"g"), user.id == message.author.id ? "🇽" : "🅾️"); // يغير محتوي الرسالة بالأحديثات الجديدة
  msg.edit(message_content);
  ActivePlayer = ActivePlayer == message.author.id ? member.id : message.author.id; // نغير الدور للاعب الاخر
  msg_two.edit(`**<@${ActivePlayer}>**`);
  game_state[emojis.indexOf(reaction.emoji.name)] = user.id;
  if(ChackWiner(game_state))return msg_two.edit(`**<@${user.id}> is winner!!**`).then(()=> collector.stop()); // نشوف اذا اليوثر فاز او لا و اذا فاز يوقف مراكب الرياكشن  
  if(game_state.filter(x=> x == "").length == 0 )return msg_two.edit(`**No Winner!**`).then(()=> collector.stop());
  }).on("end",()=> msg.delete({timeout: 5000}).catch(()=> {}));
  }});



client.on('message', message => {
  if (message.content.startsWith(prefix + "lock")) {
  var args = message.content.split(" ");
  let channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
  if (args[0] === 'on') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: false
          }).then(() => {
              channel.setName(channel.name += `🔒`)
          })
      })
      return message.channel.send('locked all channels');
  } else if (args[0] === 'off') {
      channels.forEach(channel => {
          channel.updateOverwrite(message.guild.roles.everyone, {
              SEND_MESSAGES: true
          }).then(() => {
                  channel.setName(channel.name.replace('🔒', ''))
              }
          )
      })
      return message.channel.send('unlocked all channels')
  }
}
});

client.login('NzI2NjU5OTM4NjkyMjM1MzQ0.Xvggzg.ZSXt0zkisagg7LW_HAMEFqTA_VI');
