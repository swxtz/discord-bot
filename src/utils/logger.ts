import chalk from "chalk";
import { ILogger } from "types/logger";

const log = console.log;



export function logger({ color, message, type }: ILogger){
    log(`[${type}]`);
}