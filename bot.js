const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

let lastRan = 1600001;

client.on('message', msg => {
  if (msg .content === "?gen su") {
    sendAlt(msg)
}
});

function sendAlt(fmsg) {
  const now = new Date();
  if (now - lastRan > 10 * 60 * 1000) {
      
    var accounts = [
    "http://cu5.io/3x2Ko",
    "http://cu5.io/sCemmOG",
    "http://cu5.io/Mugms",
    "http://cu5.io/DUmvu1F",
    "http://cu5.io/6uoa",
    "http://cu5.io/TPDfiU6R",
    "http://cu5.io/e5vsR9",
    "http://cu5.io/CZ90Fi2s",
    "http://cu5.io/piAdpF",
    "http://cu5.io/FbLhL",
    "http://cu5.io/B84oSPPo",
    "http://cu5.io/M6tnZm",
    "http://cu5.io/3sCIRG6",
    "http://cu5.io/KnDFoc",
    
    ]
      
    // It's been more than 10 mins
    var result = Math.floor((Math.random() * accounts.length) + 0);
    fmsg.author.send("This is your account! \n \n Account Credentials: \n " + accounts[result] + " \n \n Alt By juri#4507 \n \n Join juri#4507's Official Discord: https://discord.gg/2u5qEMf \n \n" );
    
    lastRan = now;
  } else {
    fmsg.channel.send('You have already ran this command! Please wait 10 minutes.')
  }

}

client.login('NTY5NDk2NzUwNTE2MzM4Njk3.XPbvjQ.hwd1knOy5IgZRvuS1Y60Vl2kzxc');