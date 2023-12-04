
type IEnv = {
    token: string;
    clientId: string;
};

const token = process.env.DISCORD_TOKEN!;
const clientId = process.env.DISCORD_CLIENT_ID!;

export const env: IEnv = { token, clientId };
