import DiscordRPC from "discord-rpc";
import { registerRPC } from "./registerRPC";

const clientId = process.env.DISCORD_CLIENT_ID!;

export async function createRPC(): Promise<void> {
    await registerRPC(clientId);

    const rpc = new DiscordRPC.Client({ transport: "ipc" });

    rpc.setActivity({
        details: "RPC",
        state: "RPC",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "Large",
        smallImageKey: "small",
        smallImageText: "Small",
    });
}