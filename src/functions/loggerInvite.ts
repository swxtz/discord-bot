import { discordClient } from "utils/discordClient";
import chalk from "chalk";

const client = discordClient;

export async function loggerInvite(): Promise<void> {
    client.on("inviteCreate", async (invite) => {
        console.log(`Invite created: ${invite.code}`);
    });
    console.log(chalk.greenBright("Invite logger initialized!"));
}