var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "HarsH",
assets : {
large_image : "Image",
large_text : "HarsH" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Mixed HarsH" ,url : "https://www.youtube.com/c/mixedharsh"},{label : "Cyber HarsH",url : "https://www.youtube.com/c/cyberharsh"},{label : "Server",url : "https://discord.gg/jv2BZqz"}]
}
})
})
client.login({ clientId : "830380470104621057" }).catch(console.error);