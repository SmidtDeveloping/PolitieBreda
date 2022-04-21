import discord, { Intents } from "discord.js";
import  wok  from "wokcommand";
import path from "path"
import env from "dotenv";
env.config()
const client = new discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
    ]
})

client.on("ready", () => {
    console.log(client.user.username);
    
})

client.login(process.env.token)