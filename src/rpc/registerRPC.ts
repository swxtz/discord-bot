import DiscordRPC from "discord-rpc";

export async function registerRPC(token: string): Promise<void> {
    DiscordRPC.register(token);
}