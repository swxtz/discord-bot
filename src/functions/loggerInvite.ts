import { discordClient } from "utils/discordClient";
import chalk from "chalk";
import { EmbedBuilder } from "discord.js";

const client = discordClient;

export async function loggerInvite(): Promise<void> {
    client.on("inviteCreate", async (invite) => {
        const channel = await client.channels.fetch(invite.channel);
        // const inviteObj = {
        //     url: invite.url,
        //     channel: invite.channel,
        //     code: invite.code,
        //     createdAt: invite.createdAt,
        //     owner: invite.inviter,
        //     maxAge: invite.maxAge,
        // };

    //     new EmbedBuilder()
    //         .setColor("Green")
    //         .setTitle("Invite Created")
    //         .setDescription(
    //             `Invite created by ${inviteObj.owner} in ${inviteObj.channel}.\n\n**Invite URL:** ${inviteObj.url}\n**Invite Code:** ${inviteObj.code}\n**Invite Max Age:** ${inviteObj.maxAge}\n**Invite Created At:** ${inviteObj.createdAt}`
    //         )
    //         .addFields(
    //             {
    //                 name: "Dono do Convite:",
    //                 value: `${inviteObj.owner}`,
    //                 inline: false,
    //             },
    //             {
    //                 name: "Canal do Convite:",
    //                 value: `${inviteObj.channel}`,
    //                 inline: false,
    //             },
    //             {
    //                 name: "URL do Convite:",
    //                 value: `${inviteObj.url}`,
    //                 inline: false,
    //             },
    //             {
    //                 name: "Código do Convite:",
    //                 value: `${inviteObj.code}`,
    //                 inline: false,
    //             },
    //             {
    //                 name: "Tempo Máximo do Convite:",
    //                 value: `${inviteObj.maxAge}`,
    //                 inline: false,
    //             },
    //             {
    //                 name: "Criado em:",
    //                 value: `${inviteObj.createdAt}`,
    //                 inline: false,
    //             }
    //         );
    });

    
    console.log(
        chalk.yellowBright.bgBlack("[INFO] >> Invite logger initialized!")
    );
}
