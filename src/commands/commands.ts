import { REST, Routes } from "discord.js";
import { ICommands } from "types/commands";

const commands: ICommands[] = [
    {
        name: "ping",
        description: "Ping...",
    },
];

const token = process.env.DISCORD_TOKEN!;
const clientId = process.env.DISCORD_CLIENT_ID!;

const rest = new REST({ version: "10" }).setToken(token);

export async function registerCommands(): Promise<void> {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(clientId), {
            body: commands,
        });

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.log(error);
    }
}