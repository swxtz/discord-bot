export type ILogger = {
    type: "SUCCESS" | "ERROR" | "WARNING" | "INFO";
    message: string;
    color: string;
};