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
    new wok({
        commandsDir(__dirname: "commands")
    })
})

client.login(process.env.TOKEN)