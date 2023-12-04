import { registerCommands } from "commands/commands";
import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const token = process.env.DISCORD_TOKEN!;

registerCommands();

export async function initBot(): Promise<void> {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user!.tag}!`);
    });

    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === "ping") {
            await interaction.reply("Pong!");
        }
    });

    client.login(token);
}

initBot();
